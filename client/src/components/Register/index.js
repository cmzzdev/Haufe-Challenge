import React from 'react'
import './register.scss'
import 'styles/form.css'
import Alert from 'components/Alert'
import useValidation from 'hooks/useValidation'
import { validateRegisterForm } from 'utils/validateForm'

const INITIAL_VALUES = {
    name: '',
    email: '',
    password: ''
}

const Register = ({createUser, msg}) => {  

    const submitForm = () => {        
        createUser({name, email,password})
    }
    
    const {
        values,
        errors,
        handleSubmit,
        handleChange,
    } = useValidation(INITIAL_VALUES, validateRegisterForm, submitForm)    

    const { name, email, password } = values    

    return ( 
        <div className="register-wrapper">     
            <h1 className="title">Register</h1>     
              
            { msg && (
                <Alert msg={msg} />
            )}

            <div className="justify-form">
                <div className="form-content">                   
                    <form
                        className="form"
                        onSubmit={handleSubmit}
                    >
                        <div className="field-content">
                            <label                            
                                htmlFor="name"
                            >
                                Name
                            </label>   
                            <input
                                className="input-field"
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your name"
                                value={name}      
                                onChange={(e) => handleChange(e)}                    
                            /> 
                            {
                                errors.name ? (
                                    <div className="error-content">
                                        <p className="font-bold">Error</p>
                                        <p>{errors.name}</p>
                                    </div> 
                                ) : null
                            }
                        </div>

                        <div className="field-content">
                            <label                            
                                htmlFor="email"
                            >
                                Email
                            </label>   
                            <input
                                className="input-field"
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email address"
                                value={email}      
                                onChange={(e) => handleChange(e)}                    
                            /> 
                            {
                                errors.email ? (
                                    <div className="error-content">
                                        <p className="font-bold">Error</p>
                                        <p>{errors.email}</p>
                                    </div> 
                                ) : null
                            }
                        </div>

                        <div className="field-content">
                            <label                            
                                htmlFor="password"
                            >
                                Password
                            </label>   
                            <input
                                className="input-field"
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Your password"
                                value={password}      
                                onChange={(e) => handleChange(e)}                       
                            /> 
                            {
                                errors.password ? (
                                    <div className="error-content">
                                        <p className="font-bold">Error</p>
                                        <p>{errors.password}</p>
                                    </div> 
                                ) : null
                            }
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                className="btn"                            
                            >Submit</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Register;