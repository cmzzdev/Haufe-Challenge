import React, { useContext, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import Login from 'components/Login'
import authContext from 'context/auth/authContext'


const LoginPage = () => {
    
    const AuthContext = useContext(authContext)
    const { auth, isLoadingAuth, initSession, msg } = AuthContext

    const history = useHistory();
    const location = useLocation();   

    
    useEffect(() => {     
        if(auth && location.pathname === '/' ){
            history.push('/list')
        }
    })
       

    return ( 
        <>          
            { !isLoadingAuth && 
                <Login 
                    initSession={initSession}
                    msg={msg}
                />             
            }            
        </>
    );
}
 
export default LoginPage;