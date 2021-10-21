import React, { useEffect, useContext } from 'react';

import TestingSkills from '../components/TestingSkills';
import Description from '../components/Description';
import Team from '../components/Team';
import Header from '../components/Header';
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
