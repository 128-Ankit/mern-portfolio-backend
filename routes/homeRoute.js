const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware');

const {
  getHome,
  createHome,
  updateHome,
  deleteHome
} = require('../controllers/HomeController');

router.get('/', getHome);
router.post('/', authMiddleware, createHome);
router.put('/:id', authMiddleware, updateHome);
router.delete('/:id', authMiddleware, deleteHome);

module.exports = router;