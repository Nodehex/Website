import { Box, Container, Grid, Typography } from "@mui/material";
import { Translate } from "react-i18nify";
import { Dash } from "../../components/Branding";
import { GrayDash, InvertedTriangle, YellowDash } from "../../components/Dashes";
import { Content, DashTitle, ThemedBox } from "../../components/Util";
import { fonts } from '../../components/Util'
import { Section } from "./Landing";

const About = () => {
  const backgroundOverride: React.CSSProperties = {
    position: 'absolute',
    height: '100vh',
    width: '100%',
    zIndex: 1,
    overflow: 'visible',
    backgroundImage: "url(/assets/datacenter.jpg)",
    backgroundSize: "contain",
    backgroundPosition: "128% 80%",
    backgroundRepeat: "no-repeat"
  };
  return (
    <Section variant="dark" backgroundOverride={backgroundOverride}>
      <InvertedTriangle />
      <YellowDash transform={[0,-50]}/>
      <Container>
        <Grid container>
          <Grid item md={7} p={5}>
            <DashTitle stringKey="about.title" align="left" />
            <Content mt={2} translateKey="about.p1" />
            <Content mt={2} translateKey="about.p2" />
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export default About