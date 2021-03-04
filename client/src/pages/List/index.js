import React, { useEffect, useCallback, useRef } from 'react'
import CharactersList from 'components/CharactersList'
import useCharacters from 'hooks/useCharacters'
import useNearScreen from 'hooks/useNearScreen'
import debounce from 'just-debounce-it'

const ListPage = () => {    

    const { loading, characters, setPage, msg } = useCharacters()
    const externalRef = useRef()  

    const { isNearScreen } = useNearScreen({
        externalRef: loading ? null : externalRef,
        once: false
    })

    const debounceHandleNextPage = useCallback(
		debounce(() => setPage(prevPage => prevPage + 1), 200),
		[setPage]
	)  

    useEffect(() => {
        if (isNearScreen) debounceHandleNextPage()
    }, [debounceHandleNextPage, isNearScreen])

    return ( 
        <>              
            <CharactersList 
                characters={characters}
                msg={msg}                   
            />           
            <div id="visor" ref={externalRef}></div>    
        </>
    );
}
 
export default ListPage;