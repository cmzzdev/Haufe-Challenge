import React, { useEffect } from 'react'
import Moment from 'moment'
import './infodetail.scss'
import { getFavorite, createFavorite, deleteFavorite } from 'actions/favorite'
import { useDispatch, useSelector } from 'react-redux'


const InfoDetail = ({character, loading}) => {    

    const { id, name, created, gender, species, status, image, url, origin, location, episode } = character  

    //<Redirect to="/Error404" />
    
    const dispatch = useDispatch()     

    useEffect(() => {
        if(id){
            dispatch(getFavorite(id))
        } 
    }, [dispatch, id])          

    const favorite = useSelector(state => state.favorite.favorite)  
    const idfav = useSelector(state => state.favorite.favorite._id)     

    const createFav = () => {
        dispatch(createFavorite(id))        
    }

    const deleteFav = () => {
        dispatch(deleteFavorite(idfav))
    } 

    let isFavorite = favorite._id ? "❤️" : ''    

    return ( 

        <>
            {
                !loading && (

                    <div className="character-content">
                
                        <div className="character-photo">
                            <img src={image} alt={name} />
                            { isFavorite && (
                                <button className="btn-fav">
                                    <span aria-label="fav" role="img">
                                        {isFavorite}
                                    </span>
                                </button>
                                )                 
                            }  
                        </div>

                        <div className="character-info">

                            { name && (
                                <div>
                                    <span className='sp-name'>{name}</span>                    
                                </div>
                            )}
                        
                            <div className="info-content">
                                <div className="left">
                                    { created && (
                                        <div>
                                        <span className='sp-info'>Created: </span>
                                            { Moment(created).format('DD/MM/YYYY') }
                                        </div>
                                        )
                                    }

                                    { gender && (
                                        <div>
                                            <span className='sp-info'>Gender: </span> 
                                            {gender}
                                        </div>
                                    )}

                                    { species && (
                                        <div>
                                            <span className='sp-info'>Species: </span>
                                            {species}
                                        </div>
                                    )} 

                                    { status && (                       
                                        <div>
                                            <span className='sp-info'>Status: </span>
                                            <span><span className={`bg-${status.toLowerCase()} point`}></span>{status}</span>
                                        </div>
                                        )
                                    }

                                </div>
                                <div className="right">                            
                                    {
                                        isFavorite ? (
                                            <>
                                                <button
                                                    className="btn-detail"   
                                                    onClick={deleteFav}                     
                                                >Del Favorite</button>
                                                
                                            </>
                                        ) : (
                                            <>
                                                <button
                                                    className="btn-detail"                        
                                                    onClick={createFav}
                                                >Add Favorite</button>
                                            </>
                                        )
                                    }                            
                                </div>
                            </div>
                            
                            { origin && (
                                <div className='origin-content'>
                                    <span className='sp-info'>Origin: </span>
                                    {origin.name}
                                </div>
                            )}
                            
                            
                            <div className="data">

                                <span className="sp-data-title">💻 Data Links</span>

                                { url && (
                                    <div>
                                        <a href={url} target="_blank" rel="noreferrer">Data Character</a>
                                    </div>
                                )}

                                { origin && (                               
                                    <div>                                
                                        <a href={origin.url} target="_blank" rel="noreferrer">Data Origin</a>
                                    </div> 
                                    ) 
                                }      
                        

                                { location && (
                                    <div>
                                        <a href={location.url} target="_blank" rel="noreferrer">Data Location</a>
                                    </div>
                                )}   

                                <span className="sp-data-title">🎥 Episodes</span>
                            
                                { episode && (
                                        episode.map((chapter, index) => (
                                            <span key={chapter}>
                                                <a href={chapter} target="_blank" rel="noreferrer">{index} </a>
                                            </span>        
                                        ))
                                    )
                                }
                            </div>  
                    
                        </div>
                    </div>
                )
            }       
        </>
    );
}
 
export default InfoDetail;