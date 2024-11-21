import React, { useState, useEffect } from 'react';
import { Button, useToast } from '@chakra-ui/react';

const WalletConnect = () => {
  const [account, setAccount] = useState('');
  const toast = useToast();

  // Initialize ethereum check
  useEffect(() => {
    // Don't try to modify window.ethereum
    const checkConnection = async () => {
      try {
        if (window.ethereum) {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          if (accounts.length > 0) {
            setAccount(accounts[0]);
          }
        }
      } catch (err) {
        console.log('Error checking connection:', err);
      }
    };

    checkConnection();

    // Listen for account changes
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
    }

    return () => {
      if (window.ethereum && window.ethereum.removeListener) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
      }
    };
  }, []);

  const handleAccountsChanged = (accounts) => {
    if (accounts.length > 0) {
      setAccount(accounts[0]);
    } else {
      setAccount('');
    }
  };

  const connectWallet = async () => {
    if (!window.ethereum) {
      toast({
        title: 'MetaMask not found',
        description: 'Please install MetaMask browser extension',
        status: 'warning',
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts'
      });
      setAccount(accounts[0]);
    } catch (err) {
      toast({
        title: 'Connection Failed',
        description: err.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

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
