const express = require('express');
const { moviesMocks } = require('../utils/movies/moviesData');

function moviesApi(app) {
  const router = express.Router();
  app.use('/api/movies', router);

  router.get('/', async function (req, res, next) {
    try {
      const movies = await Promise.resolve(moviesMocks);

      res.status(200).json({
        data: movies,
        message: 'Movies is listened',
      });
    } catch (error) {
      next(error);
    }
  });

  router.get('/:movieId', async function (req, res, next) {
    try {
      const movies = await Promise.resolve(moviesMocks[0]);

      res.status(200).json({
        data: movies,
        message: 'Movies retireved',
      });
    } catch (error) {
      next(error);
    }
  });

  router.post('/', async function (req, res, next) {
    try {
      const createdMovies = await Promise.resolve(moviesMocks[0].id);

      res.status(201).json({
        data: createdMovies,
        message: 'Movies is created',
      });
    } catch (error) {
      next(error);
    }
  });

  router.put('/:movieId', async function (req, res, next) {
    try {
      const updatedMovieId = await Promise.resolve(moviesMocks[0].id);

      res.status(200).json({
        data: updatedMovieId,
        message: 'Movies is updated',
      });
    } catch (error) {
      next(error);
    }
  });

  router.delete('/:movieId', async function (req, res, next) {
    try {
      const deleteMovieId = await Promise.resolve(moviesMocks[0].id);

      res.status(200).json({
        data: deleteMovieId,
        message: 'Movies is delete',
      });
    } catch (error) {
      next(error);
    }
  });
}

module.exports = moviesApi;
