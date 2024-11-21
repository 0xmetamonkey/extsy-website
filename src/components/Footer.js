import React from 'react';
import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  SimpleGrid,
  Button,
  Icon,
} from '@chakra-ui/react';
import { FaGithub, FaFigma, FaDiscord, FaTwitter } from 'react-icons/fa';

const SocialButton = ({ icon, label, href }) => {
  return (
    <Button
      variant="ghost"
      leftIcon={<Icon as={icon} />}
      onClick={() => window.open(href, '_blank')}
      border="2px solid #000"
      _hover={{
        transform: 'translate(-2px, -2px)',
        boxShadow: '4px 4px 0 0 #000',
      }}
    >
      {label}
    </Button>
  );
};

function Footer() {
  return (
    <Box
      bg="white"
      borderTop="4px solid #000"
      color="black"
    >
      <Container maxW="container.xl" py={10}>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8}>
          <Stack spacing={6}>
            <Text fontSize="lg" fontWeight="bold">
              EXTSY
            </Text>
            <Text>
              Experience Time System - Transforming time into valuable digital assets.
            </Text>
          </Stack>

          <Stack spacing={6}>
            <Text fontSize="lg" fontWeight="bold">Resources</Text>
            <Link href="https://www.figma.com/file/xyz123/EXTSY-Design-System" isExternal
              _hover={{ textDecoration: 'none', color: 'accent.pink' }}>
              Design System
            </Link>
            <Link href="/whitepaper" _hover={{ textDecoration: 'none', color: 'accent.pink' }}>
              Whitepaper
            </Link>
            <Link href="/docs" _hover={{ textDecoration: 'none', color: 'accent.pink' }}>
              Documentation
            </Link>
          </Stack>

          <Stack spacing={6}>
            <Text fontSize="lg" fontWeight="bold">Community</Text>
            <Link href="/governance" _hover={{ textDecoration: 'none', color: 'accent.pink' }}>
              Governance
            </Link>
            <Link href="/forum" _hover={{ textDecoration: 'none', color: 'accent.pink' }}>
              Forum
            </Link>
            <Link href="/blog" _hover={{ textDecoration: 'none', color: 'accent.pink' }}>
              Blog
            </Link>
          </Stack>

          <Stack spacing={6}>
            <Text fontSize="lg" fontWeight="bold">Connect</Text>
            <Stack direction="row" spacing={4} flexWrap="wrap">
              <SocialButton
                label="Design System"
                href="https://www.figma.com/file/xyz123/EXTSY-Design-System"
                icon={FaFigma}
              />
              <SocialButton
                label="GitHub"
                href="https://github.com/extsy"
                icon={FaGithub}
              />
              <SocialButton
                label="Discord"
                href="https://discord.gg/extsy"
                icon={FaDiscord}
              />
              <SocialButton
                label="Twitter"
                href="https://twitter.com/extsy"
                icon={FaTwitter}
              />
            </Stack>
          </Stack>
        </SimpleGrid>

        <Box
          borderTop="2px solid #000"
          mt={10}
          pt={10}
          fontSize="sm"
        >
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify="space-between"
            align="center"
          >
            <Text>© 2024 EXTSY. All rights reserved</Text>
            <Stack direction="row" spacing={6}>
              <Link href="/privacy" _hover={{ textDecoration: 'none', color: 'accent.pink' }}>
                Privacy Policy
              </Link>
              <Link href="/terms" _hover={{ textDecoration: 'none', color: 'accent.pink' }}>
                Terms of Service
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
