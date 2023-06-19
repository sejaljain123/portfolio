import { Flex, Text, Box, VStack, Image, Divider, Button, Link, Tag, TagLabel} from "@chakra-ui/react";
import React from "react";
import ProjectsData from "./projects";
import { StaticImage } from "gatsby-plugin-image";
import { SiGithub, SiGlobus } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";


function Projects() {
  return (
    <Flex direction="column" alignItems="center" justify="center"  bg="#ecf1fd " 
        p="10"
        id="learnings"
        zIndex={1}
        >
    <Flex w="80%" gap= "4" align="center" color="#3f51b5">
        <Text fontWeight="bold" fontSize="3xl" w="30%">
          My Learnings
        </Text>
        <Divider borderWidth="thin" border="1px" />
      </Flex>
      <Flex direction="column" gap="20" p="10" w="80%" justify="center" align="center">
    {
        ProjectsData.map((project, index) => (
          <Flex w="100%" gap="20" justify="space-between" align="center" key={project.id} direction={index % 2 === 1 ? 'row-reverse' : 'row'}>
          <Box width="100%" height={300} aspectRatio="square" borderRadius="2xl" boxShadow="md" _hover={{boxShadow:"10px 10px 37px -3px rgba(63,81,181,1)"}} cursor="pointer">
            <Image
              src={project.image}
              alt={project.image}
              objectFit="cover"
              height="full"
              width="full"
              borderRadius="2xl"
            />
          </Box>
          <VStack w="100%" align="center" textAlign="center">
            <Text fontWeight="bold" fontSize="4xl" >
              {project.title}
            </Text>
            <Text fontSize="md">
              {project.description}
            </Text>
            <Flex direction="row" flexWrap="wrap" justifyContent="center" gap="4" zIndex={1} w="100%" py="4">
                {
                    project.tech?.map((skill, index) => (
                        <Flex direction="column" alignItems="center" justifyContent="center"  key={index}>
                             {skill.icon && <skill.icon size="2rem" color={skill.color} title={skill.name} />}
                        </Flex>
                    ))
                }
            </Flex>
            {
              project.tag && <Tag size="md"       borderRadius='md'
              variant="solid"
              bg="#e0234e"
              > <TagLabel>{project.tag}</TagLabel> </Tag>
            }
            <Flex direction="row" justifyContent="center" alignItems="center" gap="4" zIndex={1} w="100%">
                {project.github && <Link href={project.github} target="_blank">
                  <Button mt="10" alignSelf="left" w="56" bg="#3f51b5" color="white" variant="solid" _hover={{bg: "#3148C9", boxShadow:"lg"}} gap="2"> View Project <SiGithub color="white"/></Button></Link>}
                  {
                    project.demo && <Link href={project.demo} target="_blank">
                    <Button mt="10" alignSelf="left" w="56" bg="#3f51b5" color="white" variant="solid" _hover={{bg: "#3148C9", boxShadow:"lg"}} gap="2"> Visit <FaExternalLinkAlt/></Button></Link>
                  }
            </Flex>
           
          </VStack>

        </Flex>
        ))
    }
    
</Flex>
</Flex>
  );
}

export default Projects;