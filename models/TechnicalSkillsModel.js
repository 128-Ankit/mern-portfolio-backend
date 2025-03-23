const mongoose = require('mongoose');

const TechnicalSkillsSchema = new mongoose.Schema({
    skill:{
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

module.exports = mongoose.model('TechnicalSkills', TechnicalSkillsSchema);