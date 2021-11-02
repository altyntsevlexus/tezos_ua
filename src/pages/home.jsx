import React, { useEffect } from 'react';

import TestingSkills from '../components/TestingSkills';
import Description from '../components/Description';
import Team from '../components/Team';
import Header from '../components/Header';
import { useBlocksState } from '../context/blocksContext';

const Home = () => {
  const { handleBlocks } = useBlocksState();
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
