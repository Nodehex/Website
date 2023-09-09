import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nodehex from './nodehex/Nodehex';
import { nodehex, muiTheme } from './theme'
import { ThemeProvider } from 'styled-components'
import { ThemeProvider as MaterialThemeProvider } from "@mui/material"

function App() {
  return (
    <MaterialThemeProvider theme={muiTheme}>
      <ThemeProvider theme={nodehex}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Nodehex/>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </MaterialThemeProvider>
  );
}

export default App;
