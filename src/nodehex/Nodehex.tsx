import Page from './common/Page';
import styled from 'styled-components';
import './util/i18n'
import { createContext, useState } from 'react';
import Landing from './pages/landing/Landing';

const StyleWrapper = styled.div`
    color: ${ props => props.theme.primary };
    font-family: ${ props => props.theme.fonts.content };
`;

export const LanguageContext = createContext('se');
const Nodehex = () => {
    const [language, setLanguage] = useState('se');
    return (
        <LanguageContext.Provider value={language}>
            <StyleWrapper>
                <Landing />
            </StyleWrapper>
        </LanguageContext.Provider>
    );
};

export default Nodehex;