var https = require('https');

var host = 'jsonplaceholder.typicode.com';


var options = {
    host: host,
    port: 443,
    path: '/posts/1',
    method: 'GET',
};

https.request(options, function (res) {
    res.setEncoding('utf-8');

    var responseString = '';

    res.on('data', function (data) {
        responseString += data;
        console.log(responseString);
        var responseObject = JSON.parse(responseString);
        console.log(responseObject.userId);   
    });

}).end();
