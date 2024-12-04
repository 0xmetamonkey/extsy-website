import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Logo = ({ size = "24px", ...props }) => {
  return (
    <Box 
      display="flex" 
      alignItems="center" 
      gap="2"
      {...props}
    >
      <Box
        width={size}
        height={size}
        borderRadius="sm"
        bg="accent.pink"
        border="2px solid black"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontWeight="black"
        fontSize={`calc(${size} * 0.6)`}
        color="white"
        transform="rotate(-10deg)"
        boxShadow="2px 2px 0 0 #000"
        _hover={{
          transform: "rotate(-10deg) translate(-1px, -1px)",
          boxShadow: "3px 3px 0 0 #000",
        }}
        transition="all 0.2s"
      >
        X
      </Box>
      <Text
        fontSize={`calc(${size} * 1.2)`}
        fontWeight="black"
        letterSpacing="-0.02em"
        color="accent.pink"
      >
        EXTSY
      </Text>
    </Box>
  );
};

export default Logo;
