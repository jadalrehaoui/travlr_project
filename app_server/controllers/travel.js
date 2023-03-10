const travel = (req, res, next) => {
    res.render('travel', {title: "Travel"})
}

module.exports = {
    travel
}