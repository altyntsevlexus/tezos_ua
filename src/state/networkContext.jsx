import propTypes from 'prop-types';
import { createContext } from 'react';

const NetworkStateContext = createContext('');

const NetworkProvider = ({ children }) => {
  return (
    <NetworkStateContext.Provider value="mainnet">
      {children}
    </NetworkStateContext.Provider>
  );
};

NetworkProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export { NetworkStateContext, NetworkProvider };
