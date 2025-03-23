const Contact = require('../models/ContactModel');

// Create contact
const createContact = async (req, res) => {
    try {
        // Get data from request body
        const { name, email, message } = req.body;
        // Validate: all fields are required
        if (!name || !email || !message ) {
            return res.status(400).json({ message: 'Please enter all fields' });
        }
        // Create new contact
        const newContact = new Contact({
            name,
            email,
            message,
        });
        // Save contact
        const contact = await newContact.save();
        //return contact
        res.json(contact);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error creating contact' });
    }
}

module.exports = { createContact };