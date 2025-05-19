import { logger } from '../../../utils/logger.js';

/** @type {import('express').RequestHandler} */
const logMethod = (req, _, next) => {
  logger('info', '[Server]', `Method: ${req.method}`);
  next();
};

/** @type {import('express').RequestHandler} */
const logOriginalUrl = (req, _, next) => {
  logger('info', '[Server]', `URI: ${req.originalUrl}`);
  next();
};

export const loggerMiddlewares = [logMethod, logOriginalUrl];
