'use strict';

exports.index = function (req, res) {

  res.render('index', {
    titre: "titre de la page d'accueil définit dans la route"
  });
};