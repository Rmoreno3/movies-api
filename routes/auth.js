/* eslint-disable no-debugger */
const jwt = require('jsonwebtoken');
const boom = require('@hapi/boom');
const express = require('express');
const passport = require('passport');
const { config } = require('../config/index');
const ApiKeysService = require('../services/apiKeys');

// Basic Strategy
require('../utils/auth/strategies/basic');

function authApi(app) {
  const router = express.Router();
  app.use('/api/auth', router);

  const apiKeysService = new ApiKeysService();

  router.post('/sign-in', async function (req, res, next) {
    const { apiKeyToken } = req.body;

    if (!apiKeyToken) {
      next(boom.unauthorized('apiKeyToken is required'));
    }

    passport.authenticate('basic', async function (err, user) {
      try {
        if (err || !user) {
          next(boom.unauthorized());
        }

        req.login(user, { session: false }, async function (err) {
          if (err) {
            next(err);
          }

          const keyApi = await apiKeysService.getApiKey({ token: apiKeyToken });

          if (!keyApi) {
            next(boom.unauthorized());
          }

          const { _id: id, name, email } = user;

          const payload = {
            sub: id,
            name,
            email,
            scopes: keyApi.scopes,
          };

          const token = jwt.sign(payload, config.authJwtSecret, {
            expiresIn: '15m',
          });

          return res.status(200).json({
            token,
            user: { id, name, email },
          });
        });
      } catch (err) {
        next(err);
      }
    })(req, res, next);
  });
}

module.exports = authApi;
