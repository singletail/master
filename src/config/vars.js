const path = require('path');

require('dotenv').config({
  path: path.join(__dirname, '../../.env'),
});

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  jwt: {
    key: process.env.JWT_KEY_PVT,
    accessExpirationMinutes: process.env.JWT_EXPIRATION_MINUTES,
    refreshExpirationDays: process.env.JWT_REFRESH_DAYS,
  },
  mongo: {
    uri:
      process.env.NODE_ENV === 'test'
        ? process.env.MONGO_URI_TESTS
        : process.env.MONGO_URI,
  },
};
