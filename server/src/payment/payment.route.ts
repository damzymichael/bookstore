import {Router} from 'express';
import paymentController from './payment.controller';

const router = Router();

router.get('/webhook', paymentController.processPayment);

export default router;
