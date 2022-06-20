import { Box, Container, Grid, Typography } from "@mui/material";
import { Translate } from "react-i18nify";
import { TriangleLeft } from "../../components/Dashes";
import { Column, Content, DashTitle, Row, ThemedBox } from "../../components/Util";
import Contact from "./Contact";
import { Section } from "./Landing";

const Why = () => {
  return (
    <Section variant="light">
      <TriangleLeft />
      <Container>
        <Grid container>
          <Grid item md={2} p={5}></Grid>
          <Grid item md={5} p={5}>
            <DashTitle stringKey="why.title" align="left" />
            <Content translateKey="why.p1" mt={1} />
            <Content translateKey="why.p2" mt={1} />
          </Grid>
          <Grid item md={5} p={5}>
            <Contact />
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export default Why