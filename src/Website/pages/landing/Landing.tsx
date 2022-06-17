import { Container, PaletteColor } from "@mui/material"
import { ThemedBox } from "../../components/Util"
import Page from "../Page"
import About from "./About"
import Contact from "./Contact"
import Hero from "./Hero"
import Services from "./Services"
import Why from "./Why"

export const Section = ({ children, variant }: { children: React.ReactNode, variant: keyof PaletteColor }) => {
  const style: React.CSSProperties = {
    height: '80vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  };
  return (
    <ThemedBox variant={ variant } style={ style }>
      { children }
    </ThemedBox>
  );
};

const Landing = () => {
  return (
    <Page>
        <Hero />
        <Services />
        <About />
        <Why />
    </Page>
  )
}

export default Landing