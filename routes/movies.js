const express = require('express');
const MovieService = require('../services/movies');
const passport = require('passport');

const {
  movieIdSchema,
  createMovieSchema,
  updateMovieSchema,
} = require('../utils/schemas/movies');

const validationHandler = require('../utils/middlewares/validationHandler');
const scopesValidationHandler = require('../utils/middlewares/scopesValidationHandler');

const cacheResponse = require('../utils/cacheResponse');
const {
  FIVE_MINUTES_IN_SECONDS,
  SIXTY_MINUTES_IN_SECONDS,
} = require('../utils/times');

// JWT Strategy
require('../utils/auth/strategies/jwt');

function moviesApi(app) {
  const router = express.Router();
  app.use('/api/movies', router);

  const movieService = new MovieService();

  router.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['read:movies']),
    async function (req, res, next) {
      cacheResponse(res, FIVE_MINUTES_IN_SECONDS);
      const { tags } = req.query;

      try {
        const movies = await movieService.getMovies({ tags });
        // throw new Error('Error getting movies');

        res.status(200).json({
          data: movies,
          message: 'Movies is listed',
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.get(
    '/:movieId',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['read:movies']),
    validationHandler({ movieId: movieIdSchema }, 'params'),
    async function (req, res, next) {
      cacheResponse(res, SIXTY_MINUTES_IN_SECONDS);
      const { movieId } = req.params;

      try {
        const movies = await movieService.getMovie({ movieId });

        res.status(200).json({
          data: movies,
          message: 'Movies retrireved',
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['create:movies']),
    validationHandler(createMovieSchema),
    async function (req, res, next) {
      const { body: movie } = req;
      try {
        const createdMovies = await movieService.createMovie({ movie });

        res.status(201).json({
          data: createdMovies,
          message: 'Movie created',
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.put(
    '/:movieId',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['update:movies']),
    validationHandler({ movieId: movieIdSchema }, 'params'),
    validationHandler(updateMovieSchema),
    async function (req, res, next) {
      const { body: movie } = req;
      const { movieId } = req.params;
      try {
        const updatedMovieId = await movieService.updateMovie({
          movieId,
          movie,
        });

        res.status(200).json({
          data: updatedMovieId,
          message: 'Movie updated',
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.delete(
    '/:movieId',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['delete:movies']),
    validationHandler({ movieId: movieIdSchema }, 'params'),
    async function (req, res, next) {
      const { movieId } = req.params;
      try {
        const deleteMovieId = await movieService.deleteMovie({ movieId });

        res.status(200).json({
          data: deleteMovieId,
          message: 'Movies is delete',
        });
      } catch (error) {
        next(error);
      }
    }
  );

  // router.patch('/:movieId', async function (req, res, next) {
  //   const { movieId } = req.params;
  //   const { body: movie } = req;
  //   try {
  //     const updateDataMovie = await movieService.updateDataMovie({
  //       movieId,
  //       movie,
  //     });

  //     res.status(200).json({
  //       data: updateDataMovie,
  //       message: 'Data movie is Actualised',
  //     });
  //   } catch (error) {
  //     next(error);
  //   }
  // });
}

module.exports = moviesApi;
