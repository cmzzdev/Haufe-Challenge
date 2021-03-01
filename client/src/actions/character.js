import axiosClient from 'config/axios'
import {
    GET_CHARACTERS,
    GET_CHARACTERS_ERROR
} from 'types'

export const getCharacters = (page) => {
    return async (dispatch) => {
        try {        
            const res = await axiosClient.get(`/api/character/list/${page}`)
            dispatch({
                type: GET_CHARACTERS,
                payload: res.data
            })    
        } catch (error) {
            dispatch({
                type: GET_CHARACTERS_ERROR,
                payload: error
            })
        }
    }    
}

