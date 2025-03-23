require('dotenv').config();
const jwt = require('jsonwebtoken');
const Admin = require('../models/AdminModel');

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');

        if (!token) {
            return res.status(401).json({ message: 'No authentication token found' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const admin = await Admin.findOne({ _id: decoded.id });

        if (!admin) {
            return res.status(401).json({ message: 'Please authenticate' });
        }

        req.admin = admin;
        req.token = token;
        next();
    } catch (error) {
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: 'Invalid token' });
        }
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token expired' });
        }
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = authMiddleware;
