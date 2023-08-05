import styled from 'styled-components';
import { useTranslation } from "react-i18next";
import i18n, { LanguageButton } from "../util/i18n";
import { LanguageContext } from '../Nodehex';
import { useContext } from 'react';
import ReactCountryFlag from "react-country-flag"

const NavbarContainer = styled.div`
    height: 50px;
    padding: 0 50px;
    background-color: ${ props => props.theme.dark };
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const Image = styled.img`
    height: 30px;
`;

const Link = styled.a`
    padding: 0 20px;
    font-size: 1.3rem;
    text-transform: uppercase;
`;

const LinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const Navbar = () => {
    const { t, i18n } = useTranslation();
    // const [language, setLanguage] = useContext(LanguageContext);

    const toggleLanguage = () => {
        const newLanguage = i18n.language == 'se' ? 'en' : 'se';
        i18n.changeLanguage(newLanguage)
    };

    const LanguageToggleFlag = () => {
        const newLanguage = i18n.language == 'se' ? 'gb' : 'se';
        return <ReactCountryFlag svg countryCode={newLanguage }  height="16"></ReactCountryFlag>
    };

    return <NavbarContainer>
        <Image src="assets/main-logo.svg" alt="Nodehex AB" />
        <LinkContainer>
            <Link>{ t('header.services') }</Link>
            <Link>{ t('header.about') }</Link>
            <Link>{ t('header.contact') }</Link>
            <LanguageButton />
        </LinkContainer>
    </NavbarContainer>;
};

export default Navbar;