const assert = require('assert');
const proxyquire = require('proxyquire');

const { getAllStub, MongoLibMock } = require('../utils/mocks/mongoLib');

const { moviesMocks } = require('../utils/movies/moviesData');

describe('services - movies', () => {
  const MovieServices = proxyquire('../services/movies', {
    '../lib/mongo': MongoLibMock,
  });
  const moviesService = new MovieServices();

  describe('when getMovies method is called', async function () {
    it('should call the get all Mongolib method', async function () {
      await moviesService.getMovies({});
      assert.strictEqual(getAllStub.called, true);
    });

    it('should return an array of movies', async function () {
      const result = await moviesService.getMovies({});
      const expected = moviesMocks;
      assert.deepEqual(result, expected);
    });
  });
});
