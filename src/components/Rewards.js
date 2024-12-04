import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Button,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  useToast,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
} from '@chakra-ui/react';
import { useWeb3Context } from '../contexts/Web3Context';
import { ethers } from 'ethers';
import { TOKEN_ABI, TOKEN_ADDRESSES } from '../config/blockchain';

function Rewards() {
  const { account, chainId, isActive } = useWeb3Context();
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [volunteerHours, setVolunteerHours] = useState('');
  const [activity, setActivity] = useState('');
  const [aidDescription, setAidDescription] = useState('');
  const [aidAmount, setAidAmount] = useState('');

  // Stats
  const [volunteerPoints, setVolunteerPoints] = useState(0);
  const [aidPoolBalance, setAidPoolBalance] = useState(0);

  const getContract = () => {
    if (!window.ethereum) throw new Error('No Web3 Provider');
    const provider = new ethers.BrowserProvider(window.ethereum);
    const address = TOKEN_ADDRESSES[chainId];
    if (!address) throw new Error('Contract not deployed on this network');
    return new ethers.Contract(address, TOKEN_ABI, provider.getSigner());
  };

  const loadStats = async () => {
    try {
      const contract = getContract();
      const points = await contract.volunteerPoints(account);
      const pool = await contract.communityAidPool();
      setVolunteerPoints(points.toString());
      setAidPoolBalance(ethers.formatEther(pool));
    } catch (err) {
      console.error('Error loading stats:', err);
    }
  };

  const logVolunteerTime = async (e) => {
    e.preventDefault();
    if (!isActive) {
      toast({
        title: 'Connect Wallet',
        description: 'Please connect your wallet first',
        status: 'warning',
      });
      return;
    }

    try {
      setLoading(true);
      const contract = getContract();
      const tx = await contract.logVolunteerTime(
        parseInt(volunteerHours),
        activity
      );
      await tx.wait();
      
      toast({
        title: 'Success',
        description: 'Volunteer time logged successfully',
        status: 'success',
      });
      
      setVolunteerHours('');
      setActivity('');
      loadStats();
    } catch (err) {
      toast({
        title: 'Error',
        description: err.message,
        status: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const createAidRequest = async (e) => {
    e.preventDefault();
    if (!isActive) {
      toast({
        title: 'Connect Wallet',
        description: 'Please connect your wallet first',
        status: 'warning',
      });
      return;
    }

    try {
      setLoading(true);
      const contract = getContract();
      const amount = ethers.parseEther(aidAmount);
      const tx = await contract.createAidRequest(aidDescription, amount);
      await tx.wait();
      
      toast({
        title: 'Success',
        description: 'Aid request created successfully',
        status: 'success',
      });
      
      setAidDescription('');
      setAidAmount('');
      loadStats();
    } catch (err) {
      toast({
        title: 'Error',
        description: err.message,
        status: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxW="container.xl" py={20}>
      <VStack spacing={10} align="stretch">
        <Box textAlign="center">
          <Heading mb={4}>EXTSY Rewards</Heading>
          <Text fontSize="xl">Earn rewards through volunteering and community support</Text>
        </Box>

        {/* Stats */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          <Stat
            p={6}
            bg="white"
            border="2px solid black"
            boxShadow="4px 4px 0 0 #000"
          >
            <StatLabel>Your Volunteer Points</StatLabel>
            <StatNumber>{volunteerPoints}</StatNumber>
            <StatHelpText>Earned through verified volunteer work</StatHelpText>
          </Stat>
          <Stat
            p={6}
            bg="white"
            border="2px solid black"
            boxShadow="4px 4px 0 0 #000"
          >
            <StatLabel>Community Aid Pool</StatLabel>
            <StatNumber>{aidPoolBalance} XTSY</StatNumber>
            <StatHelpText>Available for community support</StatHelpText>
          </Stat>
        </SimpleGrid>

        {/* Log Volunteer Time */}
        <Box
          as="form"
          onSubmit={logVolunteerTime}
          p={8}
          bg="white"
          border="2px solid black"
          boxShadow="4px 4px 0 0 #000"
        >
          <Heading size="md" mb={6}>Log Volunteer Time</Heading>
          <VStack spacing={4}>
            <FormControl>
              <FormLabel>Hours</FormLabel>
              <Input
                type="number"
                value={volunteerHours}
                onChange={(e) => setVolunteerHours(e.target.value)}
                placeholder="Enter hours"
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel>Activity</FormLabel>
              <Textarea
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
                placeholder="Describe your volunteer activity"
                required
              />
            </FormControl>
            <Button
              type="submit"
              isLoading={loading}
              bg="accent.pink"
              color="white"
              w="full"
            >
              Log Time
            </Button>
          </VStack>
        </Box>

        {/* Create Aid Request */}
        <Box
          as="form"
          onSubmit={createAidRequest}
          p={8}
          bg="white"
          border="2px solid black"
          boxShadow="4px 4px 0 0 #000"
        >
          <Heading size="md" mb={6}>Create Aid Request</Heading>
          <VStack spacing={4}>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Textarea
                value={aidDescription}
                onChange={(e) => setAidDescription(e.target.value)}
                placeholder="Describe why you need support"
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel>Amount (XTSY)</FormLabel>
              <Input
                type="number"
                step="0.000000000000000001"
                value={aidAmount}
                onChange={(e) => setAidAmount(e.target.value)}
                placeholder="Enter amount in XTSY"
                required
              />
            </FormControl>
            <Button
              type="submit"
              isLoading={loading}
              bg="accent.green"
              color="white"
              w="full"
            >
              Submit Request
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
}

export default Rewards;
