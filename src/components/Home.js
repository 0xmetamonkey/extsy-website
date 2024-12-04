import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Stack,
  Grid,
  Icon,
} from '@chakra-ui/react';
import { FaClock, FaCoins, FaPaintBrush, FaUsers, FaDatabase, FaBalanceScale } from 'react-icons/fa';

const FeatureCard = ({ title, description, icon }) => (
  <Box
    bg="white"
    p={8}
    border="2px solid black"
    boxShadow="4px 4px 0 0 #000"
    transition="all 0.3s ease"
    _hover={{
      transform: 'translate(-4px, -4px)',
      boxShadow: '8px 8px 0 0 #000',
    }}
  >
    <Icon as={icon} w={8} h={8} mb={4} color="accent.pink" />
    <Heading size="md" mb={4} letterSpacing="-0.02em">
      {title}
    </Heading>
    <Text color="gray.700">{description}</Text>
  </Box>
);

function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        bg="accent.yellow"
        py={{ base: 16, md: 24 }}
        border="4px solid #000"
        borderTop="none"
        position="relative"
        overflow="hidden"
      >
        {/* Background Pattern */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          opacity="0.1"
          bgImage="url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
        />
        <Container maxW="container.xl" position="relative">
          <Stack spacing={8} alignItems="flex-start">
            <Box 
              bg="white" 
              p={6}
              border="2px solid black"
              boxShadow="4px 4px 0 0 #000"
              maxW="fit-content"
            >
              <Heading
                size="4xl"
                lineHeight="1"
                fontWeight="black"
                letterSpacing="-0.02em"
              >
                EXTSY
                <Text
                  as="span"
                  display="block"
                  color="accent.pink"
                  textShadow="4px 4px 0 #000"
                >
                  Experience Time System
                </Text>
              </Heading>
            </Box>
            <Text 
              fontSize="2xl" 
              maxW="container.md"
              bg="white"
              p={6}
              border="2px solid black"
              boxShadow="4px 4px 0 0 #000"
            >
              EXTSY (XTSY) is revolutionizing how we interact with time in the digital age. 
              A decentralized protocol that transforms time into a valuable digital asset.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button
                size="lg"
                bg="accent.pink"
                color="white"
                border="2px solid black"
                boxShadow="4px 4px 0 0 #000"
                _hover={{
                  transform: 'translate(-2px, -2px)',
                  boxShadow: '6px 6px 0 0 #000',
                }}
              >
                Buy XTSY
              </Button>
              <Button
                size="lg"
                bg="white"
                border="2px solid black"
                boxShadow="4px 4px 0 0 #000"
                _hover={{
                  transform: 'translate(-2px, -2px)',
                  boxShadow: '6px 6px 0 0 #000',
                }}
              >
                Learn More
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxW="container.xl" py={20}>
        <Box
          mb={16}
          p={8}
          bg="accent.blue"
          border="2px solid black"
          boxShadow="4px 4px 0 0 #000"
        >
          <Heading
            size="2xl"
            color="white"
            textAlign="center"
            textShadow="4px 4px 0 #000"
          >
            Core Features
          </Heading>
        </Box>
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
          gap={8}
        >
          <FeatureCard
            icon={FaClock}
            title="Time as Value"
            description="Convert your time into digital assets through our innovative staking mechanism."
          />
          <FeatureCard
            icon={FaCoins}
            title="Time-Weighted Rewards"
            description="Earn rewards based on your time commitment and engagement with the ecosystem."
          />
          <FeatureCard
            icon={FaPaintBrush}
            title="Time NFTs"
            description="Mint unique Time NFTs representing significant moments and achievements."
          />
          <FeatureCard
            icon={FaUsers}
            title="Community Timebank"
            description="Participate in our decentralized timebank system for community services and skills exchange."
          />
          <FeatureCard
            icon={FaDatabase}
            title="Time Oracle"
            description="Advanced oracle system ensuring accurate time-value calculations and fair distributions."
          />
          <FeatureCard
            icon={FaBalanceScale}
            title="Time Governance"
            description="Shape the future of time-based assets through our DAO governance system."
          />
        </Grid>
      </Container>
    </Box>
  );
}

export default Home;
