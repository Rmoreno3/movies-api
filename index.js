const debug = require('debug')('app:server');
const express = require('express');
// const helmet = require('helmet');
const cors = require('cors');
const app = express();

const { config } = require('./config/index');

const authApi = require('./routes/auth');
const moviesApi = require('./routes/movies');
const userMoviesApi = require('./routes/userMovies');

const {
  logErrors,
  handleError,
  wrapErrors,
} = require('./utils/middlewares/errorHandlers');

const notFoundHandler = require('./utils/middlewares/notFoundHandler');

//body parser
app.use(express.json());
// app.use(helmet());
app.use(cors());

//routes
authApi(app);
moviesApi(app);
userMoviesApi(app);

// catch error 404 not found
app.use(notFoundHandler);

// Errors Middlewares
app.use(logErrors);
app.use(wrapErrors);
app.use(handleError);

app.listen(config.port, () => {
  debug(`Listening http://localhost:${config.port}`);
});
