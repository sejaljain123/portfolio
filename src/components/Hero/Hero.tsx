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
            p={{base:'8', lg:'36'}}
            justifyContent="center"
            alignItems="center"
            color="#3f4658"
            direction={{ base: 'column-reverse', lg: 'row' }}
            id="home"
            gap={{ base: '8', lg: '20' }}
        >
            <Flex w="1/2" direction="column" fontWeight="bold" textAlign={{base:"center", lg:"left"}} >
                <Text fontSize="3xl">
                    - Hello 👋🏻
                </Text>
                <Text fontSize={{base:"4xl", lg:"6xl"}}>
                    I'm <span style={{color: "#3f51b5", marginRight:"16px"}}>Sejal</span>
                    Jain
                </Text>
                <Text mt="4">  Student at IIITM Gwalior | Full-Stack Web Developer based in India</Text>
                <a href="https://drive.google.com/file/d/1I904l4oqRetgaP4CLLwQ2iysvpZSYf-A/view?usp=sharing" target='_blank'>
                <Button mt="10" alignSelf="left" w="48" bg="#3f51b5" color="white" variant="solid" _hover={{bg: "#3148C9"}}> Resume</Button>
                </a>
            </Flex>
            <Flex w={{lg:"1/2"}} alignItems={{lg:"center"}} >
                <Image src = "https://i.imgur.com/ZDYGR3R.jpg" alt="hero" objectFit="cover" borderRadius="full" w="64" height="64" shadow="xl" />
            </Flex>
        </Flex>
    )
}

export default Hero