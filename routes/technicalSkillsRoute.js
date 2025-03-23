const express = require('express');
const router = express.Router();

const {
    getAllSkills,
    createSkill,
    updateSkill,
    deleteSkill
} = require('../controllers/technicalSkillsController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, getAllSkills);
router.post('/', authMiddleware, createSkill);
router.put('/:id', authMiddleware, updateSkill);
router.delete('/:id', authMiddleware, deleteSkill);

module.exports = router;