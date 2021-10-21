import team1 from '../images/team1.png';
import team2 from '../images/team2.png';

const Team = () => {
  return (
    <section id="team">
      <div className="wrapper">
        <h2 className="title title--center--tablet">Our team</h2>
        <div className="team">
          <div className="team__item">
            <img className="team__img" src={team1} alt="team1" />
            <p className="team__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue
              molestie pretium, dictum nunc ac pellentesque. Semper imperdiet
              elit, nec faucibus varius dui. Lorem non sed tincidunt pharetra
              tempor. Amet proin sapien consequat orci, mauris.Lorem ipsum
            </p>
            <a href="#top" className="link team__link">
              Learn More
            </a>
          </div>
          <div className="team__item">
            <img className="team__img" src={team2} alt="team2" />
            <p className="team__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue
              molestie pretium, dictum nunc ac pellentesque. Semper imperdiet
              elit, nec faucibus varius dui. Lorem non sed tincidunt pharetra
              tempor. Amet proin sapien consequat orci, mauris.Lorem ipsum
            </p>
            <a href="#top" className="link team__link">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
