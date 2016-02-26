'use strict';

module.exports = (app) => {
  app.get('/', require('./landing').landing);
  app.get('/toto', require('./accueil').accueil);
};