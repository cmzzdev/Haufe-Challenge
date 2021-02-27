const bcrypjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const { SERVER_ERROR } = require('../config/messages')

exports.createUserToken = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body;

    try {
        
    } catch (error) {
        
    }
}

exports.getAuthUser = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({msg: SERVER_ERROR })
    }
}