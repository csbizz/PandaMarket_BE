import { FindOptions } from '#types/options.type.js';
import { UserInputDTO } from '#users/user.types.js';
import { User } from '@prisma/client';

export interface IUserRepository {
  count: (keyword: string) => Promise<number>;
  findMany: (option: FindOptions) => Promise<User[]>;
  findById: (id: string) => Promise<User> | null;
  findByEmail: (email: string) => Promise<User> | null;
  findBySignInForm: (body: UserInputDTO) => Promise<User> | null;
  create: (data: UserInputDTO) => Promise<User>;
  update: (id: string, data: UserInputDTO) => Promise<User>;
}
