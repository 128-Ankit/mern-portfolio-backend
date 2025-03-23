const Education = require('../models/EducationModel');

// Get all educations
const getEducations = async (req, res) => {
    try {
        const educations = await Education.find();
        if (!educations) {
            return res.status(404).json({ message: 'No educations found' });
        }
        res.status(200).json({
            message: 'Educations found',
            educations
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};
// Create a new education
const createEducations = async (req, res) => {
    try {
        // Get the data from the request
        const { year, degree, school, description } = req.body;
        // Create a new education
        const education = new Education({
            year,
            degree,
            school,
            description
        });
        // Save the education
        const educationData = await education.save();
        // Return the education
        res.status(201).json({
            message: 'Education created',
            educationData
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};
// Update an education
const updateEducations = async (req, res) => {
    try {
        // Get the data from the request
        const { year, degree, school, description } = req.body;
        // Get the education id
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: 'Education not found' });
        }
        // Find the education by id and update
        const education = await Education.findByIdAndUpdate(id, {
            year,
            degree,
            school,
            description
        }, { new: true });
        // Return the education
        res.status(200).json({
            message: 'Education updated',
            education
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};
// Delete an education
const deleteEducations = async (req, res) => {
    try {
        // Get the education id
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: 'Education not found' });
        }
        // Find the education by id and delete
        const education = await Education.findByIdAndDelete(id);
        // Return the education
        res.status(200).json({
            message: 'Education deleted',
            education
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    getEducations,
    createEducations,
    updateEducations,
    deleteEducations
}; 