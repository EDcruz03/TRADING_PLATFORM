// authRoutes.js - Authentication routes
const express = require('express');
const { register } = require('../controllers/authController');

const router = express.Router();

// Register route
router.post('/register', register);

module.exports = router;