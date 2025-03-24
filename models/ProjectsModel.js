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
    technologies:{
        type: [String],  
        required: true
    },
    image:{
        type: String,
        required: true
    },
    github:{
        type: String,
        required: true
    },
    live:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    }
});

module.exports = mongsoose.model('Projects', ProjectsSchema);