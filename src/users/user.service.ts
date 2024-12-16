import { FindOptions } from '#types/options.type.js';
import { UserNotFoundException } from '#users/user.exception.js';
import { UserRepository } from '#users/user.repository.js';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getUsers({ orderBy, page, pageSize, keyword }: FindOptions) {
    const totalCount = await this.userRepository.count(keyword);

    const list = await this.userRepository.findMany({
      orderBy,
      page,
      pageSize,
      keyword,
    });

    return { totalCount, list };
  }

  async getUser(id: string) {
    const user = await this.userRepository.findById(id);
    if (!user) throw new UserNotFoundException();

    return user;
  }
}
