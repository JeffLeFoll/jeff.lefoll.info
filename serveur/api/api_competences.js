'use strict';

exports.competencesTechniques = function (req, res) {

    var compTechniques = require('./data/competences_techniques.json');

    return res.status(200).json(compTechniques);
};



