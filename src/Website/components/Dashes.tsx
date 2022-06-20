import { PaletteColor, useTheme } from "@mui/material";
import styled from "styled-components";

const coordsToPoints = (coords: Array<Array<number>>, transform: Array<number>) => {
  const [x, y] = transform;
  const transformed = coords.map(set => [set[0] + x, set[1] + y]);
  return transformed.join(" ");
}

const StyledSVG = styled.svg`
  position: absolute;
  top: ${ props => props.offset };
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export const GrayDash = ({transform = [0,0], top = "0", zIndex = -1}: {transform?: Array<number>, top?: string, zIndex?: number}) => {
  const theme = useTheme(); // theme.palette.primary.dark
  const points = [
    [100, 5],
    [100, 40],
    [95.7,50],
    [86,50],
    [74.2,77],
    [69,77],
  ];
  return (<>
    <StyledSVG  viewBox="0 0 100 100" preserveAspectRatio="none" offset={ top } style={{ zIndex }}>
      <polygon points={ coordsToPoints(points, transform) } fill={ theme.palette.primary.dark } />
    </StyledSVG>
  </>)
};

export const YellowDash = ({transform = [0,0], top = "0", zIndex = -1}: {transform?: Array<number>, top?: string, zIndex?: number}) => {
  const theme = useTheme(); // theme.palette.primary.dark
  const points = [
    [77.6, 35],
    [83,35],
    [71.2,62],
    [66,62]
  ];
  return (<>
    <StyledSVG  viewBox="0 0 100 100" preserveAspectRatio="none" offset={ top } style={{ zIndex }}>
      <polygon  points={ coordsToPoints(points, transform) } fill={ theme.palette.secondary.main } />
    </StyledSVG>
  </>)
};

export const TriangleLeft = ({transform = [0,0], top = "0", zIndex = -1}: {transform?: Array<number>, top?: string, zIndex?: number}) => {
  const theme = useTheme(); // theme.palette.primary.dark
  const points = [
    [0,0],
    [25,50],
    [0,100]
  ];
  return (<>
    <StyledSVG  viewBox="0 0 100 100" preserveAspectRatio="none" offset={ top }>
      <polygon  points={ coordsToPoints(points, transform) } fill={ theme.palette.secondary.main } />
    </StyledSVG>
  </>)
};

export const InvertedTriangle = ({transform = [0,0], top = "0", zIndex = -1}: {transform?: Array<number>, top?: string, zIndex?: number}) => {
  const theme = useTheme(); // theme.palette.primary.dark
  const points = [
    [0,0],
    [85,0],
    [65,50],
    [85,100],
    [0,100]
  ];
  return (<>
    <StyledSVG  viewBox="0 0 100 100" preserveAspectRatio="none" offset={ top }>
      <polygon  points={ coordsToPoints(points, transform) } fill={ theme.palette.primary.dark } />
    </StyledSVG>
  </>)
};