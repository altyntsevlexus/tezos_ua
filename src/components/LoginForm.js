import React, { useState } from "react"
import { validateEmail, validatePassword } from "../services/validation"

import Input from './shared/Input'

const LoginForm = () => {
    
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
        password2: '',
    })

    const [errors, setErrors] = useState({
        email: true,
        password: true,
        password2: true
    })

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors({
            email: validateEmail(credentials.email),
            password: validatePassword(credentials.password),
            password2: credentials.password === credentials.password2
        })

        if(validateEmail(credentials.email) && validatePassword(credentials.password) && credentials.password === credentials.password2){
            alert("Welcome to Tezos!")
        }

    }
    
    return(
            <form onSubmit={handleSubmit} className="login-form">
                <p className="login-form__title">Login</p>

                <div className="login-form__group">
                    <Input 
                    labelName="Email" 
                    name="email" 
                    value={credentials.email} 
                    handleChange={handleChange} 
                    errorTracker={errors.email} 
                    type="text"
                    />

                    {errors.email ? 
                       "" : 
                       <p className="login-form__notification login-form__notification_red">
                        Email is Invalid
                        </p> 
                    }
                </div>

                <div className="login-form__group">
                    <Input 
                    labelName="Password" 
                    name="password" 
                    value={credentials.password} 
                    handleChange={handleChange} 
                    errorTracker={errors.password}
                    type="password"
                    />

                    {errors.password ? 
                        <p className="login-form__notification login-form__notification_gray">
                            Password must contain only latin letters, 1 upper-case character, 1 lower-case character, one number and one special character
                        </p> 
                        : 
                        <p className="login-form__notification login-form__notification_red">
                            Password must contain only latin letters, 1 upper-case character, 1 lower-case character, one number and one special character
                        </p>
                    }
                </div>

                <div className="login-form__group">
                    <Input 
                    labelName="Confirm password" 
                    name="password2" 
                    value={credentials.password2} 
                    handleChange={handleChange} 
                    errorTracker={errors.password2} 
                    type="password"
                    />

                    {errors.password2 ? 
                        "" : 
                        <p className="login-form__notification login-form__notification_red">
                        Passwords don't match
                        </p>
                    }
                </div>

                <input type="submit" value="Login" className="button_submit_enabled"/>
            </form>
    )
}

export default LoginForm