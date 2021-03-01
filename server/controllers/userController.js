const User = require('../models/User');
require('dotenv').config({path: 'vars.env'});
const bcrypjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const { SERVER_ERROR, USER_EXISTS } = require('../config/messages')

exports.createUser = async (req, res) => {

    const errors = validationResult(req);
    
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body;

    try {

        let user = await User.findOne({email})

        if(user){
            return res.status(400).json({ msg: USER_EXISTS})
        }

        user = new User(req.body);

        const salt = await bcrypjs.genSalt(10);
        user.password = await bcrypjs.hash(password, salt);

        await user.save();

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(payload, process.env.SECRET, {
            expiresIn:  process.env.TOKEN_EXPIRES
        }, (error, token) => {
            if(error) throw error;                        
            res.json({token});
        });  
        
    } catch (error) {
        res.status(500).json({ msg: SERVER_ERROR })
    }

}