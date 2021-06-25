import React from 'react'

const Description = () => {
    return (
        <section>
            <div className="wrapper">
                <div className="description__flexbox">
                <div className="description">
                <h2>General description of the assignment</h2>
                <ul className="description__list">
                    <li className="description__list__item">
                            <span>01</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </li>
                    <li className="description__list__item">
                            <span>02</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </li>
                    <li className="description__list__item">
                            <span>03</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </li>
                    </ul>
                </div>
                <img src='/tezos_ua/images/description.png' alt="description" className="description__img"/>
                </div>
            </div>
        </section>
    )
}

export default Description;