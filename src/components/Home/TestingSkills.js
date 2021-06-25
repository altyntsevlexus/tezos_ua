
const TestingSkills = () => {
    return (
        <section>
        <div className="wrapper">
            <h2>Testing skills</h2>
            <div className="skills__list">
                <div className="skills__list__group">
                    <li className="skills__list__item">
                        <img src='/tezos_ua/images/done.png' alt="done" />
                        <p>Applying HTML, CSS/SASS. Markup implementation.</p>
                </li>
                    <li className="skills__list__item">
                        <img src='/tezos_ua/images/done.png' alt="done"/>
                        <p>Applying JS. Transforming and organising data. Interactions.</p>
                    </li>
                </div>

                <div className="skills__list__group">
                    <li className="skills__list__item">
                        <img src='/tezos_ua/images/done.png' alt="done"/>
                        <p>Working with asynchronous code, HTTP and the REST architecture</p>
                    </li>
                    <li className="skills__list__item">
                        <img src='/tezos_ua/images/done.png' alt="done"/>
                        <p>Using one of the modern front-end frameworks either Vue or React. Vue is preferable but React is also viable.</p>
                    </li>
                </div>
                <img src='/tezos_ua/images/skills.png' alt="Skills" className="skills__img"/> 
            </div>
        </div>
    </section>
    )
}

export default TestingSkills;
