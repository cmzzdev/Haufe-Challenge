import React, { useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'
import authContext from 'context/auth/authContext'

const Header = () => {

    const AuthContext = useContext(authContext)
    const { user, authUser, closeSession } = AuthContext

    useEffect(() => {  
        const token = localStorage.getItem('token'); 
        if(token){
            authUser()
        }
        // eslint-disable-next-line
    }, []); 

    const location = useLocation();

    const handleClick = e => {
        e.preventDefault()
        closeSession()        
    }

    return ( 
        <header>
            <h1>Haufe Challenge</h1>
            <div className="header-buttons">
                { user && authUser ? (
                    <>
                        <p>Hi - { user.name } </p>  
                        <button
                            onClick={handleClick}
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        { location.pathname === '/register' ? (
                            <Link to='/'>Login</Link>
                        ) : (
                            <Link to='/register'>Sign Up</Link>
                        )}                        
                    </>
                )}                
            </div>
        </header>
    );
}
 
export default Header;