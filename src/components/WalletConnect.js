import React, { useState, useEffect } from 'react';
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useToast,
  Text,
  HStack,
  Icon,
  Box,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { FaWallet, FaEthereum, FaUnlink } from 'react-icons/fa';

const SUPPORTED_NETWORKS = {
  1: {
    name: 'Ethereum Mainnet',
    symbol: 'ETH',
    explorer: 'https://etherscan.io',
    rpcUrl: 'https://mainnet.infura.io/v3/',
    chainId: '0x1'
  },
  56: {
    name: 'BNB Smart Chain',
    symbol: 'BNB',
    explorer: 'https://bscscan.com',
    rpcUrl: 'https://bsc-dataseed.binance.org/',
    chainId: '0x38'
  },
  137: {
    name: 'Polygon',
    symbol: 'MATIC',
    explorer: 'https://polygonscan.com',
    rpcUrl: 'https://polygon-rpc.com',
    chainId: '0x89'
  }
};

const WalletConnect = () => {
  const [account, setAccount] = useState('');
  const [chainId, setChainId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  useEffect(() => {
    checkConnection();
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
      window.ethereum.on('chainChanged', handleChainChanged);
    }

    return () => {
      if (window.ethereum?.removeListener) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
        window.ethereum.removeListener('chainChanged', handleChainChanged);
      }
    };
  }, []);

  const checkConnection = async () => {
    try {
      if (window.ethereum) {
        const chainId = await window.ethereum.request({ method: 'eth_chainId' });
        setChainId(parseInt(chainId, 16));
        
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setAccount(accounts[0]);
        }
      }
    } catch (err) {
      console.log('Error checking connection:', err);
    }
  };

  const handleAccountsChanged = (accounts) => {
    if (accounts.length > 0) {
      setAccount(accounts[0]);
    } else {
      setAccount('');
    }
  };

  const handleChainChanged = (chainId) => {
    setChainId(parseInt(chainId, 16));
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
      window.open('https://metamask.io/download/', '_blank');
      return;
    }

    setIsLoading(true);
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts'
      });
      setAccount(accounts[0]);
      
      const chainId = await window.ethereum.request({ method: 'eth_chainId' });
      setChainId(parseInt(chainId, 16));
    } catch (err) {
      toast({
        title: 'Connection Failed',
        description: err.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const switchNetwork = async (networkId) => {
    if (!window.ethereum) return;
    
    const network = SUPPORTED_NETWORKS[networkId];
    setIsLoading(true);
    
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: network.chainId }],
      });
    } catch (switchError) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: network.chainId,
                chainName: network.name,
                rpcUrls: [network.rpcUrl],
                nativeCurrency: {
                  name: network.symbol,
                  symbol: network.symbol,
                  decimals: 18,
                },
                blockExplorerUrls: [network.explorer],
              },
            ],
          });
        } catch (addError) {
          toast({
            title: 'Network Switch Failed',
            description: addError.message,
            status: 'error',
            duration: 5000,
            isClosable: true,
          });
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  const disconnectWallet = () => {
    setAccount('');
    toast({
      title: 'Wallet Disconnected',
      description: 'Your wallet has been disconnected',
      status: 'info',
      duration: 3000,
      isClosable: true,
    });
  };

  const getCurrentNetwork = () => {
    return SUPPORTED_NETWORKS[chainId]?.name || 'Unknown Network';
  };

  if (!account) {
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
        isLoading={isLoading}
        leftIcon={<Icon as={FaWallet} />}
      >
        Connect Wallet
      </Button>
    );
  }

  return (
    <Menu>
      <MenuButton
        as={Button}
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
        rightIcon={<ChevronDownIcon />}
      >
        <HStack spacing={2}>
          <Icon as={FaEthereum} />
          <Box>
            <Text fontSize="xs" fontWeight="normal">{getCurrentNetwork()}</Text>
            <Text fontSize="sm">{`${account.slice(0, 6)}...${account.slice(-4)}`}</Text>
          </Box>
        </HStack>
      </MenuButton>
      <MenuList
        border="2px solid black"
        boxShadow="4px 4px 0 0 #000"
        bg="white"
      >
        <Text px={3} py={2} fontWeight="bold" borderBottom="2px solid black">
          Switch Network
        </Text>
        {Object.entries(SUPPORTED_NETWORKS).map(([id, network]) => (
          <MenuItem
            key={id}
            onClick={() => switchNetwork(Number(id))}
            icon={<Icon as={FaEthereum} />}
            isDisabled={chainId === Number(id)}
          >
            {network.name}
          </MenuItem>
        ))}
        <MenuItem
          onClick={disconnectWallet}
          icon={<Icon as={FaUnlink} />}
          color="red.500"
          borderTop="2px solid black"
        >
          Disconnect
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default WalletConnect;
