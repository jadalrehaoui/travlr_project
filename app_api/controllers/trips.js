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

const addNewTrip = async (req, res, next) => {
    let {code, name, length, start, resort, perPerson, image, description} = req.body;
     Model.create({
        code: code, 
        name: name, 
        length: length, 
        start: new Date(start), 
        resort: resort, 
        perPerson: perPerson, 
        image: image, 
        description: description
    }).then(
        (trip, err) => {
            if(err) {
                console.log(err);
                return res.status(400).json(err);
            } else {
                return res.status(201).json(trip);
            }
        }
    )
}

const updateTrip = async (req, res, next) => {
    let tripCode = req.params.tripCode;
    let {code, name, length, start, resort, perPerson, image, description} = req.body;
    Model.findOneAndUpdate(
        {code: tripCode},   // finding the code
        {
            code: code, 
            name: name, 
            length: length, 
            start: new Date(start), 
            resort: resort, 
            perPerson: perPerson, 
            image: image, 
            description: description
        }, {new: true})
        .then(trip => {
            if(!trip) {
                return res.status(404).send({message: "Trip not found with code "+ tripCode})
            }
            return res.send(trip);
        })
        .catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({message: "Trip not found with code "+ tripCode})
            } 
            return res.status(500).json(err);
        })
}

module.exports = {
    tripsList,
    tripFindByCode,
    addNewTrip,
    updateTrip
}