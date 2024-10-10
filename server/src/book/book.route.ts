import {Router} from 'express';
import bookController from './book.controller';

const router = Router();

router.get('/', bookController.getAllBooks);

router.get('/category', bookController.getBooksByCategory);

router.get('/:id', bookController.getBook);


export default router;
