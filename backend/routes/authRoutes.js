const express = require('express');
const router = express.Router();
const { signup, login, getCurrentUser, updateProfile, protect } = require('../controllers/authController');

// Route for user signup
router.post('/signup', signup);

// Route for user login
router.post('/login', login);

// Protected route to get the current user
router.get('/me', protect, getCurrentUser);

// Protected route to update user profile
router.put('/update-profile', protect, updateProfile);

module.exports = router;
