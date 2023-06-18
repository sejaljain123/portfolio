/* eslint-disable react/jsx-no-bind */
import { Box, Button } from '@chakra-ui/react';
import React from 'react';

export function BookDemo() {
  function openNewLink() {
    window.open('https://calendly.com/apurv-unscript/30min', '_blank');
  }
  const shadowStyle = {
    boxShadow: '0px 0px 15px rgba(255, 0, 0, 0.5)',
  };
  return (
    <Box>
      <Button
        variant="solid"
        bg="red"
        color="white"
        px={10}
        py={6}
        fontSize="sm"
        onClick={() => openNewLink()}
        borderRadius="full"
        shadow="2xl"
        _hover={{ opacity: 0.85 }}
        sx={shadowStyle}
      >
        Book a demo
      </Button>
    </Box>
  );
}

export function TryProduct() {
  return (
    <Box>
      <Button
        variant="outline"
        colorScheme="black"
        px={8}
        py={6}
        fontSize="sm"
        borderRadius="full"
        _hover={{ bg: 'black', color: 'white' }}
        alignSelf="center"
      >
        Try our product
      </Button>
    </Box>
  );
}
