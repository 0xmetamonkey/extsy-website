import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, VStack, Circle } from '@chakra-ui/react';

const Tokenomics = () => {
  return (
    <Container maxW="container.xl" py={20}>
      <VStack spacing={10} align="stretch">
        <Box textAlign="center">
          <Heading mb={4}>Tokenomics</Heading>
          <Text fontSize="xl">Understanding XYZ Token Distribution</Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <VStack p={6} bg="gray.50" borderRadius="lg">
            <Circle size="100px" bg="blue.500" color="white">
              <Text fontSize="xl">40%</Text>
            </Circle>
            <Heading size="md">Public Sale</Heading>
            <Text textAlign="center">
              Available for public trading and liquidity
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="lg">
            <Circle size="100px" bg="green.500" color="white">
              <Text fontSize="xl">30%</Text>
            </Circle>
            <Heading size="md">Development</Heading>
            <Text textAlign="center">
              Reserved for future development and ecosystem growth
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="lg">
            <Circle size="100px" bg="purple.500" color="white">
              <Text fontSize="xl">30%</Text>
            </Circle>
            <Heading size="md">Team & Marketing</Heading>
            <Text textAlign="center">
              Allocated for team and marketing initiatives
            </Text>
          </VStack>
        </SimpleGrid>

        <Box mt={10}>
          <Heading size="md" mb={4}>Token Details</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            <Box p={4} bg="gray.50" borderRadius="lg">
              <Text fontWeight="bold">Total Supply:</Text>
              <Text>1,000,000,000 XYZ</Text>
            </Box>
            <Box p={4} bg="gray.50" borderRadius="lg">
              <Text fontWeight="bold">Initial Price:</Text>
              <Text>$0.001 USD</Text>
            </Box>
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Tokenomics;
