import { Box, Button, Typography, useTheme } from "@mui/material";
import { fonts, DashTitle } from "../../components/Util";
import styled from 'styled-components';
import { useTranslation } from "react-i18next";

const TextField = styled.input`
  border: none;
  color: white;
  -webkit-transition: 0.2s;
  -o-transition: 0.2s;
  transition: 0.2s;
  border-bottom: 1px solid #9e9e9e;
  box-shadow: 0 1px 0 0 #9e9e9e !important;
  background: none;
  -webkit-box-shadow: 0 1px 0 0 #9e9e9e !important;
  outline: none;
  overflow: auto;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  margin: 10px 0px;
  width: 100%;
  font-family: ${ fonts.primary };
  font-size: 1.2em;
  padding-bottom: 5px;
  &:focus {
  border-bottom: 1px solid #e4c040;
  box-shadow: 0 1px 0 0 #e4c040 !important;
  -webkit-box-shadow: 0 1px 0 0 #e4c040 !important;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  background: none;
  border-radius: 3px;
`;

const Contact = () => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  return (<>
    <Box
      component="form"
      action="https://formsubmit.co/contact-web@nodehex.com"
      method="POST"
      id="contact"
    >
      <DashTitle text={t("contact.title")} align="left" />
      <input name="_redirect" type="hidden" id="name" value="https://nodehex.com"/>
      <Typography variant="h6" fontFamily={ fonts.secondary }> {t("contact.name")} </Typography>
      <TextField type="text" name="name" required color={ theme.palette.secondary.main } />
      <Typography variant="h6" fontFamily={ fonts.secondary }> {t("contact.email")} </Typography>
      <TextField type="email" name="email" required color={ theme.palette.secondary.main }/>
      <Typography variant="h6" fontFamily={ fonts.secondary }> {t("contact.subject")} </Typography>
      <TextField type="text" name="subject" required color={ theme.palette.secondary.main }/>
      <Typography variant="h6" fontFamily={ fonts.secondary }> {t("contact.message")} </Typography>
      <TextArea name="comment" rows={ 10 } cols={ 30 }></TextArea>
      <input name="_formsubmit_id" type="text" style={{ display:'none' }}/>
      <Button type="submit" variant="contained" color="secondary">Submit</Button>
    </Box>
  </>);
};

export default Contact