import { Box, Container, PaletteColor } from "@mui/material"
import { isBrowser } from "react-device-detect"
import { ThemedBox } from "../../components/Util"
import Page from "../Page"
import About from "./About"
import Contact from "./Contact"
import Hero from "./Hero"
import Services from "./Services"
import Why from "./Why"

export const Section = ({ children, variant, backgroundOverride }: { children: React.ReactNode, variant: keyof PaletteColor, backgroundOverride?: React.CSSProperties }) => {
  const style: React.CSSProperties = {
    minHeight: '100vh',
    width: '100%',
    position: 'relative',
    backgroundColor: 'rgba(0,0,0,0)',
    // zIndex: 0,
  };
  let backgroundStyle: React.CSSProperties = {
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: 1,
    overflow: 'visible',
  };
  if (backgroundOverride && isBrowser) {
    backgroundStyle = backgroundOverride;
  }
  const contentStyle: React.CSSProperties = {
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    backgroundColor: 'rgba(0,0,0,0)',
    zIndex: 2,
  };
  return (
    <Box style={ style }>
      <ThemedBox variant={ variant } style={ backgroundStyle }></ThemedBox>
      <Box style={ contentStyle }>
        { children }
      </Box>
    </Box>
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