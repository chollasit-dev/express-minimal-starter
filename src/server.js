import { app } from './app.js';
import { config } from './config/env.js';
import * as mongoDb from './config/mongo.js';
import * as turso from './config/turso.js';
import { logger } from './utils/logger.js';

await turso.initializeDb();
await mongoDb.initializeDb();

const { HOSTNAME, PORT } = config;
app.listen(PORT, (err) => {
  if (err) {
    logger('error', '[Server]', err.message);
    process.exit(1);
  }
  logger('info', '[Server]', `Running at ${HOSTNAME}:${PORT}`);
});
