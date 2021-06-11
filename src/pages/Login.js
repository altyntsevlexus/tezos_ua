import React from 'react'
import LoginForm from '../components/LoginForm'

import WithHeader from '../components/shared/WithHeader'

const Login = () => {

    return(
        <WithHeader>
            <LoginForm/>
        </WithHeader>
    )
}

export default Login