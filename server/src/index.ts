import app from './app.config';
import env from './utils/env';
import prisma from './utils/prisma';

const PORT = env.PORT;

async function bootstrap() {
  try {
    await prisma.$connect();
    console.log('Connected to database');
    app.listen(PORT, () => console.log('Listening on PORT ' + PORT));
  } catch (error) {
    console.log(error);
  }
}

bootstrap();
