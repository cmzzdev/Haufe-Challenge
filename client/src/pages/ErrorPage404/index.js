import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import authContext from 'context/auth/authContext'
import './errorpage404.scss'

const ErrorPage404 = () => {

    const AuthContext = useContext(authContext)
    const { auth } = AuthContext   

    return ( 
        <div className="img404-content">
            <h1 className="title">Error 404 - Page Not Found</h1>             
            <img src='/img/img404.png' alt='hello'/>
            { auth ? (
                <div className="btn-back">
                    <Link to='/list'>
                        <button
                            className="btn-detail"
                        >
                            Back to list
                        </button>                                        
                    </Link>
                </div>
            ) : null }
        </div>
    );
}
 
export default ErrorPage404;