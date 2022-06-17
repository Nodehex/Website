import { Box, Container, Grid, Typography } from "@mui/material";
import { Translate } from "react-i18nify";
import { Column, Content, DashTitle, Row, ThemedBox } from "../../components/Util";
import Contact from "./Contact";
import { Section } from "./Landing";

const Why = () => {
  return (
    <Section variant="light">
      <Container>
        <Grid container>
          <Grid item md={6} p={5}>
            <DashTitle stringKey="why.title" align="left" />
            <Content translateKey="why.p1" mt={1} />
            <Content translateKey="why.p2" mt={1} />
          </Grid>
          <Grid item md={6} p={5}>
            <Contact />
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export default Why