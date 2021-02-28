import React, { useState } from 'react';
import './index.css';

const Login = ({initSession}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("handleSubmit")
        initSession({email,password})
    }

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
                                onChange={(e) => setEmail(e.target.value)}                                                          
                            /> 
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
                                onChange={(e) => setPassword(e.target.value)}                                                          
                            /> 
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