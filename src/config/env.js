import { randomBytes } from 'crypto';
import path from 'path';

export let NODE_ENV;

export const loadConfig = () => {
  try {
    process.loadEnvFile();
    NODE_ENV = process.env.NODE_ENV ?? 'development';
    process.loadEnvFile(
      NODE_ENV === 'development' ? '.env.local' : '.env.production',
    );
    console.log(`Loaded ${NODE_ENV} environment variables`);
  } catch (error) {
    console.error('Unable to load environment variables');
  }
};
loadConfig();

export const config = {
  CORS_ALLOW_ORIGIN: process.env.CORS_ALLOW_ORIGIN ?? '*',
  CORS_CREDENTIALS: Boolean(process.env.CORS_CREDENTIALS) ?? false, // NOTE: set `true` to use cookies
  HOSTNAME: process.env.HOSTNAME ?? 'http://127.0.0.1',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN ?? '3h',
  JWT_SECRET: process.env.JWT_SECRET ?? randomBytes(64).toString('hex'),
  MONGO_URI: process.env.MONGO_URI ?? 'mongodb://localhost:27017',
  PORT: process.env.PORT ?? 3000,
  TURSO_AUTH_TOKEN: process.env.TURSO_AUTH_TOKEN,
  TURSO_DATABASE_URL:
    NODE_ENV === 'development' ?
      `file:///${path.resolve(process.env.TURSO_DATABASE_URL ?? 'db.sqlite3')}`
    : process.env.TURSO_DATABASE_URL,
};
