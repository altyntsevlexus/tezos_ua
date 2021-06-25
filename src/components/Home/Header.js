import React from 'react'
import Table from '../Table'
import WithHeader from '../shared/WithHeader'

const Header = ({blocks}) => {
    return(
            <WithHeader>
                <div className="header__info">
                    <img alt="Tezos" src="/tezos_ua/images/vector.png" className="header__info__img"/>
                    <p className="header__info__title">Tezos Ukraine</p>
                    <p className="header__info__description">Front-end development test assignment</p>
                </div>
                <Table blocks={blocks}/>
            </WithHeader>

    )
}

export default Header