import React from 'react'

const WithHeader = ({children}) => {
    return(
        <header className="header" style={{ backgroundImage: "url(/tezos_ua/images/screen.png)" }}>            
            <div className="wrapper">
                <div className="header__flexbox">
                    {children}
                </div>
            </div>
        </header>
    )
}

export default WithHeader