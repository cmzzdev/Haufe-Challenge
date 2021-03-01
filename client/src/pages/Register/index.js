import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Register from 'components/Register'
import authContext from 'context/auth/authContext'

const RegisterPage = () => {
    
    const AuthContext = useContext(authContext)
    const { auth, isLoadingAuth, createUser, msg } = AuthContext

    const history = useHistory();
    
    useEffect(() => {
        if(auth){
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