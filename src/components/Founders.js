import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, VStack, Image, HStack, Link, Icon } from '@chakra-ui/react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const FounderCard = ({ name, role, bio, image, linkedin, twitter, github }) => (
  <VStack
    p={6}
    bg="white"
    borderRadius="xl"
    boxShadow="lg"
    spacing={4}
    align="center"
    _hover={{ transform: 'translateY(-5px)', transition: 'all 0.2s' }}
  >
    <Box
      boxSize="200px"
      borderRadius="full"
      overflow="hidden"
      border="4px solid"
      borderColor="blue.500"
    >
      <Image
        src={image || 'https://via.placeholder.com/200'}
        alt={name}
        w="100%"
        h="100%"
        objectFit="cover"
      />
    </Box>
    <Heading size="md">{name}</Heading>
    <Text color="blue.600" fontWeight="bold">{role}</Text>
    <Text textAlign="center" color="gray.600">
      {bio}
    </Text>
    <HStack spacing={4}>
      {linkedin && (
        <Link href={linkedin} isExternal>
          <Icon as={FaLinkedin} w={6} h={6} color="blue.500" />
        </Link>
      )}
      {twitter && (
        <Link href={twitter} isExternal>
          <Icon as={FaTwitter} w={6} h={6} color="blue.400" />
        </Link>
      )}
      {github && (
        <Link href={github} isExternal>
          <Icon as={FaGithub} w={6} h={6} color="gray.700" />
        </Link>
      )}
    </HStack>
  </VStack>
);

const Founders = () => {
  const founders = [
    {
      name: "John Smith",
      role: "CEO & Blockchain Architect",
      bio: "10+ years of experience in blockchain development and cryptocurrency. Previously led major DeFi projects.",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com"
    },
    {
      name: "Sarah Johnson",
      role: "CTO & Smart Contract Developer",
      bio: "Expert in smart contract development and security. Background in cryptography and distributed systems.",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com"
    },
    {
      name: "Michael Chen",
      role: "CMO & Community Lead",
      bio: "Experienced in crypto marketing and community building. Built several successful crypto communities.",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com"
    }
  ];

  return (
    <Box bg="gray.50" py={20}>
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <Box textAlign="center">
            <Heading mb={4}>Meet Our Team</Heading>
            <Text fontSize="xl" color="gray.600">
              Led by industry experts with a passion for blockchain innovation
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            {founders.map((founder, index) => (
              <FounderCard key={index} {...founder} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Founders;
