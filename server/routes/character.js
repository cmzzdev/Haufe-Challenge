const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const characterController = require('../controllers/characterController');

router.get('/list/:page',
    auth,  
    characterController.getCharacters
);

router.get('/:id',
    auth,
    characterController.getCharacterById
)

module.exports = router;

