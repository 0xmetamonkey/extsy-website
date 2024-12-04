import React, { useState } from 'react';
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  useToast,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { FaWallet, FaEthereum, FaPlug } from 'react-icons/fa';
import { injected, walletconnect, useWeb3Context } from '../contexts/Web3Context';

function WalletConnect() {
  const { connectWallet, disconnectWallet, account, chainId, active } = useWeb3Context();
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionError, setConnectionError] = useState(null);
  const toast = useToast();

  const handleConnect = async (connector) => {
    try {
      setIsConnecting(true);
      setConnectionError(null);
      await connectWallet(connector);
    } catch (error) {
      setConnectionError(error.message);
      toast({
        title: 'Connection Error',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsConnecting(false);
    }
  };

  const handleDisconnect = async () => {
    try {
      await disconnectWallet();
      setConnectionError(null);
    } catch (error) {
      toast({
        title: 'Disconnect Error',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const getNetworkName = (chainId) => {
    switch (chainId) {
      case 1:
        return 'Ethereum';
      case 137:
        return 'Polygon';
      case 80001:
        return 'Mumbai';
      default:
        return 'Unknown Network';
    }
  };

  if (!active) {
    return (
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          bg="accent.pink"
          color="white"
          _hover={{ bg: 'accent.pinkDark' }}
          border="2px solid black"
          boxShadow="4px 4px 0 0 #000"
          transition="all 0.3s ease"
          _active={{
            transform: 'translate(2px, 2px)',
            boxShadow: '2px 2px 0 0 #000',
          }}
          isLoading={isConnecting}
        >
          Connect Wallet
        </MenuButton>
        <MenuList border="2px solid black" boxShadow="4px 4px 0 0 #000">
          <MenuItem
            onClick={() => handleConnect(injected)}
            _hover={{ bg: 'accent.yellow' }}
            isDisabled={isConnecting}
          >
            <HStack>
              <Icon as={FaPlug} />
              <Text>MetaMask</Text>
            </HStack>
          </MenuItem>
          <MenuItem
            onClick={() => handleConnect(walletconnect)}
            _hover={{ bg: 'accent.yellow' }}
            isDisabled={isConnecting}
          >
            <HStack>
              <Icon as={FaWallet} />
              <Text>WalletConnect</Text>
            </HStack>
          </MenuItem>
        </MenuList>
      </Menu>
    );
  }

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        bg="accent.green"
        color="white"
        _hover={{ bg: 'accent.greenDark' }}
        border="2px solid black"
        boxShadow="4px 4px 0 0 #000"
        transition="all 0.3s ease"
        _active={{
          transform: 'translate(2px, 2px)',
          boxShadow: '2px 2px 0 0 #000',
        }}
      >
        <HStack>
          <Icon as={FaEthereum} />
          <Text>
            {account.slice(0, 6)}...{account.slice(-4)} ({getNetworkName(chainId)})
          </Text>
        </HStack>
      </MenuButton>
      <MenuList border="2px solid black" boxShadow="4px 4px 0 0 #000">
        <MenuItem onClick={handleDisconnect} _hover={{ bg: 'accent.yellow' }}>
          Disconnect
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default WalletConnect;
