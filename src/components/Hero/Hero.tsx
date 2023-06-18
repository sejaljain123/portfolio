import { Box, Flex, Text, Image, Button } from '@chakra-ui/react';
import React from 'react';
import { NAVBAR_HEIGHT, NAVBAR_HEIGHT_MOBILE } from '../../constants';
import axios from 'axios';

function Hero() {
     
    return (
        <Flex 
            mt={{ base: `${NAVBAR_HEIGHT_MOBILE}px`, lg: `${NAVBAR_HEIGHT}px` }}
            bg="#ecf1fd " 
            w="100%"
            p={10} 
            justifyContent="center"
            alignItems="center"
            color="#3f4658"
            direction={{ base: 'column-reverse', lg: 'row' }}
            id="home"
            gap={20}
        >
            <Flex w="1/2" direction="column" fontWeight="bold" textAlign="left" >
                <Text fontSize="3xl">
                    - Hello 👋🏻
                </Text>
                <Text fontSize="6xl">
                    I'm <span style={{color: "#3f51b5", marginRight:"16px"}}>Sejal</span>
                    Jain
                </Text>
                <Text> Student at IIITM Gwalior | Full-Stack Web Developer based in India</Text>
                <a href="https://drive.google.com/file/d/1I904l4oqRetgaP4CLLwQ2iysvpZSYf-A/view?usp=sharing" target='_blank'>
                <Button mt="10" alignSelf="left" w="56" bg="#3f51b5" color="white" variant="solid" _hover={{bg: "#3148C9"}}> Download Resume</Button>
                </a>
            </Flex>
            <Flex w="1/2" alignItems="center" >
                <Image   
                w="auto"
                src="/images/profile.png" alt="image"/>
            </Flex>
        </Flex>
    )
}

export default Hero