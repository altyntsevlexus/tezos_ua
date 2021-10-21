import propTypes from 'prop-types';

const TrBlock = ({ block }) => {
  return (
    <tr>
      <td>{block.level}</td>
      <td>{block.baker}</td>
      <td>{block.timestamp}</td>
      <td>{block.numOfOperations}</td>
      <td>{block.volume}</td>
      <td>{block.fees}</td>
      <td>{block.endorsements}</td>
    </tr>
  );
};

TrBlock.propTypes = {
  block: propTypes.objectOf(propTypes.string),
};

TrBlock.defaultProps = {
  block: {
    level: '---',
    baker: '---',
    timestamp: '---',
    numOfOperations: '---',
    volume: '---',
    fees: '---',
    endorsements: '---',
  },
};

export default TrBlock;
