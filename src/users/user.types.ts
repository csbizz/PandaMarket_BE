import { ModelBase } from '#types/common.types.js';
import { User } from '@prisma/client';

export interface UserInputDTO extends Omit<User, keyof ModelBase> {}
