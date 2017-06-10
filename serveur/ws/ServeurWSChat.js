

class ServeurWSChat {

  constructor(multiplexer) {
    this.clients = [];

    let tchatChannel = multiplexer.registerChannel('tchat');

    this.onConnection(tchatChannel);
  }

  onConnection(tchatChannel) {
    tchatChannel.on('connection', (socket) => {

      this.clients.push(socket);

      this.onData(socket);

      this.onClose(socket);
    });
  }

  onData(socket) {
    socket.on('data', (data) => {
      console.log('msg: ' + JSON.stringify(data));

      this.clients.forEach(client => client.write(data));
    });
  }

  onClose(socket) {
    console.log('#Logoff : ' + socket.id);
  }
}

module.exports = ServeurWSChat;
