import React from 'react';
import { Box, Container, Heading, Text, VStack, List, ListItem, Button } from '@chakra-ui/react';

const HowToBuy = () => {
  return (
    <Container maxW="container.xl" py={20}>
      <VStack spacing={10} align="stretch">
        <Box textAlign="center">
          <Heading mb={4}>How to Buy XYZ Token</Heading>
          <Text fontSize="xl">Follow these simple steps to purchase XYZ tokens</Text>
        </Box>

        <Box>
          <List spacing={8}>
            <ListItem>
              <Box p={6} bg="gray.50" borderRadius="lg">
                <Heading size="md" mb={4}>1. Create a Wallet</Heading>
                <Text>
                  Download and install MetaMask or any other compatible wallet. Create a new wallet or import your existing one.
                </Text>
              </Box>
            </ListItem>
            <ListItem>
              <Box p={6} bg="gray.50" borderRadius="lg">
                <Heading size="md" mb={4}>2. Add Network</Heading>
                <Text>
                  Add the appropriate network to your wallet (e.g., Ethereum, BSC).
                </Text>
              </Box>
            </ListItem>
            <ListItem>
              <Box p={6} bg="gray.50" borderRadius="lg">
                <Heading size="md" mb={4}>3. Get Native Tokens</Heading>
                <Text>
                  Purchase ETH/BNB from an exchange and transfer it to your wallet.
                </Text>
              </Box>
            </ListItem>
            <ListItem>
              <Box p={6} bg="gray.50" borderRadius="lg">
                <Heading size="md" mb={4}>4. Swap for XYZ</Heading>
                <Text mb={4}>
                  Visit our approved DEX and swap your ETH/BNB for XYZ tokens.
                </Text>
                <Button colorScheme="blue">Launch Exchange</Button>
              </Box>
            </ListItem>
          </List>
        </Box>

        <Box p={6} bg="blue.50" borderRadius="lg">
          <Heading size="md" mb={4}>Important Note</Heading>
          <Text>
            Always verify the contract address before making any transactions. The official XYZ token contract address will be published here once launched.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default HowToBuy;
