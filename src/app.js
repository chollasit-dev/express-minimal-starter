import cors from 'cors';
import express, { json } from 'express';

import { errorMiddleware } from './api/v1/middlewares/errorMiddleware.js';
import { loggerMiddlewares } from './api/v1/middlewares/loggerMiddleware.js';
import { healthcheckRoutes } from './api/v1/routes/healthcheckRoutes.js';

import helmet from 'helmet';
import { corsOptions } from './config/cors.js';

const app = express();

app.use(helmet());
app.use(cors(corsOptions));
app.use(json());
app.use(loggerMiddlewares);

app.use('/healthcheck', healthcheckRoutes);

app.use(errorMiddleware);

export { app };
