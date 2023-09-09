import { createTheme, ThemeProvider } from "@mui/material";

export const nodehex = {
    primary: 'white',
    accent: '#e4c040',
    dark: '#1c1a18',
    text: {
        dark: '#1c2139'
    },
    grey: '#3a3637',
    fonts: {
        title: '"Spartan", sans-serif',
        content: '"Roboto", sans-serif'
    }
};

export const muiTheme = createTheme({
    palette: {
            primary: {
            light: nodehex.grey,
            main: nodehex.grey,
            dark: nodehex.dark,
            contrastText: '#white',
        },
            secondary: {
            light: nodehex.accent,
            main: nodehex.accent,
            dark: nodehex.accent,
            contrastText: '#000000',
        },
    }
});