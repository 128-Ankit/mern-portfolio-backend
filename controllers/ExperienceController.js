const Experience = require('../models/ExperienceModel');

// Get all experiences
const getExperiences = async (req, res) => {
    try {
        // Get all experiences
        const experiences = await Experience.find();
        // validate if there are no experiences
        if (!experiences) {
            return res.status(404).json({ message: "No experiences found" });
        }
        // Send response
        res.status(200).json({
            message: "All experiences",
            experiences
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });

    }
};
// Create a new experience
const createExperiences = async (req, res) => {
    try {
        // get data from request body
        const { year, position, company, description, icon } = req.body;
        // validate
        if (!year || !position || !description) {
            return res.status(400).json({ message: "All fields are required" });
        }
        // create new experience
        const newExperience = new Experience({
            year,
            position,
            company,
            description, 
            icon
        });
        // save experience
        await newExperience.save();
        // send response
        res.status(201).json({
            message: "Experience created successfully",
            newExperience
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });

    }
};
// Update an experience
const updateExperiences = async (req, res) => {
    try {
        // get data from request body
        const { year, position, company, description, icon } = req.body;
        // Find experience by id and update
        const updatedExperience = await Experience.findByIdAndUpdate(req.params.id, {
            year,
            position,
            company,
            description,
            icon
        }
            , { new: true });
        // validate if experience is not found
        if (!updatedExperience) {
            return res.status(404).json({ message: "Experience not found" });
        }
        // send response
        res.status(200).json({
            message: "Experience updated successfully",
            updatedExperience
        }
        );
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });

    }
};
// Delete an experience
const deleteExperiences = async (req, res) => {
    try {
        // Find experience by id and delete
        const deletedExperience = await Experience.findByIdAndDelete(req.params.id);
        // validate if experience is not found
        if (!deletedExperience) {
            return res.status(404).json({ message: "Experience not found" });
        }
        // send response
        res.status(200).json({
            message: "Experience deleted successfully",
            deletedExperience
        }
        );
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });

    }
};

module.exports = {
    getExperiences,
    createExperiences,
    updateExperiences,
    deleteExperiences
};