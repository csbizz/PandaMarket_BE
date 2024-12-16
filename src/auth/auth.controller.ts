import { AuthService } from '#auth/auth.service.js';
import { SignInDTO } from '#auth/auth.types.js';
import { AccessTokenGuard } from '#auth/guards/access-token.guard.js';
import { HashPasswordGuard } from '#auth/guards/hash-password.guard.js';
import { RefreshTokenGuard } from '#auth/guards/refresh-token.guard.js';
import { IAuthController } from '#auth/interfaces/auth.controller.interface.js';
import { UserInputDTO } from '#users/user.types.js';
import { Body, Controller, Get, HttpCode, HttpStatus, Post, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';

@Controller('auth')
export class AuthController implements IAuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signUp')
  @HttpCode(HttpStatus.CREATED)
  @UseGuards(HashPasswordGuard)
  async signUp(@Body() body: UserInputDTO) {
    const user = await this.authService.createUser(body);

    return user;
  }

  @Post('signIn')
  async signIn(@Body() body: SignInDTO, @Res({ passthrough: true }) res: Response) {
    const { user, refreshToken } = await this.authService.signIn(body);

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      sameSite: 'none',
      secure: true,
    });

    return user;
  }

  @Get('me')
  @UseGuards(AccessTokenGuard)
  async getMe() {
    const user = await this.authService.getMe();

    return user;
  }

  @Post('refresh')
  @UseGuards(RefreshTokenGuard)
  async refreshToken() {
    const user = await this.authService.getNewToken();

    return user;
  }
}
