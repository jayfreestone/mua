const config = require('dotenv').config();
const withTypescript = require('@zeit/next-typescript');

module.exports = withTypescript({
  publicRuntimeConfig: config,
});
