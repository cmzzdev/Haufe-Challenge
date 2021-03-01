import { useState, useEffect } from 'react'

const useValidation = (initialState, validateForm, fn) => {

    const [ values, setValues ] = useState(initialState)
    const [ errors, setErrors ] = useState({})
    const [ submitForm, setSubmitForm ] = useState(false)

    useEffect(() => {
        if(submitForm){
            const noErrors = Object.keys(errors).length === 0
            if(noErrors){
                fn()
            }
            setSubmitForm(false)
        }
    }, [errors, fn, submitForm])   

    const handleSubmit = e => {
        e.preventDefault()
        const errorsValidation = validateForm(values)
        setErrors(errorsValidation)
        setSubmitForm(true)
    }

    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })  
        setErrors({}) 
    }

    return{
        values,
        errors,
        handleSubmit,
        handleChange
    }
}

export default useValidation