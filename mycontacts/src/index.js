require('express-async-errors');
const express = require('express');
const routes = require('./routes');
const ErrorHandler = require('./app/errors/error-handler');

const app = express();

app.use(express.json());
app.use(routes);
app.use(ErrorHandler.handler);

app.listen(3000, () => console.log('🚀 Server started at http://localhost:3000'));
