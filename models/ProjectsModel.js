const mongsoose = require('mongoose');

const ProjectsSchema = new mongsoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    Skills:{
        type: [String],  
        required: true
    },
    category:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    gitHub:{
        type: String,
        required: true
    },
    website:{
        type: String,
        required: true
    }
});

module.exports = mongsoose.model('Projects', ProjectsSchema);