'use strict';

const services = require('./services');
const bootstrap = require('./bootstrap');
const config = require('./config');
const controllers = require('./controllers');
const routes = require('./routes');

module.exports = {
  bootstrap,
  controllers,
  routes,
  services,
  config,
};
