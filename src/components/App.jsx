import AppRouter from '../router/AppRouter';
import { BlocksProvider } from '../context/blocksContext';
import { NetworkProvider } from '../context/networkContext';

function App() {
  return (
    <NetworkProvider>
      <BlocksProvider>
        <AppRouter />
      </BlocksProvider>
    </NetworkProvider>
  );
}

export default App;
