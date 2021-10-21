import axios from 'axios';

const initialURL = (network) =>
  `https://api.teztracker.com/v2/data/tezos/${network}`;

const getBlocks = (network = 'mainnet') => {
  return axios.get(`${initialURL(network)}/blocks?limit=15`);
};

// eslint-disable-next-line import/prefer-default-export
export { getBlocks };
