import mongoose from 'mongoose';
import { logger } from '../utils/logger.js';
import { config } from './env.js';

/** @param {mongoose.Mongoose} mongoDb */
const pingConnection = async (mongoDb) => {
  try {
    const result = await mongoDb.connection.db.admin().ping();
    logger('info', '[Database]', `Ping MongoDB successfully: ${result.ok}`);
  } catch (error) {
    logger(
      'error',
      '[Database]',
      `Failed to ping MongoDB: ${error.name}: ${error.message}`,
    );
    process.exit(1);
  }
};

const connectDb = async () => {
  try {
    const mongoDb = await mongoose.connect(config.MONGO_URI, {
      autoCreate: false,
      autoIndex: false,
      bufferCommands: true,
      retryWrites: true,
      writeConcern: {
        w: 'majority',
      },
    });
    logger(
      'info',
      '[Database]',
      `MongoDB connected: ${mongoDb.connection.name}`,
    );
    return mongoDb;
  } catch (error) {
    logger(
      'error',
      '[Database]',
      `Failed to connect MongoDB: ${error.name}: ${error.message}`,
    );
    process.exit(1);
  }
};

export const initializeDb = async () => {
  const mongoDb = await connectDb();
  await pingConnection(mongoDb);
};
