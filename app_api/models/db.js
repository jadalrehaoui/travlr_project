const mongoose = require('mongoose');
const host = process.env.DB_HOST || '127.0.0.1';
const db_uri = `mongodb://${host}/travlr`;
const seed = require('./seed');
// connect function to db
const connect = () => {
    setTimeout(() => mongoose.connect(db_uri, {
        useNewUrlParser: true,
        // useCreateIndex: true
    }), 1000);
}

// when connected
mongoose.connection.on('connected', () => {
    console.log(`✓ connected to mongodb @${host}`);
});

// when disconnected
mongoose.connection.on('disconnected', () => {
    console.log(`✕ disconnected from mongodb @${host}`);
});

// when error occurs
mongoose.connection.on('error', err => {
    console.log(`✕ MongoDB Error\n${err}`);
});

// run connect
connect();

// require the schemas
require('./trips');
require('./rooms');

// because seedgoose did not work I seeded the database like this
seed.insertTrips()
seed.insertRooms()