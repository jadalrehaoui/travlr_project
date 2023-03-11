const mongoose = require('mongoose');
const Trip = require('./trips');
const Room = require('./rooms');
const fs = require('fs');

const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));
const rooms = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf8'));

const insertTrips = async () => {
    await Trip.deleteMany({}).then(
        () => console.log("\t✓ deleted all trips")
    )
    await Trip.insertMany(trips).then(
        () => console.log("\t✓ added all trips from json")
    )
}

const insertRooms = async () => {
    await Room.deleteMany({}).then(
        () => console.log("\t✓ deleted all trips")
    )
    await Room.insertMany(rooms).then(
        () => console.log("\t✓ added all trips from json")
    )
}

module.exports = {
    insertTrips,
    insertRooms,
}
