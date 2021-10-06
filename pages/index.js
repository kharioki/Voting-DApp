import React from 'react';
import { useContractKit } from '@celo-tools/use-contractkit';
import { ContractKitProvider } from '@celo-tools/use-contractkit';
import '@celo-tools/use-contractkit/lib/styles.css';

function App() {
  const { address, connect } = useContractKit();

  return (
    <main>
      <h1>Celo Voting DApp</h1>

      <button onClick={connect}>Connect here to connect your wallet</button>
    </main>
  )
}

function WrappedApp() {
  return (
    <ContractKitProvider
      dapp={{
        name: 'Celo Voting DApp',
        description: 'Celo Voting DApp',
        url: 'https://celo.org',
      }}
    >
      <App />
    </ContractKitProvider>
  );
}

export default WrappedApp;
