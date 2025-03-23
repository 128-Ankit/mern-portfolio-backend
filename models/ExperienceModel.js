const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
    year:{
        type: String,
        required: true
    },
    position:{
        type: String,
        required: true
    },
    company:{
        type: String,
    },
    description:{
        type: String,
    },
    icon: {
        type: String,
    }
});

module.exports = mongoose.model('Experience', ExperienceSchema);