import { createTheme, ThemeProvider } from "@mui/material"
import { setTranslations } from "react-i18nify";
import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Landing from "./pages/landing/Landing";
import { locales } from "./i18n/locales"


const theme = createTheme({
  palette: {
    primary: {
      light: '#3a3637',
      main: '#3a3637',
      dark: '#1c1a18',
      contrastText: '#white',
    },
    secondary: {
      light: '#e4c040',
      main: '#e4c040',
      dark: '#e4c040',
      contrastText: '#000000',
    },
  }
});

setTranslations(locales)

const Website = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Landing/>}></Route>
      </Routes>
    </ThemeProvider>
  )
}

export default Website