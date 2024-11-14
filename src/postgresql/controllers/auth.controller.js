import { assert } from 'superstruct';
import { CreateUser, SignIn } from '../../struct.js';

export class AuthController {
  constructor(authService) {
    this.service = authService;
  }

  signUp = async (req, res, next) => {
    assert(req.body, CreateUser);

    const user = await this.service.createUser(req.body);

    if (!user) res.status(400).json();
    // NOTE 유저가 이미 존재함
    if (user === true) res.status(400).json({ messages: 'User already exist' });
    res.status(201).json(user);
  };

  signIn = async (req, res) => {
    assert(req.body, SignIn);

    const { user, refreshToken } = await this.service.getUser(req.body);

    if (!user) res.status(401).json();
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      sameSite: 'Lax',
      secure: true,
    });
    res.json(user);
  };
}
