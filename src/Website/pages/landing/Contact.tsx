import { Box, Typography, useTheme } from "@mui/material";
import { Translate } from "react-i18nify";
import { fonts, DashTitle } from "../../components/Util";
import styled from 'styled-components'

const TextField = styled.input`
  border: none;
  color: white;
  -webkit-transition: 0.2s;
  -o-transition: 0.2s;
  transition: 0.2s;
  border-bottom: 1px solid white !important;
  -webkit-box-shadow: 0 1px 0 0 white !important;
  box-shadow: 0 1px 0 0 white !important;
  background: none;
  outline: none;
  overflow: auto;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  margin: 10px 0px;
  width: 100%;
  font-family: ${ fonts.primary };
  font-size: 1.2em;
`;

const Contact = () => {
  const theme = useTheme();
  return (<>
    <Box
      component="form"
      action="https://formsubmit.co/contact-web@nodehex.com"
      method="POST"
    >
      <DashTitle stringKey="contact.title" align="left" />
      <input name="_redirect" type="hidden" id="name" value="https://nodehex.com"/>
      <Typography variant="h6" fontFamily={ fonts.secondary }><Translate value="contact.name" /></Typography>
      <TextField type="text" name="name" required color={ theme.palette.secondary.main } />
      <Typography variant="h6" fontFamily={ fonts.secondary }><Translate value="contact.email" /></Typography>
      <TextField type="email" name="email" required color={ theme.palette.secondary.main }/>
      <Typography variant="h6" fontFamily={ fonts.secondary }><Translate value="contact.subject" /></Typography>
      <TextField type="text" name="subject" required color={ theme.palette.secondary.main }/>
      <Typography variant="h6" fontFamily={ fonts.secondary }><Translate value="contact.message" /></Typography>
      <textarea name="comment" rows={ 10 } cols={ 30 }></textarea>
      <input name="_formsubmit_id" type="text" style={{ display:'none' }}/>
    </Box>
  </>);
};

export default Contact