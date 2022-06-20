import { Box, Container, Typography } from "@mui/material"
import React from "react";
import { Translate } from "react-i18nify";
import { Logo, TagLine } from "./Branding"
import { ThemedBox, Column, Row, ColorSecondary, fonts, Link } from "./Util"

const FooterListItem = ({ link, stringKey }: {link: string, stringKey: string}) => (
  <Box mt={2}>
    <Link to={ link }>
      <Translate value={ stringKey } />
    </Link>
  </Box>
);

const FooterList = ({ titleKey, children }: { titleKey: string, children: React.ReactNode}) => (
  <Column style={{ alignItems: 'flex-start', flexGrow: '1', marginTop: '20%' }}>
    <ColorSecondary>
      <Typography variant="h5" fontFamily={ fonts.secondary }>
        <Translate value={ titleKey }/>
      </Typography>
    </ColorSecondary>
    { children }
  </Column>
);

const Footer = () => {
  return (
    <footer style={{ width: '100%' }}>
      <ThemedBox variant="main" p={5}>
        <Container>
          <Row style={{ justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
            <Column>
              <Logo />
              <TagLine mt={2} />
            </Column>
            <FooterList titleKey="footer.services">
              <FooterListItem {...{link: '/services/information-management', stringKey: 'footer.infomgmt'}} />
              <FooterListItem {...{link: '/services/reporting', stringKey: 'footer.reporting'}} />
              <FooterListItem {...{link: '/services/om-manuals', stringKey: 'footer.om'}} />
            </FooterList>
            <FooterList titleKey="footer.services">
              <FooterListItem {...{link: '/about', stringKey: 'footer.about'}} />
              <FooterListItem {...{link: '/contact', stringKey: 'footer.contact'}} />
              <FooterListItem {...{link: '/privacy', stringKey: 'footer.privacy'}} />
              <FooterListItem {...{link: '/brochure', stringKey: 'footer.brochure'}} />
            </FooterList>
          </Row>
        </Container>
      </ThemedBox>
    </footer>
  );
}

export default Footer