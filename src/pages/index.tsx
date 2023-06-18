import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Navbar } from "../components/Navbar"
import { Box, ChakraProvider } from "@chakra-ui/react"
import Hero from "../components/Hero/Hero"
import About from "../components/About/About"
import Tech from "../components/Tech/Tech"
import Contact from "../components/Contact/Contact"


const IndexPage: React.FC<PageProps> = () => {
  return (
    <ChakraProvider>
      <Navbar />
      <Hero />
      <About />
      <Tech />
      <Contact />
     </ChakraProvider>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Portfolio</title>
