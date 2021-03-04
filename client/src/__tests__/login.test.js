import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Login from 'components/Login'
import Alert from 'components/Alert'
import CharactersList from 'components/CharactersList'

const initSession = jest.fn()

beforeEach(() => { 
    render(    
        <Login initSession={initSession} />   
    )
})

describe('when the login form is mounted', () => {  
    it('there must be a create login', () => {    
        expect(screen.getByRole('heading', {name: /Login/i })).toBeInTheDocument()
    })
    it('should exists fields: email and password', () => {
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
    })
    it('should exists submit button', () => {
        expect(screen.getByRole('button', {name: /submit/i})).toBeInTheDocument()
    })
})

describe('when the users submits the form without values', () => {
    it('should display validation messages', () => {
        const submitButton = screen.getByRole('button', {name: /submit/i})
        expect(screen.queryByText(/the email is required/i)).not.toBeInTheDocument()
        expect(screen.queryByText(/the password is required/i)).not.toBeInTheDocument()  
        fireEvent.click(submitButton)
        expect(screen.queryByText(/the email is required/i)).toBeInTheDocument()
        expect(screen.queryByText(/the password is required/i)).toBeInTheDocument() 
    })    
})

describe('when the user submit the form', () => {

    it('when login fails, user dont exist' , async () => {
        const submitButton = screen.getByRole('button', {name: /submit/i})
        const emailInput = screen.getByLabelText(/email/i)
        const passwordInput = screen.getByLabelText(/password/i)
        fireEvent.change(emailInput, { target: { name: 'email', value: 'emailinvent@correo.com'}})
        fireEvent.change(passwordInput, { target: { name: 'password', value: '123456'}})
        fireEvent.click(submitButton)
        render( <Alert msg='User dont exist'/> )
        await waitFor(() => expect(screen.getByText(/user dont exist/i)).toBeInTheDocument())
    })  
    
    it('when login fails, invalid password', async () => {
        const submitButton = screen.getByRole('button', {name: /submit/i})
        const emailInput = screen.getByLabelText(/email/i)
        const passwordInput = screen.getByLabelText(/password/i)
        fireEvent.change(emailInput, { target: { name: 'email', value: 'carles@correo.com'}})
        fireEvent.change(passwordInput, { target: { name: 'password', value: 'invalidsuperpassword'}})
        fireEvent.click(submitButton)
        render( <Alert msg='Invalid password'/> )
        await waitFor(() => expect(screen.getByText(/invalid password/i)).toBeInTheDocument())
    })

    it('when login is success', async () => {
        const submitButton = screen.getByRole('button', {name: /submit/i})
        const emailInput = screen.getByLabelText(/email/i) 
        const passwordInput = screen.getByLabelText(/password/i)
        fireEvent.change(emailInput, { target: { name: 'email', value: 'carles@correo.com'}})
        fireEvent.change(passwordInput, { target: { name: 'password', value: '123456'}})
        fireEvent.click(submitButton)
        render( <CharactersList />)
        await waitFor(() => expect(screen.getByText(/List Of Characters/i)).toBeInTheDocument())
    })
    
})