const mongoose = require('mongoose');

const AboutSchema = new mongoose.Schema({
    descreiption: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    },
    Frontend: {
        type: String,
        required: true
    },
    Backend: {
        type: String,
        required: true
    },
    Database: {
        type: String,
        required: true
    },
    Tools: {
        type: [String],
        required: true
    },
});

module.exports = mongoose.model('About', AboutSchema);