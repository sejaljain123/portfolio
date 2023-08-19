import { Flex, Text, Box, VStack, Image, Divider, Button, Link, Tag, TagLabel} from "@chakra-ui/react";
import React from "react";
import ProjectsData from "./projects";
import { SiGithub, SiGlobus } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";


function Projects() {
  return (
    <Flex direction="column" alignItems="center" justify="center"  bg="#ecf1fd " 
        p={{base:"4", lg:"10"}}
        id="learnings"
        zIndex={1}
        >
    <Flex w="80%" gap= "4" align="center" color="#3f51b5">
        <Text fontWeight="bold" fontSize="3xl" w={{base:"100%",xl:"30%"}} textAlign={{base:"center"}}>
          My Learnings
        </Text>
        <Divider borderWidth="thin" border="1px" display={{base:"none", lg:"block"}}/>
      </Flex>
      <Flex direction="column" gap="10" w="80%" justify="center" align="center" mt="10">
    {
        ProjectsData.map((project, index) => (
          <>
          <Flex w="100%" gap={{base:"10", xl:"20"}} p={{base:"0", lg:"10"}} justifyContent="space-between" align="center" key={project.id} direction={{ base: "column" , lg:`${index % 2 === 1 ? 'row-reverse' : 'row'}`}}>
           <Box w={{base:"80", md:"3xl", lg:"4xl"}} borderRadius="2xl" border="0px" shadow="2xl"  _hover={{boxShadow:"10px 10px 37px -3px rgba(63,81,181,1)"}} cursor="pointer">
            <Image
              src={project.image}
              alt={project.image}
              width="full"
              borderRadius="2xl"
              objectFit="cover"
              height="auto"

/>
            </Box>
          <VStack w="100%" align="center" textAlign="center">
            <Text fontWeight="bold" fontSize={{base:"2xl", lg:"4xl"}} >
              {project.title}
            </Text>
            <Text fontSize={{base:"sm", lg:"md"}} w={{base:"100%", lg:"50%"}}>
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
            <Flex direction={{base:"column", lg:"row"}} justifyContent="center" alignItems="center" gap="6" mt="8" zIndex={1} w="100%">
                {project.github && <Link href={project.github} target="_blank">
                  <Button alignSelf="left" w="56" bg="#3f51b5" color="white" variant="solid" _hover={{bg: "#3148C9", boxShadow:"lg"}} gap="2"> View Project <SiGithub color="white"/></Button></Link>}
                  {
                    project.demo && <Link href={project.demo} target="_blank">
                    <Button alignSelf="left" w="56" bg="#3f51b5" color="white" variant="solid" _hover={{bg: "#3148C9", boxShadow:"lg"}} gap="2"> Visit <FaExternalLinkAlt/></Button></Link>
                  }
            </Flex>
           
          </VStack>

        </Flex>
        {index === ProjectsData.length - 1 ? null : <Divider borderWidth="thin" border="1px" display={{base:"block", lg:"none"}} borderColor="#5B6FE0"/>}
        </>
        ))
    }
    
</Flex>
</Flex>
  );
}

export default Projects;