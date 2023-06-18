/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react/jsx-no-bind */
import { Text } from '@chakra-ui/react';
import { useState } from 'react';
import { NAVBAR_HEIGHT, NAVBAR_HEIGHT_MOBILE } from '../../constants';
import React from 'react';

const NavbarLinks = [
  {
    name: 'Home',
    value: 'home',
  },
  {
    name: 'About Me',
    value: 'about_me',
  },
  {
    name: 'Projects',
    value: 'projects',
  },
  {
    name: 'Contact ',
    value: 'contact_me',
  },
];

function NavItems({ isOpen, setIsOpen }: any) {
  const [active, setActive] = useState('Home');
  const handleScroll = (value: string) => {
    isOpen ? setIsOpen(false) : null;
    setActive(value);
    const element = document.getElementById(value);
    if (element) {
      let headerOffset = NAVBAR_HEIGHT;
      if (window.innerWidth <= 768) {
        headerOffset = NAVBAR_HEIGHT_MOBILE;
      }
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };
  return (
    <>
      {NavbarLinks.map((link: any) => (
        <Text
          key={link.name}
          fontSize="md"
          fontWeight='medium'
          color={active === link.value ? '#3f51b5' : 'gray'}
          cursor="pointer"
          _hover={{ color: '#3f51b5' }}
          onClick={() => handleScroll(link.value)}
          borderBottom={active === link.value ? '2px solid #3f51b5' : 'none'}
        >
          {link.name}
        </Text>
      ))}
    </>
  );
}

export default NavItems;
