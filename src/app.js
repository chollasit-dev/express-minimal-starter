import cors from 'cors';
import express, { json } from 'express';

import { errorMiddleware } from './api/v1/middlewares/errorMiddleware.js';
import { loggerMiddlewares } from './api/v1/middlewares/loggerMiddleware.js';
import { indexRoutes } from './api/v1/routes/indexRoutes.js';

import helmet from 'helmet';
import { corsOptions } from './config/cors.js';

const app = express();

app.use(helmet());
app.use(cors(corsOptions));
app.use(json());
app.use(loggerMiddlewares);

app.use('/', indexRoutes);

app.use(errorMiddleware);

export { app };
