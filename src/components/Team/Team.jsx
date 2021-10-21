import team1 from '../../images/team-1.png';
import team2 from '../../images/team-2.png';

import styled from './Team.module.scss';

const Team = () => {
  return (
    <section id="team">
      <div className="wrapper">
        <h2 className="title title--center--tablet">Our team</h2>
        <div className={styled.team}>
          <div className={styled.team__item}>
            <img className={styled.team__img} src={team1} alt="team1" />
            <p className={styled.team__text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue
              molestie pretium, dictum nunc ac pellentesque. Semper imperdiet
              elit, nec faucibus varius dui. Lorem non sed tincidunt pharetra
              tempor. Amet proin sapien consequat orci, mauris.Lorem ipsum
            </p>
            <a href="#top" className={`link ${styled.team__link}`}>
              Learn More
            </a>
          </div>
          <div className={styled.team__item}>
            <img className={styled.team__img} src={team2} alt="team2" />
            <p className={styled.team__text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue
              molestie pretium, dictum nunc ac pellentesque. Semper imperdiet
              elit, nec faucibus varius dui. Lorem non sed tincidunt pharetra
              tempor. Amet proin sapien consequat orci, mauris.Lorem ipsum
            </p>
            <a href="#top" className={`link ${styled.team__link}`}>
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
