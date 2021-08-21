const { moviesMocks } = require('../utils/movies/moviesData');

class MovieService {
  async getMovies() {
    const movies = await Promise.resolve(moviesMocks);
    return movies || [];
  }

  async getMovie() {
    const movie = await Promise.resolve(moviesMocks[0]);
    return movie || {};
  }

  async createMovie() {
    const createMovieId = await Promise.resolve(moviesMocks[0].id);
    return createMovieId;
  }

  async updateMovie() {
    const updatedMovieId = await Promise.resolve(moviesMocks[0].id);
    return updatedMovieId;
  }

  async updateDataMovie() {
    const updatedDataMovieId = await Promise.resolve(moviesMocks[0].id);
    return updatedDataMovieId;
  }

  async deleteMovie() {
    const deletedMovieId = await Promise.resolve(moviesMocks[0].id);
    return deletedMovieId;
  }
}

module.exports = MovieService;
