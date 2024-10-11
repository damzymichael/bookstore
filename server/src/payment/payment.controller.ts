import {Controller} from '../utils/request-handler.config';
import prisma from '../utils/prisma';

export default Controller({
  async processPayment(req, res) {
    await prisma.cart.update({
      where: {id: req.body.data.metadata.cartId},
      data: {purchased: true}
    });
    return res.status(201).json({message: 'Payment processed'});
  }
});
