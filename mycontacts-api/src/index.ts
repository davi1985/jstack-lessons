require('express-async-errors');

import express from 'express';
import { routes } from './routes';
import { cors } from './app/middlewares/cors';
import { errorHandler } from './app/middlewares/errorHandler';

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors);
app.use(routes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`🚀 Server started at http://localhost:${port}`);
});
