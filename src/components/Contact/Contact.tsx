import { Box, Center, Link, Text, Flex} from "@chakra-ui/react";
import React from "react";
import { RiGithubFill, RiInstagramFill, RiLinkedinFill, RiMailAddFill, RiMailFill } from "react-icons/ri";

function Contact() {
    return (
        <Box id="contact_me" w="100%" bg="#3f51b5" p="4" color="white">
        <Center h="100%">
            <Box w="90%">
            <Text fontSize="5xl" fontWeight="bold" textAlign="center">
                Contact Me
            </Text>
            <Text fontSize="xl" textAlign="center">
                Feel free to reach out to me at{' '}
            </Text>
            <Flex justifyContent="center" alignItems="center" gap="2" mt="4" fontSize="3xl">
                <Link href="mailto:sejaljain2043@gmail.com" color="#3f51b5">
                    <RiMailFill color="white"/>
                </Link>
                <Link href="https://linkedin.com/in/sejaljain2043" target="_blank" color="#3f51b5">
                    <RiLinkedinFill color="white"/>
                </Link>
                <Link href="https://github.com/sejaljain123 " target="_blank" color="#3f51b5">
                    <RiGithubFill color="white"/>
                </Link>
                <Link href="https://www.instagram.com/_sejallll_.__" target="_blank" color="#3f51b5">
                    <RiInstagramFill color="white"/>
                </Link>
            </Flex>
            </Box>
        </Center>
        </Box>
                 
                
                
    )
}
            
export default Contact
        
