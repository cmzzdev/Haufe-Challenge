import {
    CREATE_FAVORITE,
    CREATE_FAVORITE_ERROR,
    DELETE_FAVORITE,
    DELETE_FAVORITE_ERROR,
    GET_FAVORITE,
    GET_FAVORITE_ERROR
} from 'types'

const initialState = {
    favorite: {},       
    loading: true,
    msg: null
}

const favoriteReducer = ( state = initialState, action ) => {

    const { type, payload } = action

    switch (type) {
        case GET_FAVORITE:      
        case CREATE_FAVORITE:
            return {
                ...state,
                favorite: payload,               
                loading: false
            }
        case DELETE_FAVORITE:
            return{
                ...state,
                favorite: {},
                msg: payload,                
                loading: false
            }
        case GET_FAVORITE_ERROR:  
        case CREATE_FAVORITE_ERROR:
        case DELETE_FAVORITE_ERROR:
            return{
                ...state,
                msg: payload,
                loading: false
            }    
        default:
            return state
    }
}

export default favoriteReducer