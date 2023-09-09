import { Box, Button, Card, CardContent, Container, Typography, useTheme } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Dash } from "../../components/Branding";
import { GrayDash, YellowDash } from "../../components/Dashes";
import { Column, Row, ThemedBox, fonts, ColorSecondary, Content, DashTitle, Link } from "../../components/Util";
import { Section } from "./Landing";

interface CardProps {
  background: string;
};

const ServiceCard = styled.div<CardProps>`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 0.5vw;
  color: ${ props => props.color || 'white' };
  border: solid 1px;
  margin: 0 vw;
  border-color: ${ props => props.color || 'white' };
  background-color: ${ props => props.background || 'black' };
  -webkit-box-shadow: 10px 10px 5px 0px rgb(0 0 0 / 20%);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 10px 10px 5px 0px rgb(0 0 0 / 20%);
`;

const ServiceBox = ({ img, title, content, url }: { img: string, title: string, content: string, url: string }) => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  return (
    <ServiceCard color={ theme.palette.secondary.main } background={ theme.palette.primary.dark } >
      <Box m={3} style={{ height: '100%' }} >
        <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
          <img src={ img } style={{ width: '25%' }} />
          <Box mt={2}>
            <ColorSecondary>
              <Typography variant="h6" align="center" fontFamily={ fonts.secondary }>
                { t("title") }
              </Typography>
            </ColorSecondary>
            </Box>
          <Content translateKey={ content } color="white" mt={2} />
          <Link to={ url }>
            <Button variant="contained" style={{ alignSelf: 'flex-end' }} color="secondary">
              { t("readMore") }
            </Button>
          </Link>
        </Box>
      </Box>
    </ServiceCard>
  );
};

const Services = () => {
  const { t, i18n } = useTranslation();
  return (
    <Section variant="light">
      <Box mt={3} id="services">
        <DashTitle text={t("services.title")}/>
      </Box>
      <Box p={3}>
        <Row style={{ width: '100%', alignItems: 'stretch', flexWrap: 'wrap' }}>
          <ServiceBox img="assets/icons/IM icon 1.svg" title="services.title_infomgmt" content="services.content_infomgmt" url="services/information-mgmt" />
          <ServiceBox img="assets/icons/O&M icon 1.svg" title="services.title_om" content="services.content_om" url="services/om-manuals" />
          <ServiceBox img="assets/icons/R&A icon 1.svg" title="services.title_reporting" content="services.content_reporting" url="services/reporting" />
        </Row>
      </Box>
      <GrayDash  transform={[0,0]} top={ "50%" } />
      <YellowDash  transform={[0,0]} top={ "50%" } />
    </Section>
  );
};

export default Services