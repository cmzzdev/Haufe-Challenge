import React from 'react'
import { render, screen } from '@testing-library/react'
import CharactersList from 'components/CharactersList'

beforeEach(() => { 
    render(  
        <CharactersList />   
    )
})

describe('when component is mounted', () => {  
    it('Appears List Of Characters', () => {    
        expect(screen.getByRole('heading', {name: /List Of Characters/i })).toBeInTheDocument()
    })  
    it('Appears characters-list container', () => {
        const charsContent = screen.getByTestId('characters-list')
        expect(charsContent).toBeInTheDocument()
    })   
})