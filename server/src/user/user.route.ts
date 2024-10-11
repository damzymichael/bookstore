import {Router} from 'express';
import {userMiddleware} from './user.middleware';
import userController from './user.controller';

const router = Router();

router.get('/', userMiddleware, userController.getUser);

export default router;
