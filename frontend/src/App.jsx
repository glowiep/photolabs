import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const { state, fetchData } = useApplicationData();
  fetchData();

  const darkMode = state.darkMode;

  // darkTheme function to handle dark theme using createTheme
const darkTheme = createTheme({
  palette: {
    mode: darkMode ? 'dark' : 'light',
    text: {
      primary: darkMode ? "#FFFFFF" : "#000"
    }
  },
});
  
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <HomeRoute />
        {state.displayModal && <PhotoDetailsModal />}
      </div>
    </ThemeProvider>
  );
};

export default App;
