const Model = require('../models/trips');

const tripsList = async (req, res, next) => {
    Model.find({})
    .then(
        (trips, err) => {
            if(!trips) {
                return res.status(404).json({message: "No trips to preview"});
            } else if(err) {
                return res.status(404).json(err);
            } else {
                return res.status(200).json(trips);
            }
        }
    )
}
const tripFindByCode = async (req, res, next) => {
    let reqCode = req.params.tripCode;
    Model.findOne({code: reqCode})
    .then(
        (trip, err) => {
            if(!trip) {
                return res.status(404).json({message: "No trips to preview"});
            } else if(err) {
                return res.status(404).json(err);
            } else {
                return res.status(200).json(trip);
            }
        }
    )
}

module.exports = {
    tripsList,
    tripFindByCode
}