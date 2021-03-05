import { useEffect, useState } from 'react'
import { getCharacters } from 'actions/character'
import { useDispatch, useSelector } from 'react-redux'

const INITIAL_PAGE = 1

const useCharacters = () => {    
    
    const [ loadingNextPage, setLoadingNextPage ] = useState(false)
    const [ page, setPage ] = useState(INITIAL_PAGE)

    const dispatch = useDispatch();

    useEffect(() => {
        if(!loadingNextPage){    
            const loadCharacters = page => {
                dispatch(getCharacters(page))     
                setLoadingNextPage(true)
            }          
            loadCharacters(page)
        }        
    }, [dispatch, loadingNextPage, page])    

    useEffect(() => {
        if (page === INITIAL_PAGE) return       
        const loadNextCharacters = page => {
            dispatch(getCharacters(page))            
        }          
        loadNextCharacters(page)                    
    }, [dispatch, page])

    const characters = useSelector(state => state.characters.characters)  
    const loading = useSelector(state => state.characters.loading)
    const msg = useSelector(state => state.characters.msg)      
        
    return {   
        loading,             
        characters,
        msg,
        setPage
    }
}

export default useCharacters
