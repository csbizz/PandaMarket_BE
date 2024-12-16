import { ModelBase } from '#types/common.types.js';
import { UserInputDTO } from '#users/user.types.js';
import { User } from '@prisma/client';

export interface UserToken {
  userId: string;
  exp: number;
  iat: number;
}

export interface SignInDTO extends Pick<User, 'email' | 'password'> {}
export interface FilteredUserOutputDTO extends Omit<UserInputDTO, 'password' | 'salt' | 'refreshToken'>, ModelBase {}
