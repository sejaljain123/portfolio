import React from "react";
import { Text, Flex, Box, Image } from "@chakra-ui/react";
import Skills from "./skills";

function Tech() {
    return (
        <Flex direction="column" 
        w="full"
        pos="relative"
        p="20"
        align={{ base: 'center', lg: 'center' }}
        >
            <Box position="absolute" top="0" left="0" w="full" bg="#BECDF0"  zIndex={-1} >
            <Image src = "https://i.imgur.com/0edYhZw.png"  alt="hero" />
            </Box>
            <Text fontSize="5xl" fontWeight="black" color="#3f4658" py="10" zIndex={1} >Tech Toolbox: My Expertise and Skills</Text>

            <Flex direction="row" flexWrap="wrap" justifyContent="center" gap="8" zIndex={1} w="80%">
                {
                    Skills.map((skill, index) => (
                        <Flex direction="column" alignItems="center" justifyContent="center"  key={index}>
                             {skill.icon && <skill.icon size="4rem" color={skill.color} title={skill.name} />}
                        </Flex>
                    ))
                }
            </Flex>

        </Flex>
    );
}

export default Tech;