import React, { useEffect, useContext } from 'react';

import TestingSkills from '../components/TestingSkills/TestingSkills';
import Description from '../components/Description/Description';
import Team from '../components/Team/Team';
import Header from '../components/Header/Header';
import { BlocksStateContext } from '../state/blocksContext';

const Home = () => {
  const { handleBlocks } = useContext(BlocksStateContext);

  useEffect(() => {
    handleBlocks();
  }, []);

  return (
    <>
      <Header />
      <TestingSkills />
      <Description />
      <Team />
    </>
  );
};

export default Home;
