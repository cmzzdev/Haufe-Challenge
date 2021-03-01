import React from 'react'
import './alert.css'

const Alert = ({msg}) => {
    return ( 
        <div className="alert-wrapper">  
            <div className="alert-content">
                <p className="msg">{msg}</p>   
            </div>    
        </div>
    )
}
 
export default Alert