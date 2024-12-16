import { PrismaService } from '#global/prisma.service.js';
import { WhereCondition } from '#types/conditions.type.js';
import { FindOptions } from '#types/options.type.js';
import { IUserRepository } from '#users/interfaces/user.repository.interface.js';
import { UserInputDTO } from '#users/user.types.js';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserRepository implements IUserRepository {
  private readonly user;
  constructor(private readonly prisma: PrismaService) {
    this.user = prisma.user;
  }

  async count(keyword: string) {
    const searchOption: WhereCondition = keyword ? { where: { nickname: { contains: keyword } } } : {};

    const count = await this.user.count(searchOption);

    return count;
  }

  async findMany({ orderBy, page, pageSize, keyword }: FindOptions) {
    let sortOption;
    switch (orderBy) {
      case 'recent':
      default:
        sortOption = { orderBy: { createdAt: Prisma.SortOrder.desc } };
    }

    const searchOption: WhereCondition = keyword ? { where: { nickname: { contains: keyword } } } : {};

    const users = await this.user.findMany({
      ...searchOption,
      ...sortOption,
      take: pageSize,
      skip: page,
    });

    return users;
  }

  async findById(id: string) {
    const user = await this.user.findUnique({
      where: { id },
    });

    return user;
  }

  async findByEmail(email: string) {
    const user = await this.user.findUnique({
      where: { email },
    });

    return user;
  }

  async findBySignInForm(body: UserInputDTO) {
    const { email, password } = body;
    const user = await this.user.findFirst({
      where: { email, password },
    });

    return user;
  }

  async create(data: UserInputDTO) {
    const user = await this.user.create({ data });

    return user;
  }

  async update(id: string, data: UserInputDTO) {
    const user = await this.user.update({ where: { id }, data });

    return user;
  }
}
