//Import the mongoose module
var mongoose = require('mongoose');

require('dotenv').config();

DB_USER=process.env.DB_USER
DB_PASS=process.env.DB_PASS
DB_PORT=process.env.DB_PORT
DB_HOST=process.env.DB_HOST

//Set up default mongoose connection
var mongoDB = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/hostels`;
mongoose.connect(mongoDB, {useNewUrlParser: true});

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;

//Get the default connection
var connection = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = connection