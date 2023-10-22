import { Router } from 'express';
import userRouter from '../modules/users/user.routes.js';
import postRouter from '../modules/posts/post.routes.js';
import contactRouter from '../modules/contacts/contact.routes.js';

const router = Router();

router.use(userRouter);
router.use(postRouter);
router.use(contactRouter);

export default router;
