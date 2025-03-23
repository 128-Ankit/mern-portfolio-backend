const mongoose = require('mongoose');

const GetContactSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    gitHub:{
        type: String,
    },
    linkedIn:{
        type: String,
    },
    tweeter: {
        type: String,
    },
    instagram: {
        type: String,
    },
    facebook: {
        type: String,
    },
    youtube: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('GetContact', GetContactSchema);