const Admin = require('../models/AdminModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const adminController = {
    login: async (req, res) => {
        try {
            const { emailOrPhone, password } = req.body;

            // Check if input is email or phone
            const query = {
                [emailOrPhone.includes('@') ? 'email' : 'phone']: emailOrPhone
            };

            const admin = await Admin.findOne(query);
            if (!admin) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            // Verify password
            const isMatch = await bcrypt.compare(password, admin.password);
            if (!isMatch) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            // Generate JWT token
            const token = jwt.sign(
                { id: admin._id },
                process.env.JWT_SECRET,
                { expiresIn: '1d' }
            );

            res.status(200).json({
                token,
                admin: {
                    id: admin._id,
                    email: admin.email,
                    phone: admin.phone
                }
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    },

    register: async (req, res) => {
        try {
            const { email, phone, password } = req.body;

            // Validate required password
            if (!password || password.length < 6) {
                return res.status(400).json({ message: 'Password must be at least 6 characters long' });
            }

            // Validate that at least email or phone is provided
            if (!email && !phone) {
                return res.status(400).json({ message: 'Either email or phone is required' });
            }

            // Validate email format if provided
            if (email && !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                return res.status(400).json({ message: 'Invalid email format' });
            }

            // Validate phone format if provided
            if (phone && !phone.match(/^\d{10}$/)) {
                return res.status(400).json({ message: 'Phone number must be 10 digits' });
            }

            // Improved existing admin check
            let existingAdmin = null;
            if (email) {
                existingAdmin = await Admin.findOne({ email });
                if (existingAdmin) {
                    return res.status(400).json({ message: 'Admin already exists with this email' });
                }
            }
            
            if (phone) {
                existingAdmin = await Admin.findOne({ phone });
                if (existingAdmin) {
                    return res.status(400).json({ message: 'Admin already exists with this phone' });
                }
            }

            // Hash password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            // Create new admin
            const admin = new Admin({
                email,
                phone,
                password: hashedPassword
            });

            await admin.save();

            res.status(201).json({ message: 'Admin created successfully' });

        } catch (error) {
            console.error(error);
            res.status(500).json({ 
                message: 'Server error', 
                error: error.message 
            });
        }
    }
};

module.exports = adminController;
