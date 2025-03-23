const mongoose = require('mongoose');

const EducationSchema = new mongoose.Schema({
    year:{
        type: String,
        required: true
    },
    degree:{
        type: String,
        required: true
    },
    school:{
        type: String,
    },
    description:{
        type: String,
    }
});

module.exports = mongoose.model('Education', EducationSchema);