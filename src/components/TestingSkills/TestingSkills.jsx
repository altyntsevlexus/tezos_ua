import done from '../../images/done.svg';
import skills from '../../images/skills.png';

import styled from './TestingSkills.module.scss';

const TestingSkills = () => {
  return (
    <section id="skills">
      <div className="wrapper">
        <h2 className="title title--center--mobile">Testing skills</h2>
        <ul className={styled.skills}>
          <li className={styled.skills__item}>
            <img src={done} alt="done" />
            <p>Applying HTML, CSS/SASS. Markup implementation.</p>
          </li>
          <li className={styled.skills__item}>
            <img src={done} alt="done" />
            <p>
              Working with asynchronous code, HTTP and the REST architecture
            </p>
          </li>
          <li className={styled.skills__centered}>
            <img src={skills} alt="Skills" className="skills__img" />
          </li>
          <li className={styled.skills__item}>
            <img src={done} alt="done" />
            <p>Applying JS. Transforming and organising data. Interactions.</p>
          </li>
          <li className={styled.skills__item}>
            <img src={done} alt="done" />
            <p>
              Using one of the modern front-end frameworks either Vue or React.
              Vue is preferable but React is also viable.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default TestingSkills;
