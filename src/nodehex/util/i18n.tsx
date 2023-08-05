import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag"
import styled from 'styled-components';

const resources = {
    se: {
        translation: {
            header: {
                services: "TJÄNSTER",
                about: "OM",
                contact: "KONTAKT",
                home: "HEM",
            }
        }
    },
    en: {
        translation: {
            header: {
                services: "SERVICES",
                about: "ABOUT",
                contact: "CONTACT",
                home: "HOME",
            }
        }
    }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "en",
    lng: "se", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });



export const LanguageButton = () => {
    const { t, i18n } = useTranslation();
    const toggleLanguage = () => {
        const newLanguage = i18n.language == 'se' ? 'en' : 'se';
        i18n.changeLanguage(newLanguage)
    };

    const FlagButton = styled.button`
        border: 0;
        padding: 0;
        margin: 0;
        background: none;
        height: 20px;
        cursor: pointer;
    `;
    
    const LanguageToggleFlag = () => {
        const newLanguage = i18n.language == 'se' ? 'gb' : 'se';
        return (
            <FlagButton onClick={ () => toggleLanguage() }>
                <ReactCountryFlag svg countryCode={ newLanguage } style={{ width: 'auto', height: '100%'}}></ReactCountryFlag>
            </FlagButton>
        );
    };

    return <LanguageToggleFlag />
}

export default i18n;