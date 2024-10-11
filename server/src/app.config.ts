import 'dotenv/config';
import express, {Request, Response, NextFunction} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import createHttpError, {isHttpError} from 'http-errors';
import env from './utils/env';
import cartRoutes from './cart/cart.route';
import bookRoutes from './book/book.route';
import userRoutes from './user/user.route';
import paymentRoutes from './payment/payment.route';

const homeMessage = `
<div style="display: flex; align-items: center; justify-content: center; height: 90vh"> 
<h1 style="font-size: 72px; background: -webkit-linear-gradient(45deg, #09009f, #00ff95 80%); -webkit-background-clip: text;
-webkit-text-fill-color: transparent;">BOOKSTORE REST API</h1>
</div>
`;
const app = express();
app.use(morgan('dev'));
app.use(cors({origin: [env.CLIENT_URL], exposedHeaders: ['x-access-token']}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get('/', (req, res) => res.status(200).send(homeMessage));
app.use('/cart', cartRoutes);
app.use('/book', bookRoutes);
app.use('/user', userRoutes);
app.use('/payment', paymentRoutes);

//Not found
app.use((req, res, next) => next(createHttpError(404, 'Endpoint not found')));

//Error Middleware
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  let errorMessage = 'An unknown error occurred';
  let statusCode = 500;
  //Todo Handle prisma invalid id error
  if (isHttpError(error)) {
    statusCode = error.status;
    errorMessage = error.message;
  }
  res.status(statusCode).json({message: errorMessage, statusCode});
});

export default app;
