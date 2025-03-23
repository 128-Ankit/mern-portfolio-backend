const Services = require('../models/ServicesModel');

// get all services
const getServices = async (req, res) => {
    try {
        const services = await Services.find();
        if(!services){
            return res.status(404).json({message: 'Services not found'});
        }
        res.status(200).json(services);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal server error'});
    }
};
// create a new service
const createService = async (req, res) => {
    try {
        const {service, description, category, icon} = req.body;

        if(!service || !description || !category){
            return res.status(400).json({message: 'All fields are required'});
        }

        const newService = new Services({
            service,
            description,
            category,
            icon
        });

        await newService.save();

        res.status(201).json({
            message: 'Service created successfully', 
            service: newService
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal server error'});
    }
};
// update a service
const updateService = async (req, res) => {
    try {
        const {service, description, category, icon} = req.body;

        const {id} = req.params;

        if(!id){
            return res.status(400).json({message: 'Service ID is required'});
        }

        const updatedService = await Services.findByIdAndUpdate(id, {
            service,
            description,
            category,
            icon
        }, {new: true});    

        res.status(200).json({
            message: 'Service updated successfully', 
            service: updatedService
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal server error'});
    }
};
// delete a service
const deleteService = async (req, res) => {
    try {
        const {id} = req.params;

        if(!id){
            return res.status(400).json({message: 'Service ID is required'});
        }

        await Services.findByIdAndDelete(id);

        res.status(200).json({message: 'Service deleted successfully'});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal server error'});
    }
};

module.exports = {
    getServices,
    createService,
    updateService,
    deleteService
};