import React from 'react';
import {
  Box,
  Flex,
  Button,
  Stack,
  IconButton,
  useDisclosure,
  Container,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import WalletConnect from './WalletConnect';
import Logo from './Logo';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Tokenomics', href: '/tokenomics' },
  { label: 'How to Buy', href: '/how-to-buy' },
  { label: 'Roadmap', href: '/roadmap' },
  { label: 'Rewards', href: '/rewards' },
];

const NavLink = ({ children, to }) => (
  <Button
    as={RouterLink}
    to={to}
    variant="ghost"
    p={2}
    fontSize="lg"
    fontWeight="bold"
    textTransform="uppercase"
    _hover={{
      textDecoration: 'none',
      transform: 'translate(-2px, -2px)',
      boxShadow: '4px 4px 0 0 #000',
    }}
  >
    {children}
  </Button>
);

function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      bg="white"
      borderBottom="4px solid #000"
      position="sticky"
      top="0"
      zIndex="1000"
    >
      <Container maxW="container.xl">
        <Flex
          minH={'60px'}
          py={{ base: 2 }}
          align={'center'}
          justify={'space-between'}
        >
          <Box
            as={RouterLink}
            to="/"
            _hover={{ textDecoration: 'none' }}
          >
            <Logo size="32px" />
          </Box>

          <Flex display={{ base: 'none', md: 'flex' }}>
            <Stack direction={'row'} spacing={4}>
              {NAV_ITEMS.map((navItem) => (
                <NavLink key={navItem.href} to={navItem.href}>
                  {navItem.label}
                </NavLink>
              ))}
              <WalletConnect />
            </Stack>
          </Flex>

          <IconButton
            display={{ base: 'flex', md: 'none' }}
            onClick={onToggle}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            variant="outline"
            aria-label="Toggle Navigation"
            border="2px solid #000"
            _hover={{
              transform: 'translate(-2px, -2px)',
              boxShadow: '4px 4px 0 0 #000',
            }}
          />
        </Flex>

        {/* Mobile menu */}
        {isOpen && (
          <Box
            display={{ base: 'block', md: 'none' }}
            bg="white"
            p={4}
            border="2px solid #000"
            borderTop="none"
            boxShadow="4px 4px 0 0 #000"
          >
            <Stack spacing={4}>
              {NAV_ITEMS.map((navItem) => (
                <NavLink key={navItem.href} to={navItem.href}>
                  {navItem.label}
                </NavLink>
              ))}
              <WalletConnect />
            </Stack>
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default Navbar;
