const mongoose = require('mongoose');

const ServicesSchema = new mongoose.Schema({
    service:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    icon:{
        type: String,
    }
});

module.exports = mongoose.model('Services', ServicesSchema);