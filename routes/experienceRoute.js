const express = require('express');
const router = express.Router();

const {
  getExperiences,
  createExperiences,
  updateExperiences,
  deleteExperiences
} = require('../controllers/ExperienceController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', getExperiences);
router.post('/', authMiddleware, createExperiences);
router.put('/:id', authMiddleware, updateExperiences);
router.delete('/:id', authMiddleware, deleteExperiences);

module.exports = router;