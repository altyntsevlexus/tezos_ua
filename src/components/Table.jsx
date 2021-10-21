import React, { useContext } from 'react';
import { BlocksStateContext } from '../state/blocksContext';
import TrBlock from './shared/TrBlock';

const Table = () => {
  const { blocks } = useContext(BlocksStateContext);

  return (
    <table>
      <thead>
        <tr>
          <th>Block ID</th>
          <th>Baker</th>
          <th>Created</th>
          <th># of operations</th>
          <th>Volume</th>
          <th>Fees</th>
          <th>Endorsements</th>
        </tr>
      </thead>
      <tbody>
        {blocks.map((block) => {
          return <TrBlock key={Number(block.level)} block={block} />;
        })}
      </tbody>
    </table>
  );
};

export default Table;
