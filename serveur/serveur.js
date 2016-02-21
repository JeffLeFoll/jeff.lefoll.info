'use strict';

let express = require('express');
let path = require('path');
let serveStatic = require('serve-static');

class Serveur {
  constructor() {
    this.app = express();
    this.app.set('views', path.join(__dirname, 'vues'));
    this.app.set('view engine', 'jade');
    this.app.use(serveStatic(path.join(__dirname, 'public')));
    
    require('./routes')(this.app);
  }

  start() {
    console.log("Configuration de l'application pour l'environnement " + this.app.get('env'));
    let port = process.env.PORT || 5000;
    this.app.listen(port, function () {
      console.log("Écoute sur le port " + port);
    });
  }
}

if (require.main === module) {
  new Serveur().start();
}

module.exports = Serveur;