import { Router } from 'express';
import {
  getAllUser,
  getUserById,
  login,
  register,
} from './user.controllers.js';
// import { createUserValidator } from './users.validations.js';

const userRouter = Router();

userRouter.get('/users', getAllUser);
userRouter.post('/users/register', register);
userRouter.post('/users/login', login);
userRouter.get('/users/:id', getUserById);

export default userRouter;
