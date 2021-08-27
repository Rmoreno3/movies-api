const boom = require('@hapi/boom');
const passport = require('passport');
const { config } = require('../../../config/index');
const UsersService = require('../../../services/users');
const { Strategy, ExtractJwt } = require('passport-jwt');

passport.use(
  new Strategy(
    {
      secretOrKey: config.authJwtSecret,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async function (tokenPayload, cb) {
      const userService = new UsersService();

      try {
        const user = await userService.getUser({ email: tokenPayload.email });

        if (!user) {
          return cb(boom.unauthorized(), false);
        }

        delete user.password;

        return cb(null, { ...user, scopes: tokenPayload.scopes });
      } catch (error) {
        return cb(error);
      }
    }
  )
);
