import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nodehex from './nodehex/Nodehex';
import { nodehex } from './theme'
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <ThemeProvider theme={nodehex}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nodehex/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
