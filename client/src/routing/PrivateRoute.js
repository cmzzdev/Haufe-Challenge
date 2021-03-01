import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import authContext from 'context/auth/authContext'

const PrivateRoute = ({ component: Component, ...otherProps }) => {

    const AuthContext = useContext(authContext)
    const { auth, isLoadingAuth } = AuthContext 

    return (
        <Route
            {...otherProps}
            render={props => (
                    isLoadingAuth
                    ?
                    (
                        auth
                            ?
                            <Component {...props} />
                            :
                            <Redirect to={otherProps.redirectTo ? otherProps.redirectTo : '/'} />
                    )

                    :
                    
                    ''//Loading...
            )}
        />
    )
}

export default PrivateRoute