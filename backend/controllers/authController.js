// authController.js - Handles user authentication
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Register User
exports.register = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.create({ username, password });
    res.status(201).json(user);
  } catch (err) {
    res.status(500).send('Error creating user');
  }
};