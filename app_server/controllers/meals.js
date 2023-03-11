const fs = require('fs'); // to read from files

let mealsData = JSON.parse(fs.readFileSync("./data/meals.json", 'utf8')); // read from ./data/meals

const meals = (req, res, next) => {
    res.render('meals', {title: "Meals", mealsData});
}

module.exports = {
    meals
}

