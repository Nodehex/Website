import { Box, Container, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { TriangleLeft } from "../../components/Dashes";
import { Column, Content, DashTitle, Row, ThemedBox } from "../../components/Util";
import Contact from "./Contact";
import { Section } from "./Landing";

const Why = () => {
  const { t, i18n } = useTranslation();
  return (
    <Section variant="light">
      <TriangleLeft top="-5%" />
      <Container>
        <Grid container>
          <Grid item md={2} p={5}></Grid>
          <Grid item md={5} p={5}>
            <DashTitle text={t("why.title")} align="left" />
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