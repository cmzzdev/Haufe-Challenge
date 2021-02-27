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
                res.status(404).json({ errors: { msg: ERROR_EXTERNAL_API } })
            });

        res.json(characters);        
        
    } catch (error) {        
        res.status(500).json({ errors: { msg: SERVER_ERROR }} )
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
                res.status(404).json({ errors: { msg: ERROR_EXTERNAL_API } })
            });
        
        res.json(character)

    } catch (error) {
        res.status(500).json({ errors: { msg: SERVER_ERROR }} )
    }

}
