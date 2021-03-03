const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const favoriteController = require('../controllers/favoriteController');
const { check } = require('express-validator');
const { ID_REQUIRED } = require('../config/messages')

// Get favorite
router.get('/:id',
    auth,
    favoriteController.getFavorite
)

// Create favorite
router.post('/', 
    auth,
    [
        check('id', ID_REQUIRED).not().isEmpty()        
    ],
    favoriteController.createFavorite
);

// Delete favorite
router.delete('/:id',
    auth,
    favoriteController.deleteFavorite
);

module.exports = router;