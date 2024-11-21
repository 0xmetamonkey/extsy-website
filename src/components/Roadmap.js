import React from 'react';
import { Box, Container, Heading, Text, VStack, HStack, Circle } from '@chakra-ui/react';

const RoadmapItem = ({ phase, title, items, isCompleted }) => (
  <HStack align="stretch" spacing={4}>
    <VStack>
      <Circle size="40px" bg={isCompleted ? "green.500" : "gray.200"} color="white">
        {phase}
      </Circle>
      {items.length > 1 && (
        <Box w="2px" flex={1} bg="gray.200" my={2} />
      )}
    </VStack>
    <Box flex={1} pb={8}>
      <Heading size="md" mb={2}>{title}</Heading>
      <VStack align="stretch" spacing={2}>
        {items.map((item, index) => (
          <HStack key={index} spacing={2}>
            <Circle size="8px" bg="blue.500" />
            <Text>{item}</Text>
          </HStack>
        ))}
      </VStack>
    </Box>
  </HStack>
);

const Roadmap = () => {
  const roadmapData = [
    {
      phase: "Q4",
      title: "Phase 1: Launch",
      items: [
        "Token Development",
        "Website Launch",
        "Community Building",
        "Initial Marketing Campaign"
      ],
      isCompleted: true
    },
    {
      phase: "Q1",
      title: "Phase 2: Growth",
      items: [
        "Exchange Listings",
        "Partnership Development",
        "Community Expansion",
        "Feature Development"
      ],
      isCompleted: false
    },
    {
      phase: "Q2",
      title: "Phase 3: Expansion",
      items: [
        "Major Exchange Listings",
        "Platform Integration",
        "Global Marketing Campaign",
        "New Feature Rollout"
      ],
      isCompleted: false
    }
  ];

  return (
    <Container maxW="container.xl" py={20}>
      <VStack spacing={10} align="stretch">
        <Box textAlign="center">
          <Heading mb={4}>Roadmap</Heading>
          <Text fontSize="xl">Our journey to revolutionize the future</Text>
        </Box>

        <VStack spacing={8} align="stretch">
          {roadmapData.map((item, index) => (
            <RoadmapItem key={index} {...item} />
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Roadmap;
