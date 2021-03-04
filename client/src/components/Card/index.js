import React from 'react'
import Moment from 'moment';
import { Link } from 'react-router-dom'
import './card.scss'

const Card = ({character}) => {


    const { id, name, image, created, status, species, gender, favorite } = character

    let isFavorite = favorite ? "❤️" : '';  

    return ( 
        <div 
            className="card"   
            data-testid="card"                    
        >
            <span className="card-link"></span>
                       
            <img src={image} alt={name} data-testid="card-image"/>
            { isFavorite && (
                <button className="btn-fav">
                    <span aria-label="fav" role="img">
                        {isFavorite}
                    </span>
                </button>
            )} 
            <div className="text-wrapper">
                <h3 className="card-title" data-testid="card-title">
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
                        <span className='sp'>Status: <span className={status.toLowerCase()}>{status}</span></span> 
                        <span className='sp'>Species: {species}</span>
                        <span className='sp' data-testid="card-gender">Gender: {gender}</span>
                    </div>
                    <div className="btn-content">                                                
                        <Link to={`/detail/${id}`}>
                            <button 
                                className="btn"  
                                data-testid="btn-read-more"                                                    
                            >                    
                                Read more
                            </button>
                        </Link>                        
                    </div>
                </div>
            </div>           
        </div>
    );
}
 
export default Card