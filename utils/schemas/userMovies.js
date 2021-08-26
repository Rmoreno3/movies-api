const joi = require('joi');

const { movieIdSchema } = './movies.js';
const { userIdSchema } = './users.js';

const userMovieIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);

const createUserMovieSchema = {
  userId: userIdSchema,
  movieId: movieIdSchema,
};

module.exports = {
  userMovieIdSchema,
  createUserMovieSchema,
};
