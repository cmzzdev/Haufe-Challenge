const Favorite = require('../models/Favorite');
const { validationResult } = require('express-validator');
const { SERVER_ERROR, FAVORITE_EXIST, FAVORITE_NOT_FOUND, FAVORITE_UNAUTHORITZED, FAVORITE_DELETED } = require('../config/messages');

exports.createFavorite = async (req, res) => {

    const errors = validationResult(req);
    
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }

    try {        
        
        const favorite = new Favorite(req.body);       
        favorite.creator = req.user.id;        
        
        const isFavorite = await Favorite.findOne({id: req.body.id, creator: req.user.id})        

        if(isFavorite){
            return res.status(400).json({ errors: { msg: FAVORITE_EXIST }})
        }

        favorite.save();
        res.json(favorite)

    } catch (error) {
        res.status(500).json({ errors: { msg: SERVER_ERROR }})
    }    

}



exports.deleteFavorite = async (req, res) => {

    const errors = validationResult(req);
    
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }

    try {      

        let favorite = await Favorite.findById(req.params.id)    
        
        if(!favorite){
            return res.status(404).json({errors: { msg: FAVORITE_NOT_FOUND }})
        }
        
        if(favorite.creator.toString() !== req.user.id ){
            return res.status(401).json({errors: { msg: FAVORITE_UNAUTHORITZED }})
        }

        await Favorite.findOneAndRemove({ _id: req.params.id })
        res.json({msg: FAVORITE_DELETED })

    } catch (error) {
        res.status(500).json({ errors: { msg: SERVER_ERROR }} )
    }
}