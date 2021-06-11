import React from 'react'

const Input = ({labelName, name, value, handleChange, errorTracker, type, ...inputProps}) => {

    return(
        <>
            <label htmlFor={name}  className="login-form__label">{labelName}</label>
            <input 
            type={type} 
            value={value} 
            name={name} 
            required 
            className={errorTracker ? 'login-form__input_error' : 'login-form__input'}
            onChange={handleChange} 
            />
        </>
    )
}

export default Input