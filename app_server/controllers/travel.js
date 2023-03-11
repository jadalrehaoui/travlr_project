const fs = require('fs'); // to read from files

let trips = JSON.parse(fs.readFileSync("./data/trips.json", 'utf8')); // read from ./data/trips

const travel = (req, res, next) => {
    res.render('travel', {title: "Travel Getaways", trips});
}

module.exports = {
    travel
}