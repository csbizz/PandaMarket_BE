import { FilteredUserOutputDTO, SignInDTO } from '#auth/auth.types.js';
import { UserInputDTO } from '#users/user.types.js';
import { Response } from 'express';

export interface IAuthController {
  signUp: (body: UserInputDTO) => Promise<FilteredUserOutputDTO>;
  signIn: (body: SignInDTO, res: Response) => Promise<FilteredUserOutputDTO & { accessToken: string }>;
  getMe: () => Promise<FilteredUserOutputDTO>;
  refreshToken: () => Promise<FilteredUserOutputDTO & { accessToken: string }>;
}
