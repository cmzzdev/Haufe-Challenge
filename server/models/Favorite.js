const mongoose = require('mongoose');

const FavoriteSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true,
        trim: true
    },
    creator:{
        type: mongoose.Schema.Types.ObjectId,        
        ref: 'User'
    },
    regist:{
        type: Date, 
        default: Date.now()
    }
})

module.exports = mongoose.model('Favorite', FavoriteSchema)