import {
    GET_CHARACTERS,
    GET_CHARACTERS_ERROR,
    GET_CHARACTER,
    GET_CHARACTER_ERROR,
    CLEAN_CHARACTERS
} from 'types'

const initialState = {
    characters: [],
    character: {},
    loading: true,
    msg: null
}

const characterReducer = (state = initialState, action) =>  {

    const { type, payload } = action

    switch (type) {
        case GET_CHARACTERS:           
            return{
                ...state,
                characters: state.characters.concat(payload.results),
                loading: false
            }           
        case GET_CHARACTER:           
            return{
                ...state,
                characters: [],
                character: payload,                
                loading: false
            }
        case GET_CHARACTERS_ERROR:
        case GET_CHARACTER_ERROR:
            return{
                ...state,
                msg: payload,
                loading: false
            }
        case CLEAN_CHARACTERS:                   
            return{
                ...state,
                characters: [],
                character: {}
            }               
        default:
            return state
    }
}

export default characterReducer

