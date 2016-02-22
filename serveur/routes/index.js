'use strict';

module.exports = (app) => {
  app.get('/', require('./landing').landing);
};