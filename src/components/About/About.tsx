import { Flex, Text } from "@chakra-ui/react";
import React from "react";

function About(){

    return(
        <Flex direction="column" alignItems="center"  bg="#DBE5FC " 
        p="10"
        id="about_me"
        >
            <Text fontSize="4xl" fontWeight="black" color="#3f51b5" >About Me</Text>
            <Text fontSize="lg" w="60%" py="10" textAlign="center">Hey there! I'm absolutely hooked on coding and get a real kick out of crafting mind-blowing web applications. I've got a rock-solid grasp on both frontend and backend development, and I thrive on tackling projects that push my boundaries and keep me on my toes. Learning and evolving as a developer is what keeps me going, and I can't wait to see where my coding adventures take me next!</Text>
            <Text fontSize="lg" w="70%" textAlign="center">Besides being a coding whiz, I'm also a bit of a news junkie. You'll often find me devouring the latest business updates, staying in the know about what's happening in the world. But hey, life isn't all about work, right? When I'm not deep into coding or catching up on business news, you'll probably find me immersed in the virtual battlefields of Valorant 👾, taking on thrilling gaming adventures. And oh, music 🎶 is my ultimate companion! I find solace in the beats and melodies, which always keeps my creativity flowing. Oh, and did I mention that I'm into investment? Exploring opportunities and making smart financial decisions is something I truly enjoy. So, that's a little peek into my world beyond development—always seeking new experiences and enjoying the diverse facets of life!</Text>
        </Flex>
    )
}
export default About;