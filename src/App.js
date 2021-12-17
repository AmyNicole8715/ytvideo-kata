import React from 'react';
import { ThemeProvider } from '@mui/material';
import { StylesProvider } from '@mui/styles';
import { ThemeProvider as YTStyledProvider } from 'styled-components';
import { CssBaseline } from '@mui/material';

import SearchAppBar from './components/SearchBar';
import theme from './theme/theme';


const App = () => {
  return (
    
        <StylesProvider injectFirst>
          <YTStyledProvider theme={theme}>
            <ThemeProvider theme={theme}>
              <CssBaseline>
                  <SearchAppBar  />
              </CssBaseline>
            </ThemeProvider>
          </YTStyledProvider>
        </StylesProvider>   
  );
}
export default App;

