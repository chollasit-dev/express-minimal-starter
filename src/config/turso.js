import { sql } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/libsql';
import { config, NODE_ENV } from '../config/env.js';
import { logger } from '../utils/logger.js';

export const db = drizzle({
  connection: {
    url: config.TURSO_DATABASE_URL,
    authToken: config.TURSO_AUTH_TOKEN,
  },
});

const pingConnection = async () => {
  try {
    const result = await db.run(sql`SELECT 1;`);
    const dbType = NODE_ENV === 'development' ? 'SQLite3' : 'Turso';
    logger('info', '[Database]', `Test ${dbType} successfully`);
  } catch (error) {
    process.exit(1);
  }
};

export const initializeDb = async () => {
  await pingConnection();
  if (NODE_ENV === 'development') {
    await db.run(sql`PRAGMA foreign_keys = 1;`);
    logger('info', '[Database]', 'Foreign keys enabled');
  }
};
