const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    name: {type: String, required: true, index: true},
    rate: {type: Number, required: true},
    image: {type: String, required: true},
    description: {type: String, required: true}
});

module.exports = mongoose.model('rooms', roomSchema);