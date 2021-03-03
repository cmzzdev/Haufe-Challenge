import axiosClient from 'config/axios'

import {
    CREATE_FAVORITE,
    CREATE_FAVORITE_ERROR,
    DELETE_FAVORITE,
    DELETE_FAVORITE_ERROR,
    GET_FAVORITE,
    GET_FAVORITE_ERROR,
    CLEAN_ALERT
} from 'types'

export const getFavorite = id => {
    return async (dispatch) => {
        try {
            const res = await axiosClient.get(`/api/favorite/${id}`)
            dispatch({
                type: GET_FAVORITE,
                payload: res.data
            })
        } catch (error) {
            dispatch({
                type: GET_FAVORITE_ERROR,
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

export const createFavorite = id => {
    return async (dispatch) => {
        try {
            let dataObj = { id: id }
            const res = await axiosClient.post('/api/favorite', dataObj)
            dispatch({
                type: CREATE_FAVORITE,
                payload: res.data
            })
        } catch (error) {
            dispatch({
                type: CREATE_FAVORITE_ERROR,
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

export const deleteFavorite = id => {
    return async (dispatch) => {
        try {            
            const res = await axiosClient.delete(`/api/favorite/${id}`)
            dispatch({
                type: DELETE_FAVORITE,
                payload: res.data
            })
        } catch (error) {
            dispatch({
                type: DELETE_FAVORITE_ERROR,
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