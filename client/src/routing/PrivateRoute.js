import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import authContext from 'context/auth/authContext'

const PrivateRoute = ({ component: Component, ...otherProps }) => {

    const AuthContext = useContext(authContext)
    const { auth, isLoadingAuth } = AuthContext    

    const redirectToLogin = () => {
        return <Redirect to={otherProps.redirectTo ? otherProps.redirectTo : '/'} />
    }

    return (
        <Route
            {...otherProps}
            render={props => (
                    isLoadingAuth ?
                    (
                        auth ?                            
                            <Component {...props} />
                            :
                            redirectToLogin()
                    ) :  redirectToLogin()                                   
            )}
        />
    )
}

export default PrivateRoute