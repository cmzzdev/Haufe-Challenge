import { useEffect, useState } from 'react'
import { getCharacters } from 'actions/character'
import { useDispatch, useSelector } from 'react-redux'

const useCharacters = () => {
    
    const [ loading, setLoading ] = useState(false) 
    const [ page, setPage ] = useState(1)

    const dispatch = useDispatch();

    useEffect(() => {
        setLoading(true);
        const loadCharacters = page => {
            dispatch(getCharacters(page))
            setLoading(false)
        }          
        loadCharacters(page)
    }, [dispatch, page])    

    const characters = useSelector(state => state.characters.characters)    
    
    return {
        loading,
        characters,
        setPage
    }
}

export default useCharacters
