import axiosClient from 'config/axios'
import {
    GET_CHARACTERS,
    GET_CHARACTERS_ERROR,
    GET_CHARACTER,
    GET_CHARACTER_ERROR,
    CLEAN_CHARACTERS,
    CLEAN_ALERT,
    LOAD_CHARACTER
} from 'types'

export const getCharacters = page => {
    return async (dispatch) => {
        dispatch(loadCharacter())
        try {        
            const res = await axiosClient.get(`/api/character/list/${page}`)
            dispatch({
                type: GET_CHARACTERS,
                payload: res.data
            })    
        } catch (error) {
            dispatch({
                type: GET_CHARACTERS_ERROR,
                payload: error.response.data.msg
            })
            setTimeout(() => {
                dispatch({
                    type: CLEAN_ALERT
                })
            }, 3000)
        }
    }    
}

export const getCharacterById = id => {    
    return async (dispatch) => {
        dispatch(loadCharacter())
        try{
            const res = await axiosClient.get(`/api/character/${id}`)
            dispatch({
                type: GET_CHARACTER,
                payload: res.data
            })
        } catch (error) {
            dispatch({
                type: GET_CHARACTER_ERROR,
                payload: error.response.data.msg
            })
            setTimeout(() => {
                dispatch({
                    type: CLEAN_ALERT
                })
            }, 3000)
        }
    }
}

export const cleanCharacters = () => {
    return async (dispatch) => {
        dispatch({
            type: CLEAN_CHARACTERS            
        })       
    }   
}

export const loadCharacter = () =>({
    type: LOAD_CHARACTER,
    payload: true
})