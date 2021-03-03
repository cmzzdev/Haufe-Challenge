import React, { useEffect } from 'react'
import InfoDetail from 'components/InfoDetail'
import { getCharacterById } from 'actions/character'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import './detail.scss'

const DetailPage = () => {

    const dispatch = useDispatch()   

    let { id } = useParams()   

    useEffect(() => {
       dispatch(getCharacterById(id))              
    }, [dispatch, id]);     

    const character = useSelector(state => state.characters.character)   
    const loading = useSelector(state => state.characters.loading)   

    return ( 
        <>
            <div className="detail-header">
                <div className='back-content'>
                    <Link to='/list'>
                        <button
                            className="btn-detail"
                        >
                            Back to list
                        </button>                                        
                    </Link>
                </div>
                <div>
                    <h1 className="title">Detail Page</h1> 
                </div>
            </div>
             

            <div className="detail-content"> 

                { loading ? (

                    <p>Loading...</p>

                ) : (      
                    
                    <InfoDetail 
                        character={character}                        
                    />                    
                )}
                                
            </div>

        </>
    );
}
 
export default DetailPage;