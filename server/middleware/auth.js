const jwt = require('jsonwebtoken');
const { INVALID_PERMISSION, INVALID_TOKEN } = require('../config/messages');


module.exports = function(req, res, next) {
    const token = req.header('haufe-token');
    if(!token){
        return res.status(401).json({ msg: INVALID_PERMISSION } );
    }
    try {
        const encryption = jwt.verify(token, process.env.SECRET);
        req.user = encryption.user;
        next();
    } catch (error) {
        res.status(401).json({ msg: INVALID_TOKEN } )
    }
}