import prisma from '../utils/prisma';
import env from '../utils/env';
import {asyncWrapper} from '../utils/request-handler.config';
import jwt from 'jsonwebtoken';
import {randomInt, randomUUID} from 'crypto';

function generatePhoneNumber() {
  const numPrefixes = ['080', '081', '090', '070', '091'];
  const number = randomInt(10000000, 99999999).toString();
  const randomIndex = Math.floor(Math.random() * (numPrefixes.length + 1));
  return numPrefixes[randomIndex] + number;
}

function generateEmail() {
  const EMAIL_PREFIX = 'bookstore';
  const EMAIL_ID = randomUUID().slice(0, 5);
  const email = `${EMAIL_PREFIX}-${EMAIL_ID}@bookstore.com`;
  return email;
}

//Todo Add function to mail me when a new user is created 
async function createUser() {
  const phoneNumber = generatePhoneNumber();
  const email = generateEmail();
  const user = await prisma.user.create({
    data: {email, phoneNumber},
    omit: {createdAt: true, updatedAt: true}
  });
  return user;
}

type User = Awaited<ReturnType<typeof createUser>>;

function createToken(user: User) {
  const token = jwt.sign({user}, env.JWT_SECRET, {expiresIn: '30 days'});
  return token;
}

export const userMiddleware = asyncWrapper(async (req, res, next) => {
  const {authorization} = req.headers;
  if (!authorization || !authorization.split(' ')[1]) {
    const user = await createUser();
    const token = createToken(user);
    req.user = user;
    res.set('x-access-token', token);
    next();
    return;
  }
  const token = authorization.split(' ')[1];
  const payload: any = jwt.verify(token, env.JWT_SECRET);
  req.user = payload.user;
  next();
});
