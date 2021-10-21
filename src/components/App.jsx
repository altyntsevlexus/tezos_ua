import AppRouter from '../route/AppRouter';
import { BlocksProvider } from '../state/blocksContext';
import { NetworkProvider } from '../state/networkContext';

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
