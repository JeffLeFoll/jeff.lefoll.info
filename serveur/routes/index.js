'use strict';

module.exports = (app) => {
  app.get('/', require('./accueil').index);
};