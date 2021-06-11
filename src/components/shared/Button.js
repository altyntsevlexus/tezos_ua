import React from 'react'

const Button = ({className, onClick, name, children}) => {

    return(
    <button onClick={onClick} className={className}>{name}{children}</button>
    )
}

export default Button