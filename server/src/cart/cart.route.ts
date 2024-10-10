import {Router} from 'express';
import cartController from './cart.controller';
import {userMiddleware} from '../user/user.middleware';

const router = Router();

router.get('/', userMiddleware, cartController.getCartItems);

router.post('/', userMiddleware, cartController.addToCart);

router.patch('/:id', userMiddleware, cartController.changeCartQuantity);

router.delete('/:id', userMiddleware, cartController.deleteFromCart);

export default router;
