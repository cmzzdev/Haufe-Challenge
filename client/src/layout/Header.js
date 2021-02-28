import React, { useContext, useEffect } from 'react';
import authContext from 'context/auth/authContext'

const Header = () => {

    const AuthContext = useContext(authContext)
    const { authUser } = AuthContext

    useEffect(() => {  
        const token = localStorage.getItem('token'); 
        if(token){
            authUser()
        }
        // eslint-disable-next-line
    }, []); 

    return ( 
        <h1>Header</h1>
    );
}
 
export default Header;