import { Router } from 'express';
import {
  activatePost,
  createPost,
  deactivatePost,
  deletePost,
  getAllPosts,
  getPostById,
  updatePost,
} from './post.controllers.js';
import { checkToken } from '../users/user.controllers.js';

const postRouter = Router();

postRouter.get('/posts', getAllPosts);
postRouter.post('/posts', checkToken, createPost);
postRouter.put('/posts/activate/:id', checkToken, activatePost);
postRouter.put('/posts/deactivate/:id', checkToken, deactivatePost);
postRouter.put('/posts/:id', checkToken, updatePost);
postRouter.delete('/posts/:id', checkToken, deletePost);
postRouter.get('/posts/:id', getPostById);

export default postRouter;
