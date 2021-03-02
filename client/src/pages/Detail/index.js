import React, { useEffect} from 'react'
import { getCharacterById } from 'actions/character'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import './detail.scss'

const DetailPage = () => {

    const dispatch = useDispatch();
    let { id } = useParams()

    useEffect(() => {
        dispatch(getCharacterById(id))
    }, [dispatch, id]); 

    const character = useSelector(state => state.characters.character)   
    const loading = useSelector(state => state.characters.loading)   

    return ( 
        <>
            <h1 className="title">Detail Page</h1>  
            
            <div className="detail-content">

                <Link to='/list'>
                    <button
                        className="btn"
                    >
                        Back to list
                    </button>                                        
                </Link>

                { loading ? (

                    ""
                ) : (
                    <>
                    <div>{character.name}</div>
                    <div>{character.created}</div>
                    <div>{character.gender}</div>
                    <div>{character.image}</div>
                    <div>{character.species}</div>
                    <div>{character.status}</div>
                    <div>{character.url}</div>
                    {
                        character.favorite ? (
                            <div>IS FAVORITE!!!</div>
                        ) : null
                    }
                    {
                        character.origin ? (
                            <>
                                <div>{character.origin.name}</div>
                                <div>{character.origin.url}</div>
                            </>
                        ) : null
                    }
                    {
                        character.location ? (
                            <>
                                <div>{character.location.name}</div>
                                <div>{character.location.url}</div>
                            </>
                        ) : null
                    }     

                    {
                        character.episode ? (
                            <>
                                {
                                    character.episode.map(chapter => (
                                        <div key={chapter}>{chapter}</div>
                                    ))
                                }
                            </>

                        ) : null                        
                    }           
                    </>
                )}
            </div>

        </>
    );
}
 
export default DetailPage;