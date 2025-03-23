const About = require('../models/AboutModel');

// GET about
const getAbout = async (req, res) => {
    try {
        const about = await About.find();
        if(!about) {
            res.status(404).send('About not found');
        }
        res.json(about);
    } catch (error) {
        res.json({ message: error });
    }
}
// Crate About
const createAbout = async (req, res) => {
    try {
        // get data from request body
        const { descreiption, imageURL, Frontend, Backend, Database, Tools } = req.body;
        // validate data: all fields must be filled
        if(!descreiption || !imageURL || !Frontend || !Backend || !Database || !Tools) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        // create new About object
        const newAbout = new About({
            descreiption,
            imageURL,
            Frontend,
            Backend,
            Database,
            Tools
        });
        // save into database
        const savedAbout = await newAbout.save();
        //return response
        res.json(savedAbout);
    } catch (error) {
        res.json({ message: error });
    }
}
// Update About
const updateAbout = async (req, res) => {
    try {
        // get data from request body
        const { descreiption, imageURL, Frontend, Backend, Database, Tools } = req.body;
        // Find home by id (req.params) and update it
        const { id } = req.params;
        if(!id) {
            return res.status(404).json({ message: 'About not found' });
        }
        const updatedAbout = await About.findByIdAndUpdate(id, {
            descreiption,
            imageURL,
            Frontend,
            Backend,
            Database,
            Tools
        });
        // return response  
        res.json(updatedAbout);
    } catch (error) {
        res.json({ message: error });
    }
}
// Delete About
const deleteAbout = async (req, res) => {
    try {
        // Find home by id (req.params) and delete it
        const { id } = req.params;
         // if home is not found
         if(!id) {
            return res.status(404).json({ message: 'About not found' });
        }
        
        const removedAbout = await About.findByIdAndDelete(id);
        // return response
        res.json(removedAbout);
    } catch (error) {
        res.json({ message: error });
    }
}

module.exports = {
    getAbout, 
    createAbout, 
    updateAbout, 
    deleteAbout
};