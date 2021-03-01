import React from 'react';
import './register.css';
import useValidation from 'hooks/useValidation'
import { validateLoginForm } from 'utils/validateForm'

const INITIAL_VALUES = {
    name: '',
    email: '',
    password: ''
}

const Register = ({createUser}) => {  

    const submitForm = () => {
        console.log("handleSubmit")
        createUser({name, email,password})
    }

    const {
        values,
        errors,
        handleSubmit,
        handleChange,
    } = useValidation(INITIAL_VALUES, validateLoginForm, submitForm)    

    const { name, email, password } = values    

    return ( 
        <div className="regist-wrapper">
            <div>
                <div>                   

                    <form
                        onSubmit={handleSubmit}
                    >
                         <div>
                            <label                            
                                htmlFor="name"
                            >
                                Name
                            </label>   
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your name"
                                value={name}      
                                onChange={(e) => handleChange(e)}                    
                            /> 
                            {
                                errors.name ? (
                                    <div>
                                        <p>Error</p>
                                        <p>{errors.name}</p>
                                    </div> 
                                ) : null
                            }
                        </div>

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
 
export default Register;