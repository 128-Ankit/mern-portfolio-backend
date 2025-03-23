const TechnicalSkills = require('../models/TechnicalSkillsModel');

// Get all technical skills
const getAllSkills = async (req, res) => {
    try {
        const skills = await TechnicalSkills.find();
        res.status(200).json({
            success: true,
            data: skills
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Create new skill
const createSkill = async (req, res) => {
    try {
        const skill = await TechnicalSkills.create(req.body);
        res.status(201).json({
            success: true,
            data: skill
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// Update skill
const updateSkill = async (req, res) => {
    try {
        const skill = await TechnicalSkills.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );
        if (!skill) {
            return res.status(404).json({
                success: false,
                message: 'Skill not found'
            });
        }
        res.status(200).json({
            success: true,
            data: skill
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// Delete skill
const deleteSkill = async (req, res) => {
    try {
        const skill = await TechnicalSkills.findByIdAndDelete(req.params.id);
        if (!skill) {
            return res.status(404).json({
                success: false,
                message: 'Skill not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Skill deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = { 
    getAllSkills, 
    createSkill, 
    updateSkill, 
    deleteSkill 
};