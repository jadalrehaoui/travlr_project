const index = (req, res, next) => {
    res.render('home', {title: "Travlr App"});
}

module.exports = {
    index
}

