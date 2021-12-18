import React from 'react';
import { ThemeProvider } from '@mui/material';
import { StylesProvider } from '@mui/styles';
import { ThemeProvider as YTStyledProvider } from 'styled-components';
import { CssBaseline } from '@mui/material';

import DataProvider from './context/DataContext';
import SearchAppBar from './components/SearchBar';
import VideoItem from './components/VideoItem';
import theme from './theme/theme';


const App = () => {
  return (
    <DataProvider>
      <StylesProvider injectFirst>
        <YTStyledProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <CssBaseline>
                <SearchAppBar  />
                <VideoItem />
            </CssBaseline>
          </ThemeProvider>
        </YTStyledProvider>
      </StylesProvider> 
    </DataProvider>  
  );
}
export default App;

