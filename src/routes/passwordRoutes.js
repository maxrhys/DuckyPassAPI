const express = require('express');
const router = express.Router();
const passwordController = require('../controllers/passwordController');

// Simple password(s)
router.get('/simple', passwordController.generateSimplePassword);
router.post('/simple', passwordController.generateSimplePassword);

// Secure password(s)
router.get('/secure', passwordController.generateSecurePassword);
router.post('/secure', passwordController.generateSecurePassword);

module.exports = router;