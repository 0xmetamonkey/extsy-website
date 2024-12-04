import React, { createContext, useContext } from 'react';
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';

const Web3Context = createContext();

export const injected = new InjectedConnector({
  supportedChainIds: [1, 137, 80001], // Ethereum, Polygon, Mumbai
});

export const walletconnect = new WalletConnectConnector({
  rpc: {
    1: `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
    137: `https://polygon-mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
    80001: `https://polygon-mumbai.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
  },
  qrcode: true,
  pollingInterval: 12000,
});

export function Web3ContextProvider({ children }) {
  const { connector, account, chainId, isActive, error } = useWeb3React();

  const connectWallet = async () => {
    try {
      await connector.activate();
    } catch (err) {
      console.error('Error connecting wallet:', err);
      throw err;
    }
  };

  const disconnectWallet = async () => {
    try {
      if (connector?.deactivate) {
        await connector.deactivate();
      } else {
        await connector.resetState();
      }
    } catch (err) {
      console.error('Error disconnecting wallet:', err);
      throw err;
    }
  };

  const switchNetwork = async (chainId) => {
    if (!connector) return;
    try {
      await connector.provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: `0x${chainId.toString(16)}` }],
      });
    } catch (err) {
      console.error('Error switching network:', err);
      throw err;
    }
  };

  const value = {
    connectWallet,
    disconnectWallet,
    switchNetwork,
    account,
    chainId,
    isActive,
    error,
  };

  return <Web3Context.Provider value={value}>{children}</Web3Context.Provider>;
}

export function useWeb3Context() {
  const context = useContext(Web3Context);
  if (!context) {
    throw new Error('useWeb3Context must be used within a Web3ContextProvider');
  }
  return context;
}
