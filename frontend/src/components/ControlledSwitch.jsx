import React from 'react';
import useApplicationData from '../hooks/useApplicationData';

import { Switch, FormGroup, FormControlLabel, CssBaseline } from '@mui/material';
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ControlledSwitch = () => {
  const { state, setDarkMode } = useApplicationData();
  
  const darkMode = state.darkMode;

  const toggleDarkTheme  = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <FormGroup>
        <FormControlLabel 
          control={<Switch checked={darkMode} onChange={toggleDarkTheme}/>} 
          label={darkMode ? <Brightness4Icon /> : <Brightness7Icon />}
        />
      </FormGroup>
    </div>
  )
}

export default ControlledSwitch;