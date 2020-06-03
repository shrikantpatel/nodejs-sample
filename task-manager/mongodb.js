const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb+srv://admin:Mongodbtest@cluster0-mrh2p.mongodb.net/test?retryWrites=true&w=majority' 
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useUnifiedTopology: true, useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Error connecting to database!');
    } 

    console.log('Connected to database!');
});


// const client = new MongoClient(connectionURL, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
