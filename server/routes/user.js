const express = require('express');
const router = express.Router();
const userContoller = require('../controllers/userController');
const { check } = require('express-validator');
const { NAME_REQUIRED, EMAIL_VALID, PASSWORD_VALID } = require('../config/messages')

// Create user
router.post('/', 
    [
        check('name', NAME_REQUIRED).not().isEmpty(),
        check('email', EMAIL_VALID).isEmail(),
        check('password', PASSWORD_VALID).isLength({ min: 6 }),
    ],
    userContoller.createUser
);

module.exports = router;