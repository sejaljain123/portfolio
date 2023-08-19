import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Navbar } from "../components/Navbar"
import { Box, ChakraProvider, Link } from "@chakra-ui/react"
import Hero from "../components/Hero/Hero"
import About from "../components/About/About"
import Tech from "../components/Tech/Tech"
import Contact from "../components/Contact/Contact"
import Projects from "../components/Projects/Projects"


export const Head: HeadFC = () => (<><title>Portfolio - Sejal Jain</title><link rel="icon" href="https://i.imgur.com/ZDYGR3R.jpg" /></>

)

const IndexPage: React.FC<PageProps> = () => {
  return (
    
    <ChakraProvider>
      <Navbar />
      <Hero />
      <About />
      <Tech />
      <Projects />

      <Contact />
     </ChakraProvider>
 
  )
}
export default IndexPage;

