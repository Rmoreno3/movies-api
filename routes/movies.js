const express = require('express');
const MovieService = require('../services/movies');

function moviesApi(app) {
  const router = express.Router();
  app.use('/api/movies', router);

  const movieService = new MovieService();

  router.get('/', async function (req, res, next) {
    const { tags } = req.query;

    try {
      const movies = await movieService.getMovies({ tags });
      // throw new Error('Error getting movies');

      res.status(200).json({
        data: movies,
        message: 'Movies is listened',
      });
    } catch (error) {
      next(error);
    }
  });

  router.get('/:movieId', async function (req, res, next) {
    const { movieId } = req.params;

    try {
      const movies = await movieService.getMovie({ movieId });

      res.status(200).json({
        data: movies,
        message: 'Movies retireved',
      });
    } catch (error) {
      next(error);
    }
  });

  router.post('/', async function (req, res, next) {
    const { body: movie } = req;
    try {
      const createdMovies = await movieService.createMovie({ movie });

      res.status(201).json({
        data: createdMovies,
        message: 'Movies is created',
      });
    } catch (error) {
      next(error);
    }
  });

  router.put('/:movieId', async function (req, res, next) {
    const { body: movie } = req;
    const { movieId } = req.params;
    try {
      const updatedMovieId = await movieService.updateMovie({ movieId, movie });

      res.status(200).json({
        data: updatedMovieId,
        message: 'Movies is updated',
      });
    } catch (error) {
      next(error);
    }
  });

  router.delete('/:movieId', async function (req, res, next) {
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
  });

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
