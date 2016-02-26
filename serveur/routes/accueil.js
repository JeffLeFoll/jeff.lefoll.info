'use strict';

exports.accueil = function (req, res) {

  res.render('accueil', {
    titre: "titre de la page d'accueil définit dans la route"
  });
};