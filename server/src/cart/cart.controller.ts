import prisma from '../utils/prisma';
import {Controller} from '../utils/request-handler.config';
import {OMIT_OPTIONS} from '../utils/constants';
import {Cart} from '@prisma/client';
import {Request} from 'express';
import createHttpError from 'http-errors';

const findCart = (userId: string) => {
  return prisma.cart.findFirst({
    where: {userId, purchased: false},
    ...OMIT_OPTIONS,
    include: {
      cartItems: {
        ...OMIT_OPTIONS,
        include: {
          book: {
            select: {
              id: true,
              title: true,
              authors: true,
              price: true,
              thumbnail: {select: {small: true}}
            }
          }
        }
      }
    }
  });
};

export default Controller({
  async getCartItems(req, res) {
    const cart = await findCart(req.user.id);
    return res.status(200).json(cart ? cart.cartItems : []);
  },

  async addToCart(req: Request<{}, {}, {bookId: string}>, res) {
    const {bookId} = req.body;
    const existingCart = await findCart(req.user.id);
    let newCart: Cart;
    if (!existingCart) {
      newCart = await prisma.cart.create({data: {userId: req.user.id}});
    } else {
      const itemInCart = existingCart.cartItems.find(
        item => item.book.id === bookId
      );
      if (itemInCart) throw createHttpError(403, 'Item already in cart');
    }
    await prisma.cartItem.create({
      data: {
        cartId: existingCart ? existingCart.id : newCart.id,
        bookId,
        quantity: 1
      }
    });
    return res.status(201).json({message: 'Item added to cart'});
  },

  async changeCartQuantity(
    req: Request<{id: string}, {}, {quantity: number}>,
    res
  ) {
    await prisma.cartItem.update({
      where: {id: req.params.id},
      data: {quantity: req.body.quantity}
    });

    res.status(200).json({message: 'Cart item updated'});
  },

  async deleteFromCart(req: Request<{id: string}>, res) {
    await prisma.cartItem.delete({where: {id: req.params.id}});
    res.status(200).json({message: 'Cart item deleted'});
  }
});
