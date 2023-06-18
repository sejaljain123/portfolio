/* eslint-disable react/jsx-no-bind */
import { Flex, Box } from '@chakra-ui/react';
import NavItems from './NavItems';
import { BookDemo } from './NavButtons';
import React from 'react';

function MobileNav({ isOpen, setIsOpen }: any) {
  return (
    <Flex
      w="100%"
      h="100%"
      bg="white"
      position="fixed"
      left={0}
      top={0}
      direction="column"
      display={{ base: 'flex', lg: 'none' }}
      zIndex={4}
    >
      <Flex direction="column" gap={8} p={10} fontSize="lg" pt={40}>
        <NavItems setIsOpen={setIsOpen} isOpen={isOpen} />
      </Flex>
    </Flex>
  );
}

export default MobileNav;
