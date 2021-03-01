import React from 'react';
import './login.css';
import useValidation from 'hooks/useValidation'
import { validateLoginForm } from 'utils/validateForm'

const INITIAL_VALUES = {
    email: '',
    password: ''
}

const Login = ({initSession}) => {  

    const submitForm = () => {
        console.log("handleSubmit")
        initSession({email,password})
    }

    const {
        values,
        errors,
        handleSubmit,
        handleChange,
    } = useValidation(INITIAL_VALUES, validateLoginForm, submitForm)    

    const { email, password } = values    

    return ( 
        <div className="login-wrapper">
            <div>
                <div>                   

                    <form
                        onSubmit={handleSubmit}
                    >
                        <div>
                            <label                            
                                htmlFor="email"
                            >
                                Email
                            </label>   
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email address"
                                value={email}      
                                onChange={(e) => handleChange(e)}                    
                            /> 
                            {
                                errors.email ? (
                                    <div>
                                        <p>Error</p>
                                        <p>{errors.email}</p>
                                    </div> 
                                ) : null
                            }
                        </div>

                        <div>
                            <label                            
                                htmlFor="password"
                            >
                                Password
                            </label>   
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Your password"
                                value={password}      
                                onChange={(e) => handleChange(e)}                       
                            /> 
                            {
                                errors.password ? (
                                    <div>
                                        <p>Error</p>
                                        <p>{errors.password}</p>
                                    </div> 
                                ) : null
                            }
                        </div>

                        <input
                            type="submit"
                        />

                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Login;