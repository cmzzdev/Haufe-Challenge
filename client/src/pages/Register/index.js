import React, { useContext, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import Register from 'components/Register'
import authContext from 'context/auth/authContext'

const RegisterPage = () => {
    
    const AuthContext = useContext(authContext)
    const { isLoadingAuth, createUser, msg, auth } = AuthContext 

    const history = useHistory();
    const location = useLocation();   

    useEffect(() => {     
        if(auth && location.pathname === '/register' ){
            history.push('/list')
        }
    })

    return ( 
        <> 
            { !isLoadingAuth && 
                <Register 
                    createUser={createUser}
                    msg={msg}
                />             
            }            
        </>
    );
}
 
export default RegisterPage;