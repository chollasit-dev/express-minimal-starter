import { randomBytes } from 'crypto';
import { logger } from '../utils/logger.js';

export let NODE_ENV;

export const loadConfig = () => {
  try {
    process.loadEnvFile();
    NODE_ENV = process.env.NODE_ENV ?? 'development';
    logger('info', '[Server]', 'NODE_ENV loaded');
    process.loadEnvFile(
      NODE_ENV === 'development' ? '.env.local' : '.env.production',
    );
    logger('info', '[Server]', `Environment loaded: ${NODE_ENV}`);
  } catch (error) {
    logger('error', '[Server]', 'Failed to load environment');
    process.exit(1);
  }
};
loadConfig();

export const config = {
  // Server
  HOSTNAME: process.env.HOSTNAME,
  PORT: process.env.PORT,

  // Cors
  CORS_ALLOW_ORIGIN:
    // WARN: Only use `,` for separating multiple URLs,
    process.env.CORS_ALLOW_ORIGIN?.includes(',') ?
      process.env.CORS_ALLOW_ORIGIN.split(',')
    : process.env.CORS_ALLOW_ORIGIN,
  // NOTE: set `true` to use cookies
  CORS_CREDENTIALS: process.env.CORS_CREDENTIALS,

  // Auth
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
  JWT_SECRET: process.env.JWT_SECRET ?? randomBytes(64).toString('hex'),

  // DB
  MONGO_URI: process.env.MONGO_URI,
  TURSO_AUTH_TOKEN: process.env.TURSO_AUTH_TOKEN,
  TURSO_DATABASE_URL: process.env.TURSO_DATABASE_URL,
};
