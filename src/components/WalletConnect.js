import React, { useState, useEffect } from 'react';
import { Button } from '@chakra-ui/react';

const WalletConnect = () => {
  const [account, setAccount] = useState('');
  const [error, setError] = useState('');

  const connectWallet = async () => {
    try {
      // Check if MetaMask is installed
      if (typeof window.ethereum !== 'undefined') {
        // Request account access
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        setError('');
      } else {
        setError('Please install MetaMask!');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  // Handle account changes
  useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length > 0) {
          setAccount(accounts[0]);
        } else {
          setAccount('');
        }
      });
    }
  }, []);

  return (
    <Button
      variant="solid"
      bg="accent.yellow"
      color="black"
      borderWidth="2px"
      borderColor="black"
      boxShadow="4px 4px 0 0 #000"
      _hover={{
        transform: 'translate(-2px, -2px)',
        boxShadow: '6px 6px 0 0 #000',
      }}
      onClick={connectWallet}
    >
      {account ? `${account.slice(0, 6)}...${account.slice(-4)}` : 'Connect Wallet'}
    </Button>
  );
};

export default WalletConnect;
