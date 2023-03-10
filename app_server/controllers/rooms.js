const rooms = (req, res, next) => {
    res.render('rooms', {title: "Rooms"})
}

module.exports = {
    rooms
}