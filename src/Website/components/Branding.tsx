import { Box, BoxProps } from "@mui/material";
import styled from "styled-components";

export const Logo = (props: BoxProps) => {
  const styleOverride = (props.style) ? props.style : {height: '30px'};
  return (
    <Box {...props}>
      <img src="/assets/Logo/Main logo.svg" alt="" style={ styleOverride }></img>
    </Box>
  );
};

export const TagLine = (props: BoxProps) => {
  const styleOverride = (props.style) ? props.style : {height: '30px'};
  return (
    <Box {...props}>
      <img src="/assets/Landing Page/tag line 1.svg" alt="" style={ styleOverride}></img>
    </Box>
  );
};

export const HeroGraphic = (props: BoxProps) => {
  const styleOverride = (props.style) ? props.style : {height: '30px'};
  return (
  <Box {...props}>
    <img src="/assets/Landing page/Landing hero 3.svg" alt="" style={ styleOverride }></img>
  </Box>
  );
};

const YellowSvg = styled.img`
  -webkit-filter: brightness(0) saturate(100%) invert(84%) sepia(100%)
    saturate(665%) hue-rotate(324deg) brightness(99%) contrast(104%);
  filter: brightness(0) saturate(100%) invert(84%) sepia(100%) saturate(665%)
    hue-rotate(324deg) brightness(99%) contrast(104%);
`;

export const Dash = (props: BoxProps) => (
  <Box {...props}>
    <YellowSvg src="/assets/page title icons.svg" alt="" style={{ height: '100%' }}></YellowSvg>
  </Box>
); 