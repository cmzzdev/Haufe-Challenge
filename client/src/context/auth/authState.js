import React, { useReducer } from 'react'
import authContext from './authContext'
import authReducer from './authReducer'

import {      
    CREATE_USER_SUCCESS,
    CREATE_USER_ERROR,   
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    USER_AUTH,
    CLOSE_SESSION,
    IS_LOADING_USER,
    CLEAN_ALERT
} from 'types'

import axiosClient from 'config/axios'
import tokenAuth from 'config/token'

const AuthState= ({children}) => {
   
    const initialState = {
        token: typeof window !== 'undefined' ? localStorage.getItem('token') : '',
        auth: null,
        isLoadingAuth: false,
        user: null,
        msg: null
    }
  
    const [ state, dispatch ] = useReducer(authReducer, initialState)

    // Create User
    const createUser = async data => {        
        try {
            const res = await axiosClient.post("/api/user", data)
            dispatch({
                type: CREATE_USER_SUCCESS,
                payload: res.data
            })            
            initSession(data)
        } catch (error) {           
            dispatch({
                type: CREATE_USER_ERROR,
                payload: error.response.data.msg
            })
        }         
        setTimeout(() => {
            dispatch({
                type: CLEAN_ALERT
            })
        }, 3000)
        
    }

    // Login
    const initSession = async data => {       
        try {
            const res = await axiosClient.post('/api/auth', data)             
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data.token
            })            
            authUser()
        } catch (error) {          
            dispatch({
                type: LOGIN_ERROR,
                payload: error.response.data.msg
            })
        }     

        setTimeout(() => {
            dispatch({
                type: CLEAN_ALERT
            })
        }, 3000)
    }

    // Auth User 
    const authUser = async () => {

        dispatch({
            type: IS_LOADING_USER,
            payload: true
        })

        const token = localStorage.getItem('token');        

        if(token) {           
            tokenAuth(token)
        }

        try {

            const res = await axiosClient.get('/api/auth');    

            if(res.data.user) {
                dispatch({
                    type: USER_AUTH,
                    payload: res.data.user
                }) 
            }

        } catch (error) {
            dispatch({
                type: LOGIN_ERROR,
                payload: error.response.data.msg
            })
        }
    }

    // Close sesion
    const closeSession = () => {
        dispatch({
            type: CLOSE_SESSION
        })      
    }

    return ( 
        <authContext.Provider
            value={{
                token: state.token,
                auth: state.auth,
                isLoadingAuth: state.isLoadingAuth,
                user: state.user,
                msg: state.msg,
                createUser,
                initSession,
                authUser,
                closeSession
            }}
        >
            { children }
        </authContext.Provider>
    );
}
 
export default AuthState;