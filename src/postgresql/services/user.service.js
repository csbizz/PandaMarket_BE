export class UserService {
  constructor(userRepository) {
    this.repo = userRepository;
  }

  getUsersAndCount = async ({ orderBy, page, pageSize, keyword }) => {
    const totalCount = await this.repo.count(keyword);

    const list = await this.repo.findMany({
      orderBy,
      page,
      pageSize,
      keyword,
    });

    return { totalCount, list };
  };
}
