const express = require('express');
const router = express.Router();

const adminController = require('../controllers/adminController');

// Public routes
router.post('/login', adminController.login);
router.post('/register', adminController.register);

module.exports = router;
