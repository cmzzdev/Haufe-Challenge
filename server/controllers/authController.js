const User = require('../models/User');
require('dotenv').config({path: 'vars.env'});
const bcrypjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const { SERVER_ERROR, USER_DONT_EXIST, INVALID_PASSWORD } = require('../config/messages')

exports.createUserToken = async (req, res) => {

    const errors = validationResult(req);
    
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body;

    try {

        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({ errors: { msg: USER_DONT_EXIST }} )
        }

        const correcPassword = await bcrypjs.compare(password, user.password);
        if(!correcPassword){
            return res.status(400).json({ errors: { msg: INVALID_PASSWORD }} )
        }

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(payload, process.env.SECRET, {
            expiresIn: process.env.TOKEN_EXPIRES
        }, (error, token) => {
            if(error) throw error;
            res.json({token})
        });
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ errors: { msg: SERVER_ERROR }} )
    }
}

exports.getAuthUser = async (req, res) => {
    try {
        let user = await User.findById(req.user.id).select('-password');
        res.json({user});
    } catch (error) {
        res.status(500).json({ errors: { msg: SERVER_ERROR }} )
    }
}