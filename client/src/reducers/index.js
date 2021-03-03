import { combineReducers } from 'redux';
import characterReducer from './character'
import favoriteReducer from './favorite'

export default combineReducers({
    characters: characterReducer,
    favorite: favoriteReducer
})