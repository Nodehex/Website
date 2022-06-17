import { Box, Button, Card, CardContent, Container, Typography, useTheme } from "@mui/material";
import React from "react";
import { Translate } from "react-i18nify";
import styled from "styled-components";
import { Dash } from "../../components/Branding";
import { Column, Row, ThemedBox, fonts, ColorSecondary, Content, DashTitle } from "../../components/Util";
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

const ServiceBox = ({ img, title, content }: { img: string, title: string, content: string }) => {
  const theme = useTheme();
  return (
    <ServiceCard color={ theme.palette.secondary.main } background={ theme.palette.primary.dark } >
      <Box m={3} style={{ height: '100%' }} >
        <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
          <img src={ img } style={{ width: '25%' }} />
          <Box mt={2}>
            <ColorSecondary>
              <Typography variant="h6" align="center" fontFamily={ fonts.secondary }>
                <Translate value={ title } />
              </Typography>
            </ColorSecondary>
            </Box>
          <Content translateKey={ content } color="white" mt={2} />
          <Button variant="contained" style={{ alignSelf: 'flex-end' }}>
            <Translate value="readMore" />
          </Button>
        </Box>
      </Box>
    </ServiceCard>
  );
};

const Services = () => (
  <Section variant="light">
    <DashTitle stringKey="services.title" />
    <Box p={3}>
      <Row style={{ width: '100%', alignItems: 'stretch' }}>
        <ServiceBox img="assets/icons/IM icon 1.svg" title="services.title_infomgmt" content="services.content_infomgmt"/>
        <ServiceBox img="assets/icons/O&M icon 1.svg" title="services.title_om" content="services.content_om"/>
        <ServiceBox img="assets/icons/R&A icon 1.svg" title="services.title_reporting" content="services.content_reporting"/>
      </Row>
    </Box>
  </Section>
);

export default Services