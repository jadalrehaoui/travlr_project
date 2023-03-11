const news = (req, res, next) => {
    res.render('news', {title: "News"})
}

module.exports = {
    news
}