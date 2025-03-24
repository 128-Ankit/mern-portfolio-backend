const Projects = require('../models/ProjectsModel');

// get all projects
const getProjects = async (req, res) => {
    try {
        const projects = await Projects.find();

        if(!projects){
            return res.status(404).json({message: 'Projects not found'});
        }

        res.status(200).json(projects);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal server error'});
    }
};
// create a new project
const createProject = async (req, res) => {
    try {
        const {title, description, technologies, category, image, github, live} = req.body;

        if(!title || !description || !technologies || !category || !image || !github){
            return res.status(400).json({message: 'All fields are required'});
        }

        const newProject = new Projects({
            title,
            description,
            technologies,
            category,
            image,
            github,
            live
        });

        await newProject.save();

        res.status(201).json({
            message: 'Project created successfully', 
            project: newProject
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal server error'});
    }
};
// update a project
const updateProject = async (req, res) => {
    try {
        const {title, description, technologies, category, image, github, live} = req.body;

        const {id} = req.params;

        if(!id){
            return res.status(400).json({message: 'Project ID is required'});
        }

        const updatedProject = await Projects.findByIdAndUpdate(id, {
            title,
            description,
            technologies,
            category,
            image,
            github,
            live
        }, {new: true});

        return res.status(200).json({
            message: 'Project updated successfully',
            project: updatedProject
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal server error'});
    }
};
// delete a project
const deleteProject = async (req, res) => {
    try {
        const {id} = req.params;

        if(!id){
            return res.status(400).json({message: 'Project ID is required'});
        }

        await Projects.findByIdAndDelete(id);

        return res.status(200).json({message: 'Project deleted successfully'});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal server error'});
    }
};

module.exports = {
    getProjects,
    createProject,
    updateProject,
    deleteProject
};