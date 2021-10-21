import description from '../../images/description.png';

import styled from './Description.module.scss';

const Description = () => {
  return (
    <section id="description">
      <div className="wrapper">
        <div className={styled.description}>
          <div className={styled.description__information}>
            <h2
              className={`title title--center--tablet ${styled.description__title}`}
            >
              General description of the assignment
            </h2>
            <ul className={styled.description__list}>
              <li className={styled.description__item}>
                <span className={styled.description__number}>01</span>
                <p className={styled.description__text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </li>
              <li className={styled.description__item}>
                <span className={styled.description__number}>02</span>
                <p className={styled.description__text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </li>
              <li className={styled.description__item}>
                <span className={styled.description__number}>03</span>
                <p className={styled.description__text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </li>
            </ul>
          </div>
          <img
            src={description}
            alt="description"
            className={styled.description__img}
          />
        </div>
      </div>
    </section>
  );
};

export default Description;
