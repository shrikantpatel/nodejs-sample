var net = require('net');

var HOST = '127.0.0.1';
var PORT = 6969;

var server = net.createServer();
server.listen(PORT, HOST);
console.log('Server listening on ' + server.address + ':' + server.port);

server.on('connection', function (sock) {
    
    console.log('Recieved connaction from Client - ' + sock.remoteAddress + ':' + sock.remotePort);
    
    sock.on('data', (data) => {

        console.log('Received data from Client - ' + data)
        sock.write('You said "' + data + '"');
    });
    
    sock.on('end', () => {
        console.log('Client connection is closed');
    });
});

// Add a 'close' event handler to this instance of socket
server.on('close', function (data) {
    console.log('CLOSED: ' + sock.remoteAddress + ' ' + sock.remotePort);
});
