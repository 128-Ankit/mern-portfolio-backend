const Home = require('../models/HomeModel');

//Get Homes
const getHome = async (req, res) => {
    try {
        //Find all homes
        const home = await Home.find();
        //Validation -> If home is not found
        if (!home) {
            return res.status(404).json({
                message: 'Home not found'
            });
        }
        //If home is found -> Return home
        return res.status(200).json({
            message: 'Home found',
            data: home
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Home not found'
        });
    }
}

//Create Home
const createHome = async (req, res) => {
    try {
        // Destructure data from req.body
        const { title, heading, name, description, linkedin, github, resume } = req.body;

        // Validation: Check if all fields are provided
        if (!title || !heading || !name || !description) {
            return res.status(400).json({
                message: 'All fields are required'
            });
        }

        // Create new home object and save it to database
        const newHome = new Home({
            title,
            heading, 
            name,
            description,
            linkedin,
            github,
            resume
        });

        const home = await newHome.save();

        // Return success response
        return res.status(201).json({
            message: 'Home created successfully',
            data: home
        });
    } catch (error) {
        console.error('Error creating home:', error); // Improved logging
        return res.status(500).json({
            message: 'Failed to create home'
        });
    }
};

//Update Home
const updateHome = async (req, res) => {
    try {
        // Find data from req.body
        const { title, heading, name, description, linkedin, github, resume } = req.body;
        // Find home by id (req.params) and update it
        const { id } = req.params;
        const home = await Home.findByIdAndUpdate(id, {
            title,
            heading, 
            name,
            description,
            linkedin,
            github,
            resume
        }, {new: true});
        // Validation -> If home is not found
        if (!home) {
            return res.status(404).json({
                message: 'Home not found'
            });
        }
        // Return response
        return res.status(200).json({
            message: 'Home updated',
            data: home
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Update failed'
        });
    }
}

//Delete Home
const deleteHome = async (req, res) => {
    try {
        // Find home by id (req.params) and delete it
        const { id } = req.params;
        // Validation -> If home is not found
        if (!id) {
            return res.status(404).json({
                message: 'Home not found'
            });
        }
        await Home.findByIdAndDelete(id);
        // Return response
        return res.status(200).json({
            message: 'Home deleted'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Failed to delete home'
        });
    }
}

module.exports = {
    getHome,
    createHome,
    updateHome,
    deleteHome
}
