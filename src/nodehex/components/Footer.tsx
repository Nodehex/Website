import { Box, Container, Typography } from "@mui/material"
import React from "react";
import { Logo, TagLine } from "./Branding"
import { ThemedBox, Column, Row, ColorSecondary, fonts, Link } from "./Util"
import { useTranslation } from "react-i18next";

const FooterListItem = ({ link, text }: {link: string, text: string}) => (
  <Box mt={2}>
    <Link to={ link }>
      { text }
    </Link>
  </Box>
);

const FooterList = ({ text, children }: { text: string, children: React.ReactNode}) => (
  <Column style={{ alignItems: 'flex-start', flexGrow: '1', marginTop: '20%' }}>
    <ColorSecondary>
      <Typography variant="h5" fontFamily={ fonts.secondary }>
        { text }
      </Typography>
    </ColorSecondary>
    { children }
  </Column>
);

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <footer style={{ width: '100%' }}>
      <ThemedBox variant="main" p={5}>
        <Container>
          <Row style={{ justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
            <Column>
              <Logo />
              <TagLine mt={2} />
            </Column>
            <FooterList text={t("footer.services")}>
              <FooterListItem {...{link: '/services/information-management', text: t('footer.infomgmt')}} />
              <FooterListItem {...{link: '/services/reporting', text: t('footer.reporting')}} />
              <FooterListItem {...{link: '/services/om-manuals', text: t('footer.om')}} />
            </FooterList>
            <FooterList text={t("footer.services")}>
              <FooterListItem {...{link: '/about', text: t('footer.about')}} />
              <FooterListItem {...{link: '/contact', text: t('footer.contact')}} />
              <FooterListItem {...{link: '/privacy', text: t('footer.privacy')}} />
              <FooterListItem {...{link: '/brochure', text: t('footer.brochure')}} />
            </FooterList>
          </Row>
        </Container>
      </ThemedBox>
    </footer>
  );
}

export default Footer