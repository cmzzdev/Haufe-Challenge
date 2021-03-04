import React from 'react';
import './list.scss'
import Card from 'components/Card'
import Alert from 'components/Alert'

const CharactersList = ({characters, msg }) => {
    return ( 
        <>
            <h1 className="title">List Of Characters</h1>  
            { msg && (
                <Alert msg={msg} />
            )}

            <div className="characters-list" data-testid="characters-list">               
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