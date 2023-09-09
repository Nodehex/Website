import { AppBar, Box, Toolbar } from "@mui/material"
import { BrowserView, MobileView } from "react-device-detect";
import { Translate } from "react-i18nify";
import styled from "styled-components";
import LocaleSelector from "../i18n/LocaleSelector";
import { Logo } from "./Branding"
import { Link, Row, Text } from "./Util"

const HeaderText = styled(Text)`
  font-size: 1.3rem;
`;

const Spacer = styled.div`
  margin-right: 40px;
`;

const Links = () => (
  <Row>
    <Spacer>
      <Link to="/#services">
        <HeaderText><Translate value={"header.services"}/></HeaderText>
      </Link>
    </Spacer>
    <Spacer>
      <Link to="/#about">
        <HeaderText><Translate value={"header.about"}/></HeaderText>
      </Link>
    </Spacer>
    <Spacer>
      <Link to="/#contact">
        <HeaderText><Translate value={"header.contact"}/></HeaderText>
      </Link>
    </Spacer>
    <Spacer>
      <LocaleSelector/>
    </Spacer>
  </Row>
);

const Header = () => {
  return <>
    <BrowserView>
      <AppBar position="fixed">
        <Toolbar>
          <Row style={{ justifyContent: 'space-between', width: '100%' }}>
            <Link to="/"><Logo/></Link>
            <Links/>
          </Row>
        </Toolbar>
      </AppBar>
    </BrowserView>
    <MobileView>
      <AppBar position="fixed">
        <Row m={2} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
          <Logo />
        </Row>
      </AppBar>
    </MobileView>
  </>
}

export default Header