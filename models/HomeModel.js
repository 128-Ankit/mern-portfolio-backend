const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    heading: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    linkedin: {
        type: String,
    },
    github: {
        type: String,
    },
    resume: {
        type: String,
    }
});

module.exports = mongoose.model('Home', HomeSchema);