import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Login from 'components/Login'
import authContext from 'context/auth/authContext'

const LoginPage = () => {
    
    const AuthContext = useContext(authContext)
    const { auth, isLoadingAuth, initSession } = AuthContext

    const history = useHistory();
    
    useEffect(() => {
        if(auth){
            history.push('/list')
        }
    })
    

    return ( 
        <> 
            { !isLoadingAuth && 
                <Login 
                    initSession={initSession}
                />             
            }            
        </>
    );
}
 
export default LoginPage;