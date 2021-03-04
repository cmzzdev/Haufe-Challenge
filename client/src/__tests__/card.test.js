import { render, screen } from '@testing-library/react'
import Card from 'components/Card'
import { BrowserRouter } from 'react-router-dom'
import { makeFakeCharacter } from 'utils/testingValues'

const character = makeFakeCharacter();

beforeEach(() => { 
    render(  
        <BrowserRouter>
            <Card character={character}/> 
        </BrowserRouter>
    )
})

describe('when component is mounted', () => {  
    it('Appears card in the document', () => {    
        expect(screen.getByTestId('card')).toBeInTheDocument()
    })      
    it('Appears Summer Smith, name of character and its a H3 element', () => {        
        expect(screen.getByTestId('card-title').tagName).toBe('H3')
        expect(screen.queryByText(/Summer Smith/i)).toBeInTheDocument()         
    })
    it('Appears and image of character', () => { 
        const imgElement = screen.getByTestId('card-image')
        expect(imgElement).toBeInTheDocument()
        expect(imgElement.tagName).toBe('IMG')
    })
    it('Appears read more button', () => {
        const btnReadMore = screen.getByTestId('btn-read-more')
        expect(btnReadMore.tagName).toBe('BUTTON')       
    })    
    it('Appears gender character in span and her values is Gender: Female', () => {
        const genderElement = screen.getByTestId('card-gender')
        expect(genderElement.tagName).toBe('SPAN')
        expect(genderElement.textContent).toEqual('Gender: Female')
    })
})