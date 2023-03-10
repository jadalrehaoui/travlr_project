const fs = require('fs'); // to read from files

let roomsData = JSON.parse(fs.readFileSync("./data/rooms.json", 'utf8')); // read from ./data/rooms

const rooms = (req, res, next) => {
    res.render('rooms', {title: "Rooms", roomsData})
}

module.exports = {
    rooms
}