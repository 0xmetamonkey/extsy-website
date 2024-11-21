import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Stack,
  Grid,
} from '@chakra-ui/react';

const FeatureCard = ({ title, description }) => (
  <Box
    variant="neo-brutal"
    transition="all 0.3s ease"
    _hover={{
      transform: 'translate(-4px, -4px)',
      boxShadow: '8px 8px 0 0 #000',
    }}
  >
    <Heading size="md" mb={4}>
      {title}
    </Heading>
    <Text>{description}</Text>
  </Box>
);

function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        bg="accent.yellow"
        py={20}
        border="4px solid #000"
        borderTop="none"
      >
        <Container maxW="container.xl">
          <Stack spacing={8} alignItems="flex-start">
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
            <Text fontSize="2xl" maxW="container.md">
              EXTSY (XTSY) is revolutionizing how we interact with time in the digital age. 
              A decentralized protocol that transforms time into a valuable digital asset.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button size="lg" variant="solid">
                Buy XTSY
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxW="container.xl" py={20}>
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
          gap={8}
        >
          <FeatureCard
            title="Time as Value"
            description="Convert your time into digital assets through our innovative staking mechanism."
          />
          <FeatureCard
            title="Time-Weighted Rewards"
            description="Earn rewards based on your time commitment and engagement with the ecosystem."
          />
          <FeatureCard
            title="Time NFTs"
            description="Mint unique Time NFTs representing significant moments and achievements."
          />
          <FeatureCard
            title="Community Timebank"
            description="Participate in our decentralized timebank system for community services and skills exchange."
          />
          <FeatureCard
            title="Time Oracle"
            description="Advanced oracle system ensuring accurate time-value calculations and fair distributions."
          />
          <FeatureCard
            title="Time Governance"
            description="Shape the future of time-based assets through our DAO governance system."
          />
        </Grid>
      </Container>

      {/* About Section */}
      <Box
        bg="accent.blue"
        py={20}
        border="4px solid #000"
      >
        <Container maxW="container.xl">
          <Stack spacing={8}>
            <Heading
              size="2xl"
              textShadow="4px 4px 0 #000"
            >
              Why EXTSY?
            </Heading>
            <Text fontSize="xl" maxW="container.md">
              EXTSY represents a paradigm shift in how we value and trade time. Our protocol allows users to tokenize their time commitments, 
              creating a new asset class that bridges the gap between time and value in the digital economy.
            </Text>
            <Text fontSize="xl" maxW="container.md">
              With XTSY tokens, you can stake your time, earn rewards for your commitments, and participate in a revolutionary 
              ecosystem that recognizes time as the most valuable resource.
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        bg="accent.pink"
        py={20}
        border="4px solid #000"
      >
        <Container maxW="container.xl">
          <Stack spacing={8} alignItems="center" textAlign="center">
            <Heading
              size="2xl"
              color="white"
              textShadow="4px 4px 0 #000"
            >
              Time is Value. Value is Time.
            </Heading>
            <Text fontSize="xl" maxW="container.md" color="white">
              Join the time revolution with EXTSY. Start converting your time into valuable digital assets today.
            </Text>
            <Button
              size="lg"
              variant="solid"
              bg="accent.yellow"
              color="black"
              _hover={{
                transform: 'translate(-4px, -4px)',
                boxShadow: '8px 8px 0 0 #000',
              }}
            >
              Join EXTSY
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
