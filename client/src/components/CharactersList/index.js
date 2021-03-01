import React from 'react';
import './list.css'
import Card from 'components/Card'

const CharactersList = ({characters}) => {
    return ( 
        <>
            <h1 className="title">List Of Characters</h1>  
            <div className="characters-list">
                {
                    characters && (     
                        characters.map(character => (
                            <Card 
                                key={character.id} 
                                character={character} 
                            />
                        ))
                    )
                }
            </div>
        </>
    );
}
 
export default CharactersList;