import filterSensitiveData from '../../filterSensitiveData.js';
import hashingPassword from '../../hashingPassword.js';

export class AuthService {
  constructor(userRepo) {
    this.repo = userRepo;
  }

  createUser = async body => {
    const exist = await this.repo.findByEmail(body.email);
    console.log('🚀 ~ AuthService ~ exist:', exist);
    if (exist) return true;

    const user = await this.repo.create(body);
    if (!user) return null;

    return user;
  };

  getUser = async body => {
    const user = await this.repo.findByEmail(body.email);
    if (!user) return null;

    const { salt, password } = user;
    const hashedPassword = hashingPassword(body.password, salt);

    if (hashedPassword != password) return null;

    return filterSensitiveData(user);
  };
}
