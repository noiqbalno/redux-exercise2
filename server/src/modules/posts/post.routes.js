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

const postRouter = Router();

postRouter.get('/posts', getAllPosts);
postRouter.post('/posts', createPost);
postRouter.put('/posts/activate/:id', activatePost);
postRouter.put('/posts/deactivate/:id', deactivatePost);
postRouter.put('/posts/:id', updatePost);
postRouter.delete('/posts/:id', deletePost);
postRouter.get('/posts/:id', getPostById);

export default postRouter;
