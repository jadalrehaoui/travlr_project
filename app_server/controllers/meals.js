const meals = (req, res, next) => {
    res.render('meals', {title: "Meals"});
}

module.exports = {
    meals
}

