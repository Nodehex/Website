import { Box, useTheme } from "@mui/material";
import styled, { keyframes } from "styled-components";
import { HeroGraphic } from "../../components/Branding";
import { GrayDash } from "../../components/Dashes";
import { Column, Row, ThemedBox } from "../../components/Util";
import { Section } from "./Landing";

const arrowAnimation = keyframes`
  0% {
    opacity: 0;
    transform: rotate(45deg) translate(-20px, -20px);
  }
  50% {
    opacity: 100;
  }
  100% {
    opacity: 0;
    transform: rotate(45deg) translate(20px, 20px);
  }
`;

const Arrow = styled.span`
  display: block;
  width: 30px;
  height: 30px;
  border-bottom: 5px solid ${ props => props.color };
  border-right: 5px solid ${ props => props.color };
  transform: rotate(45deg);
  margin: -10px;
  animation: ${ arrowAnimation } 2s infinite;
`;

const ChevronDown = () => {
  const theme = useTheme();
  return (
    <Box mt={5}>
      <Arrow color={ theme.palette.secondary.main }/>
    </Box>
  )
};

const Hero = () => (
  <Section variant="dark">
    <HeroGraphic style={{ width: '40vw' }} />
    <ChevronDown />
  </Section>
);

export default Hero