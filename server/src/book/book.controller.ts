import {Controller} from '../utils/request-handler.config';
import prisma from '../utils/prisma';
import {Request} from 'express';
import {Book} from '@prisma/client';
import {OMIT_OPTIONS} from '../utils/constants';
import createHttpError from 'http-errors';

//Todo Change category query parameter
type BookQuery = {
  group: 'bestselling' | 'featured';
  category: 'art' | 'romance' | 'thriller' | 'health';
  take: string;
};

//Switch books postion and return 6 books
function swapBooks<T>(books: T[], take: string) {
  if (take === 'all') return books;
  for (let i = books.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [books[i], books[j]] = [books[j], books[i]];
  }
  return books.slice(0, 6);
}

export default Controller({
  async getBooksByCategory(req: Request<{}, {}, {}, BookQuery>, res) {
    const {group, category, take} = req.query;
    let books: Omit<Book, 'createdAt' | 'updatedAt'>[];
    switch (group) {
      case 'bestselling':
        books = await prisma.book.findMany({
          where: {bestSelling: true},
          ...OMIT_OPTIONS
        });
        books = swapBooks<(typeof books)[number]>(books, take);
        break;
      case 'featured':
        books = await prisma.book.findMany({
          where: {bestSelling: false},
          ...OMIT_OPTIONS
        });
        books = swapBooks<(typeof books)[number]>(books, take);
        break;
      default:
        books = await prisma.book.findMany({
          ...OMIT_OPTIONS,
          where: {category}
        });
        books = swapBooks(books, take);
    }
    return res.status(200).json(books);
  },

  async getAllBooks(_, res) {
    const books = await prisma.book.findMany({
      select: {id: true, title: true, authors: true, category: true}
    });
    res.status(200).json(books);
  },

  async getBook(req: Request<{id: string}>, res) {
    const book = await prisma.book.findUnique({where: {id: req.params.id}});
    if (!book) throw createHttpError(404, 'Book not found');
    return res.status(200).json(book);
  }
});
