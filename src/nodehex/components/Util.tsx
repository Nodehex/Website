import { Box, Button, PaletteColor, Typography, TypographyTypeMap, useTheme } from '@mui/material';
import styled from 'styled-components'
import { Link as RouteLink, useSearchParams } from "react-router-dom";
import { BoxProps, TypographyProps } from '@mui/system';
import React from 'react';
import { useTranslation } from "react-i18next";
import { Dash } from './Branding';

export const Row = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Column = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ThemedBox = (props: BoxProps & {children?: React.ReactNode, variant: keyof PaletteColor}) => {
  const theme = useTheme();
  const newStyle = {
    backgroundColor: theme.palette.primary[props.variant],
    ...props.style
  };
  return <Box {...{...props, style: newStyle}}>{ props.children }</Box>
};

export const BackgroundLight = ({children}: {children: React.ReactNode}) => {
  const theme = useTheme();
  return <Box style={{ backgroundColor: theme.palette.primary.light }}>{ children }</Box>
};

export const ColorSecondary = (props: BoxProps & { children: React.ReactNode }) => {
  const theme = useTheme();
  return <Box style={{ color: theme.palette.secondary.main, ...props.style }} {...props} >{ props.children }</Box>
};

const StyledRouteLink = styled(RouteLink)`
  text-decoration: none;
  color: white;
  span:hover {
    color: ${ props => props.color };
  };
`;


export const Link = ({to, children, searchParamsOverride}: {to: string, children: React.ReactNode, searchParamsOverride?: string}) => {
  const theme = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();
  const routeSearchParams = searchParamsOverride ?? searchParams.toString();
  return (
  < StyledRouteLink to={to+'?'+routeSearchParams} color={ theme.palette.secondary.main }>
    {children}
  </StyledRouteLink>
  )
};

export const Text = styled.span`
  color: white;
  font-family: "Roboto", sans-serif;
`;

export const fonts = {
  primary: '"Roboto", sans-serif',
  secondary: '"Spartan", sans-serif'
}

export const DashTitle = ({ text, align = "center" }: { text: string, align?: "center" | "left" }) => (
  <Typography variant="h3" align={ align } fontFamily={ fonts.secondary }>
      <Dash style={{ height: '1em', display: 'inline-block' }} />
      { text }
  </Typography>
);

export const Content = (props: BoxProps & {translateKey: string}) => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const newStyle = {
    fontSize: '1.2em',
    ...props.style
  };
  return <Box {...{...props, style: newStyle}}>{t(props.translateKey)}</Box>
};