const GetContact = require('../models/GetContactModel');

// get all contacts
const getContacts = async (req, res) => {
    try {
        const contacts = await GetContact.find();

        if(!contacts) {
            return res.status(404).json({message: "No contacts found"});
        }

        res.status(200).json(contacts);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server Error"});
    }
}
// ceate a new contact
const createContact = async (req, res) => {
    try {
        const {title, name, email, location, gitHub, linkedIn, tweeter, instagram, facebook, youtube} = req.body;

        if(!title || !name || !email || !location || !youtube) {
            return res.status(400).json({message: "Please fill in all fields"});
        };

        const newContact = new GetContact({
            title,
            name,
            email,
            location,
            gitHub,
            linkedIn,
            tweeter,
            instagram,
            facebook,
            youtube
        });

        const savedContact = await newContact.save();

        return res.status(201).json({
            message: "Contact created successfully",
            contact: savedContact
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server Error"});
    }
}
// update a contact
const updateContact = async (req, res) => {
    try {
        const {title, name, email, location, gitHub, linkedIn, tweeter, instagram, facebook, youtube} = req.body;

        const contactId = req.params.id;

        if(!contactId) {
            return res.status(400).json({message: "Contact not found"});
        }

        const updatedContact = await GetContact.findByIdAndUpdate(contactId, {
            title,
            name,
            email,
            location,
            gitHub,
            linkedIn,
            tweeter,
            instagram,
            facebook,
            youtube
        });

        return res.status(200).json({
            message: "Contact updated successfully",
            contact: updatedContact
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server Error"});
    }
}
// delete a contact
const deleteContact = async (req, res) => {
    try {
        const contactId = req.params.id;

        if(!contactId) {
            return res.status(400).json({message: "Contact not found"});
        }

        await GetContact.findByIdAndDelete(contactId);
        
        return res.status(200).json({message: "Contact deleted successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server Error"});
    }
}

module.exports = {
    getContacts,
    createContact,
    updateContact,
    deleteContact
};