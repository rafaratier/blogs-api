const express = require('express');
const errorHandlerMiddleware = require('./middlewares/errorHandlerMiddleware');
// ...

const app = express();
const routes = require('./routes');

app.use(express.json());

app.use(routes);

app.use(errorHandlerMiddleware);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
