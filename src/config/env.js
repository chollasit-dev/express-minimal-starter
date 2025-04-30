import { randomBytes } from 'crypto';

export let NODE_ENV;

try {
  process.loadEnvFile();
  NODE_ENV = process.env.NODE_ENV ?? 'development';
  process.loadEnvFile(
    NODE_ENV === 'development' ? '.env.local' : '.env.production',
  );
} catch (error) {
  console.error('Cannot load environment variables');
}

export const config = {
  HOSTNAME: process.env.HOSTNAME ?? 'http://127.0.0.1',
  MONGO_URI: process.env.MONGO_URI ?? 'mongodb://localhost:27017',
  PORT: process.env.PORT ?? 3000,
  TURSO_URI: process.env.TURSO_URI ?? 'sqlite3:test.sqlite3',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN ?? '3h',
  JWT_SECRET: process.env.JWT_SECRET ?? randomBytes(64).toString('hex'),
};
