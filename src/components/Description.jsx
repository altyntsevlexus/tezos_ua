import description from '../images/description.png';

const Description = () => {
  return (
    <section id="description">
      <div className="wrapper">
        <div className="description">
          <div className="description__information">
            <h2 className="title title--center--tablet description__title">
              General description of the assignment
            </h2>
            <ul className="description__list">
              <li className="description__item">
                <span className="description__number">01</span>
                <p className="description__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </li>
              <li className="description__item">
                <span className="description__number">02</span>
                <p className="description__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </li>
              <li className="description__item">
                <span className="description__number">03</span>
                <p className="description__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </li>
            </ul>
          </div>
          <img
            src={description}
            alt="description"
            className="description__img"
          />
        </div>
      </div>
    </section>
  );
};

export default Description;
