import {
  AuthInvalidAccessTokenException,
  AuthInvalidRefreshTokenException,
  AuthInvalidTokenException,
  AuthUserAlreadyExistException,
  AuthWrongCredentialException,
} from '#auth/auth.exception.js';
import { SignInDTO } from '#auth/auth.types.js';
import { IAuthService } from '#auth/interfaces/auth.service.interface.js';
import { JwtGenerateService } from '#auth/jwt-generate.service.js';
import { IStorage } from '#types/common.types.js';
import { UserRepository } from '#users/user.repository.js';
import { UserInputDTO } from '#users/user.types.js';
import compareExp from '#utils/compareExp.js';
import filterSensitiveData from '#utils/filterSensitiveData.js';
import hashingPassword from '#utils/hashingPassword.js';
import { Injectable } from '@nestjs/common';
import { AsyncLocalStorage } from 'async_hooks';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtGenerateService: JwtGenerateService,
    private readonly als: AsyncLocalStorage<IStorage>,
  ) {}

  async getMe() {
    const { userId } = this.als.getStore();
    const user = await this.userRepository.findById(userId);
    if (!user) throw new AuthInvalidAccessTokenException();

    return filterSensitiveData(user);
  }

  async createUser(body: UserInputDTO) {
    const exist = await this.userRepository.findByEmail(body.email);
    if (exist) throw new AuthUserAlreadyExistException();

    const user = await this.userRepository.create(body);

    return filterSensitiveData(user);
  }

  async signIn(body: SignInDTO) {
    const user = await this.userRepository.findByEmail(body.email);
    if (!user) throw new AuthWrongCredentialException();

    const { salt, password } = user;
    const hashedPassword = hashingPassword(body.password, salt);

    if (hashedPassword != password) throw new AuthWrongCredentialException();

    const accessToken = this.jwtGenerateService.generateAccessToken({ userId: user.id });
    // NOTE refreshToken 발급 후 최근 발급된 토큰을 유저 정보에 저장
    const refreshToken = this.jwtGenerateService.generateRefreshToken({ userId: user.id });
    user.refreshToken = refreshToken;
    await this.userRepository.update(user.id, user);

    return { user: { ...filterSensitiveData(user), accessToken }, refreshToken };
  }

  async getNewToken() {
    const { userId, exp, refreshToken } = this.als.getStore();

    const user = await this.userRepository.findById(userId);
    if (!user) throw new AuthInvalidRefreshTokenException();
    if (user.refreshToken !== refreshToken) throw new AuthInvalidTokenException();

    // NOTE 리프레시 토큰의 남은 시간이 2시간 이내일경우
    const timeRemaining = compareExp(exp);
    if (timeRemaining < 3600 * 2) {
      // NOTE 새 리프레시 토큰을 발급하고 이를 업데이트
      const refreshToken = this.jwtGenerateService.generateRefreshToken({ userId: user.id });
      user.refreshToken = refreshToken;
      await this.userRepository.update(user.id, user);
    }

    const accessToken = this.jwtGenerateService.generateAccessToken({ userId: user.id });

    return { ...filterSensitiveData(user), accessToken };
  }
}
