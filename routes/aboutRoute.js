const express = require('express');
const router = express.Router();
const {
    getAbout, 
    createAbout, 
    updateAbout, 
    deleteAbout
} = require('../controllers/AboutController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', getAbout);
router.post('/', authMiddleware, createAbout);
router.put('/:id', authMiddleware, updateAbout);
router.delete('/:id', authMiddleware, deleteAbout);

module.exports = router;
