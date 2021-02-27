const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const auth = require('../middleware/auth');
const authController = require('../controllers/authController');
const { EMAIL_VALID, PASSWORD_VALID } = require('../config/messages');

// Create token user
router.post('/',
    [        
        check('email', EMAIL_VALID).isEmail(),
        check('password', PASSWORD_VALID).isLength({ min: 6 })
    ],
    authController.createUserToken
);

// Get Auth User
router.get('/',
    auth,
    authController.getAuthUser
);

module.exports = router;