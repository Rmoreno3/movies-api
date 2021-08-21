const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies');

const { logErrors, handleError } = require('./utils/middlewares/errorHandlers');

//body parser
app.use(express.json());

moviesApi(app);

app.use(logErrors);
app.use(handleError);

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
});
