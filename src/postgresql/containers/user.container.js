import { prismaClient } from '../db/postgres.connection.js';
import { UserRepository } from '../repositories/user.repository.js';
import { UserService } from '../services/user.service.js';
import { UserController } from '../controllers/user.controller.js';

const userModel = new UserRepository(prismaClient);
const userService = new UserService(userModel);
const userController = new UserController(userService);

export { userController };
