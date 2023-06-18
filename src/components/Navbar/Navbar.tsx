import { Flex, Text, Box } from '@chakra-ui/react';
import { useState } from 'react';
import { RiMenu4Fill } from 'react-icons/ri';
import { MdClose } from 'react-icons/md';
import { NAVBAR_HEIGHT, NAVBAR_HEIGHT_MOBILE } from '../../constants';
import MobileNav from './MobileNav';
import NavItems from './NavItems';
import { BookDemo } from './NavButtons';
import React from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Flex
        alignItems="center"
        gap={2}
        top={0}
        shadow="sm"
        zIndex={10}
        w="100%"
        justify={{base: 'end', lg: 'center'}}
        height={{ base: `${NAVBAR_HEIGHT_MOBILE}px`, lg: `${NAVBAR_HEIGHT}px` }}
        py={7}
        px={{ base: '10', lg: '5', xl: '20' }}
        bg="#ecf1fd"
        position="fixed"
        id="navbar"
      >
        <Flex
          alignItems="center"
          gap={{ md: '4', xl: '10' }}
          display={{ base: 'none', lg: 'flex' }}
        >
          <NavItems />
        </Flex>
        <Flex gap="5" alignItems="end" justify="flex-end">
          <Flex display={{ base: 'flex', lg: 'none' }} justify="flex-end">
            {isOpen ? (
              <MdClose size={30} onClick={() => setIsOpen(false)} />
            ) : (
              <RiMenu4Fill size={30} onClick={() => setIsOpen(true)} />
            )}
          </Flex>
        </Flex>
      </Flex>

      {isOpen && <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
}

export default Navbar;
