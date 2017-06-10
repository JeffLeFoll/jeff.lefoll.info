'use strict';
const sockjs = require('sockjs');
const websocket_multiplex = require('websocket-multiplex');
const wsRoutes = require('./ws/index').wsEndPoints;

class ConfigWebSocket {
    constructor() {
    }

    enregistrerWebSocket(serveurHttp) {
      let wsServeur = sockjs.createServer();
      let multiplexer = new websocket_multiplex.MultiplexServer(wsServeur);

      wsRoutes.forEach(route => new route(multiplexer));

      wsServeur.installHandlers(serveurHttp, {prefix: '/ws'})
    }

}

module.exports = ConfigWebSocket;
