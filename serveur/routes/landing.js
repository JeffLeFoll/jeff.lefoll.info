'use strict';

exports.landing = function (req, res) {

  res.render('landing', {
    titre: "Jean-François Le Foll"
  });
};