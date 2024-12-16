import { FilteredUserOutputDTO, SignInDTO } from '#auth/auth.types.js';
import { UserInputDTO } from '#users/user.types.js';

export interface IAuthService {
  getMe: () => Promise<FilteredUserOutputDTO> | null;
  createUser: (body: UserInputDTO) => Promise<FilteredUserOutputDTO> | null;
  signIn: (body: SignInDTO) => Promise<{ user: FilteredUserOutputDTO & { accessToken: string }; refreshToken: string }> | null;
  getNewToken: () => Promise<FilteredUserOutputDTO & { accessToken: string }> | null;
}
