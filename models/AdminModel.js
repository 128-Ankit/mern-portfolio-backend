const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: false,
        unique: true,
        sparse: true
    },
    phone: {
        type: String,
        required: false,
        unique: true,
        sparse: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

// Remove the previous pre-save middleware and add this new one
AdminSchema.pre('save', async function(next) {
    if (!this.email && !this.phone) {
        return next(new Error('Either email or phone is required'));
    }
    next();
});

module.exports = mongoose.model('Admin', AdminSchema);