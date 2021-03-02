import React, { useContext, useEffect } from 'react'
import { cleanCharacters } from 'actions/character'
import { Link, useLocation, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import authContext from 'context/auth/authContext'

import './header.css'


const Header = () => {

    const AuthContext = useContext(authContext)
    const { user, authUser, auth, closeSession } = AuthContext
    const history = useHistory();
    const location = useLocation();   
    const dispatch = useDispatch();

    useEffect(() => {  
        const token = localStorage.getItem('token'); 
        if(token){
            authUser()
        }  
        // eslint-disable-next-line
    }, [auth]);        

    const goToLoginPage = () => {
        history.push('/')   
    }

    const handleClick = e => {
        e.preventDefault()
        closeSession()      
        dispatch(cleanCharacters())
        goToLoginPage()           
    }

    return ( 
        <header>
            <div className="row">
                <div className="brand">
                    <Link
                        to="/"
                    >
                        <h1>Haufe Challenge</h1>
                    </Link>
                </div>
                <div className="header-buttons">
                    { user && authUser ? (
                        <>
                            
                            <img src='/img/rick.png' alt='hello'/>
                            <p className="salute">Hi - { user.name } </p>  
                            <button
                                className="btn"
                                onClick={handleClick}
                            >
                                Logout
                            </button>
                           
                        </>
                    ) : (
                        <>
                            { location.pathname === '/register' ? (
                                <Link 
                                    to='/'
                                    className="btn"
                                >Login</Link>
                            ) : (
                                <Link 
                                    to='/register'
                                    className="btn"
                                >Sign Up</Link>
                            )}                        
                        </>
                    )}                
                </div>
            </div>
            
        </header>
    );
}
 
export default Header;