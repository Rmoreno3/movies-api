const joi = require('joi');

const movieIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const movieTitleSchema = joi.string().max(80);
const movieYearSchema = joi.number().min(1888).max(2077);
const movieCoverSchema = joi.string().uri();
const movieDescriptionSchema = joi.string().max(300);
const movieDurationSchema = joi.number().min(1).max(400);
const movieContentRatingSchema = joi.string().max(5);
const movieTagsSchema = joi.array().items(joi.string().max(40));
const movieSourceSchema = joi.string().uri();

const createMovieSchema = joi.object({
  title: movieTitleSchema.required(),
  year: movieYearSchema.required(),
  cover: movieCoverSchema.required(),
  description: movieDescriptionSchema.required(),
  duration: movieDurationSchema.required(),
  contentRating: movieContentRatingSchema.required(),
  tags: movieTagsSchema.required(),
  source: movieSourceSchema,
});

const updateMovieSchema = joi.object({
  title: movieTitleSchema,
  year: movieYearSchema,
  cover: movieCoverSchema,
  description: movieDescriptionSchema,
  duration: movieDurationSchema,
  contentRating: movieContentRatingSchema,
  tags: movieTagsSchema,
  source: movieSourceSchema,
});

module.exports = {
  movieIdSchema,
  createMovieSchema,
  updateMovieSchema,
};
