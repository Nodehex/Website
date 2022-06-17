import { Box, Container, Grid, Typography } from "@mui/material";
import { Translate } from "react-i18nify";
import { Dash } from "../../components/Branding";
import { Content, DashTitle, ThemedBox } from "../../components/Util";
import { fonts } from '../../components/Util'
import { Section } from "./Landing";

const About = () => {
  return (
    <Section variant="dark">
      <Container>
        <Grid container>
          <Grid item md={7}>
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