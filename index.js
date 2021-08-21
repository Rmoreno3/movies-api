const express = require('express');
const helmet = require('helmet');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies');

const {
  logErrors,
  handleError,
  wrapErrors,
} = require('./utils/middlewares/errorHandlers');

const notFoundHandler = require('./utils/middlewares/notFoundHandler');

//body parser
app.use(express.json());
app.use(helmet());

//routes
moviesApi(app);

// catch error 404 not found
app.use(notFoundHandler);

// Errors Middlewares
app.use(logErrors);
app.use(wrapErrors);
app.use(handleError);

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
});
