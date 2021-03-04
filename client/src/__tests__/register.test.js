import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Register from 'components/Register'
import Alert from 'components/Alert'
import CharactersList from 'components/CharactersList'

const createUser = jest.fn()

beforeEach(() => { 
    render(    
        <Register createUser={createUser} />   
    )
})

describe('when the register form is mounted', () => {  
    it('there must be a create register', () => {    
        expect(screen.getByRole('heading', {name: /register/i })).toBeInTheDocument()
    })
    it('should exists fields: name, email and password', () => {
        expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
    })
    it('should exists submit button', () => {
        expect(screen.getByRole('button', {name: /submit/i})).toBeInTheDocument()
    })
})

describe('validation errors messages when user submit the form', () => {
    it('should display validation messages', () => {
        const submitButton = screen.getByRole('button', {name: /submit/i})
        expect(screen.queryByText(/the name is required/i)).not.toBeInTheDocument()
        expect(screen.queryByText(/the email is required/i)).not.toBeInTheDocument()
        expect(screen.queryByText(/the password is required/i)).not.toBeInTheDocument()  
        fireEvent.click(submitButton)
        expect(screen.queryByText(/the name is required/i)).toBeInTheDocument()
        expect(screen.queryByText(/the email is required/i)).toBeInTheDocument()
        expect(screen.queryByText(/the password is required/i)).toBeInTheDocument() 
    })  
    it('should display error password, must be least 6 characters', () => {
        const submitButton = screen.getByRole('button', {name: /submit/i})
        const passwordInput = screen.getByLabelText(/password/i)
        fireEvent.change(passwordInput, { target: { name: 'name', value: 'Albert'}})
        fireEvent.change(passwordInput, { target: { name: 'email', value: 'Albert765432@correo.com'}})
        fireEvent.change(passwordInput, { target: { name: 'password', value: '123'}})
        fireEvent.click(submitButton)
        expect(screen.queryByText(/The password must be at least 6 characters/i)).toBeInTheDocument() 
    })  
})

describe('when the user submit the form', () => {

    
    it('when register fails, the user exists' , async () => {
        const submitButton = screen.getByRole('button', {name: /submit/i})
        const nameInput = screen.getByLabelText(/name/i)
        const emailInput = screen.getByLabelText(/email/i)
        const passwordInput = screen.getByLabelText(/password/i)
        fireEvent.change(nameInput, { target: { name: 'name', value: 'carles'}})
        fireEvent.change(emailInput, { target: { name: 'email', value: 'carles@correo.com'}})
        fireEvent.change(passwordInput, { target: { name: 'password', value: '123456'}})
        fireEvent.click(submitButton)
        render( <Alert msg='This user already exists'/> )
        await waitFor(() => expect(screen.getByText(/This user already exists/i)).toBeInTheDocument())
    })

    it('when register is success', async () => {
        const submitButton = screen.getByRole('button', {name: /submit/i})
        const nameInput = screen.getByLabelText(/name/i)
        const emailInput = screen.getByLabelText(/email/i)
        const passwordInput = screen.getByLabelText(/password/i)
        fireEvent.change(nameInput, { target: { name: 'name', value: 'Robert'}})
        fireEvent.change(emailInput, { target: { name: 'email', value: 'robert6574@correo.com'}})
        fireEvent.change(passwordInput, { target: { name: 'password', value: '123456'}})
        fireEvent.click(submitButton)
        render( <CharactersList />)
        await waitFor(() => expect(screen.getByText(/List Of Characters/i)).toBeInTheDocument())
    })    
    
})