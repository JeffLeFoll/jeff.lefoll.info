'use strict' 

var ApiCompetences = require('./api_competences')
 
module.exports = (app) => {
  app.get('/api/competences/techniques', ApiCompetences.competencesTechniques);
};