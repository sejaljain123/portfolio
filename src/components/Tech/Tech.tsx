import React from "react";
import { Text, Flex, Box } from "@chakra-ui/react";
import Skills from "./skills";

function Tech() {
    return (
        <Flex direction="column"  bg="#BECDF0 " 
        w="full"
        pos="relative"
        p="20"
        align={{ base: 'center', lg: 'center' }}
        >
            <Box
            bgImage="url('/images/tech-bg.png')"
             bgPosition="center"
                    bgRepeat="no-repeat"
                    bgSize="cover"
                    w="full"
                    h="full"
                    pos="absolute"
                    left={0}
                    top={0}
                />
            <Text fontSize="5xl" fontWeight="black" color="#3f4658" py="10" zIndex={1} >Tech Toolbox: My Expertise and Skills</Text>

            <Flex direction="row" flexWrap="wrap" justifyContent="center" gap="8" zIndex={1} w="60%">
                {
                    Skills.map((skill, index) => (
                        <Flex direction="column" alignItems="center" justifyContent="center"  key={index}>
                             {skill.icon && <skill.icon size="5rem" color={skill.color} title={skill.name} />}
                        </Flex>
                    ))
                }
            </Flex>

        </Flex>
    );
}

export default Tech;