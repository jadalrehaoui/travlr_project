const Model = require('../models/rooms');

const roomsList = async (req, res, next) => {
    Model.find({})
    .then(
        (rooms, err) => {
            if(!rooms) {
                return res.status(404).json({message: "No rooms to preview"});
            } else if(err) {
                return res.status(404).json(err);
            } else {
                return res.status(200).json(rooms);
            }
        }
    )
}
const roomFindByCode = async (req, res, next) => {
    let reqCode = req.params.roomCode;
    Model.findOne({code: reqCode})
    .then(
        (room, err) => {
            if(!room) {
                return res.status(404).json({message: "No rooms to preview"});
            } else if(err) {
                return res.status(404).json(err);
            } else {
                return res.status(200).json(room);
            }
        }
    )
}

module.exports = {
    roomsList,
    roomFindByCode
}