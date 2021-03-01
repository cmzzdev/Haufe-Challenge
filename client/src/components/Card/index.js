import React from 'react'
import Moment from 'moment';
import './card.scss'

const Card = ({character}) => {

    const { name, image, created, status, species, gender } = character

    return ( 
        <div 
            className="card"             
        >
            <span className="card-link"></span>
            <img src={image} alt={name} />
            <div className="text-wrapper">
                <h3 className="card-title">
                    {name} 
                </h3>
                <div className="created">
                    { 
                        created ? (
                            <span>Created: { Moment(created).format('DD/MM/YYYY') }</span> 
                        ) : ''
                    }
                    
                </div>
                <div className="card-details">
                    <div>
                        <span>Status: {status}</span>
                        <span>Species: {species}</span>
                        <span>Gender: {gender}</span>
                    </div>
                    <div className="btn-content">
                        <button className="btn">                    
                            Read more
                        </button>
                    </div>
                </div>
            </div>           
        </div>
    );
}
 
export default Card