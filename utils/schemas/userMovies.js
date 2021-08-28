const joi = require('joi');

const { movieIdSchema } = require('./movies.js');
const { userIdSchema } = require('./users.js');

const userMovieIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);

const createUserMovieSchema = {
  userId: userIdSchema,
  movieId: movieIdSchema,
};

module.exports = {
  userMovieIdSchema,
  createUserMovieSchema,
};
