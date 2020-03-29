var net = require('net');

var HOST = '127.0.0.1';
var PORT = 6969;

var client = net.createConnection();
client.connect(PORT, HOST, function () {

    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    // Write a message to the socket as soon as the client is connected, the server will receive it as message from the client 
    var data = 'I am Chuck Norris!';
    console.log('About to send - ' + data);
    client.write(data);

});

// Add a 'data' event handler for the client socket
// data is what the server sent to this socket
client.on('data', function (data) {

    console.log('DATA received from server: ' + data);
    // Close the client socket completely
    client.destroy();

});

// Add a 'close' event handler for the client socket
client.on('close', function () {
    console.log('Connection closed');
});