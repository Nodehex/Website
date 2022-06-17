import { Container } from "@mui/material"
import Page from "../Page"
import About from "./About"
import Contact from "./Contact"
import Hero from "./Hero"
import Services from "./Services"
import Why from "./Why"

const Landing = () => {
  return (
    <Page>
        <Hero />
        <Services />
        <About />
        <Why />
        <Contact />
    </Page>
  )
}

export default Landing