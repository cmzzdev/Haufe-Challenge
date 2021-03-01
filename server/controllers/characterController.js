const Favorite = require('../models/Favorite');
require('dotenv').config({path: 'vars.env'});
const axios = require('axios')
const { SERVER_ERROR, ERROR_EXTERNAL_API } = require('../config/messages')



exports.getCharacters = async (req, res) => {   

    try {

        let characters = {}
        const { page } = req.params

        await axios.get(`${process.env.EXTERNAL_API}/character/?page=${page}`)
            .then(response => {            
                characters = response.data;
            })
            .catch(err => {                
                res.status(404).json({ msg: ERROR_EXTERNAL_API })
            });
        
        let favorites = await Favorite.find({creator: req.user.id})

        if(favorites){
            favorites.map(favorite => {
                characters.results.filter(character => {
                    return character.id === favorite.id ? character.favorite = true : ''
                })
            })
        }      

        res.json(characters);        
        
    } catch (error) {        
        res.status(500).json({ msg: SERVER_ERROR })
    }
}

exports.getCharacterById = async (req, res) => {  

    try {

        let character = {}
        const { id } = req.params;

        await axios.get(`${process.env.EXTERNAL_API}/character/${id}`)
            .then(response => {            
                character = response.data;
            })
            .catch(err => {                
                res.status(404).json({ msg: ERROR_EXTERNAL_API })
            });
        
        let isFavorite = await Favorite.findOne({creator: req.user.id, id: id})
        
        if(isFavorite){
            character.favorite = true
        }

        res.json(character)

    } catch (error) {
        res.status(500).json({msg: SERVER_ERROR })
    }

}
