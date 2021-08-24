const assert = require('assert');
const buildsMessage = require('../utils/buildsMessage');

describe('utils - buildsMessage', () => {
  describe('when receives an entity and an action', () => {
    it('should return the respective message', () => {
      const result = buildsMessage('movie', 'create');
      const expect = 'movie created';
      assert.strictEqual(result, expect);
    });
  });

  describe('when receives an entity and an action and is a list', () => {
    it('should return the respective message with the entity in plural', () => {
      const result = buildsMessage('movie', 'list');
      const expect = 'movies listed';
      assert.strictEqual(result, expect);
    });
  });
});
