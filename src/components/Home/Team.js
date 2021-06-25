import React from 'react';

const Team = () => {
    return (
        <section>
            <div className="wrapper">
            <h2 className="team__title">Our team</h2>
            <div className="team__flexbox">
                <div className="team__box">
                    <img src='/tezos_ua/images/team1.png' alt="team1"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue molestie pretium, dictum nunc ac pellentesque. Semper imperdiet elit, nec faucibus varius dui. Lorem non sed tincidunt pharetra tempor. Amet proin sapien consequat orci, mauris.Lorem ipsum</p>
                    <a href="#top">Learn More</a>
                </div>
                <div className="team__box">
                    <img src='/tezos_ua/images/team2.png' alt="team2"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue molestie pretium, dictum nunc ac pellentesque. Semper imperdiet elit, nec faucibus varius dui. Lorem non sed tincidunt pharetra tempor. Amet proin sapien consequat orci, mauris.Lorem ipsum</p>
                    <a href="#top">Learn More</a>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Team;