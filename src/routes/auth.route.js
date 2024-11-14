import express from 'express';
import hashPassword from '../middlewares/hash.js';
import postgresAuthController from '../postgresql/containers/auth.container.js';

export const authRouter = express.Router();

authRouter.post('/signUp', hashPassword, postgresAuthController.signUp);
authRouter.post('/signIn', postgresAuthController.signIn);

export default authRouter;
