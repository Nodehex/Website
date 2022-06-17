import { Box, Typography } from "@mui/material";
import { Translate } from "react-i18nify";
import { Dash } from "../../components/Branding";
import { ThemedBox } from "../../components/Util";
import { fonts } from '../../components/Util'

const About = () => {

  return (
    <ThemedBox variant="dark" style={{ height: '100%', width: '100%' }}>
      <Box pt={10}>
        <Typography variant="h3" align="center" fontFamily={ fonts.secondary }>
          <Dash style={{ height: '1em', display: 'inline-block' }} />
          <Translate value="about.title" />
        </Typography>
        <Box m={2}>
          <Typography variant="body1">
            <Translate value="about.p1" />
          </Typography>
        </Box>
        <Box m={2}>
          <Typography variant="body1">
            <Translate value="about.p2" />
          </Typography>
        </Box>
      </Box>
    </ThemedBox>
  );
};

export default About