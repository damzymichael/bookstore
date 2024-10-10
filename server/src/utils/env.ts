import {cleanEnv, str, num} from 'envalid';

export default cleanEnv(process.env, {
  PORT: num({default: 4001}),
  DATABASE_URL: str(),
  JWT_SECRET: str(),
  CLIENT_URL: str()
});
