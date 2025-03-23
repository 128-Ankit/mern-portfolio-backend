const express = require('express');
const router = express.Router();

const {
    getEducations,
    createEducations,
    updateEducations,
    deleteEducations
} = require('../controllers/EducationController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, getEducations);
router.post('/', authMiddleware, createEducations);
router.put('/:id', authMiddleware, updateEducations);
router.delete('/:id', authMiddleware, deleteEducations);

module.exports = router;
