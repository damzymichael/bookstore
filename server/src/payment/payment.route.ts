import {Router} from 'express';
import paymentController from './payment.controller';

const router = Router();

router.post('/webhook', paymentController.processPayment);

export default router;
