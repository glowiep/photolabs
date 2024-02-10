import React from 'react';
import useApplicationData from '../hooks/useApplicationData';

import { Tooltip } from '@mui/material';
import { Switch, FormGroup, FormControlLabel } from '@mui/material';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ThemeToggle = () => {
  const { state, setDarkMode } = useApplicationData();
  
  const darkMode = state.darkMode;

  const toggleDarkTheme  = () => {
    setDarkMode(!darkMode);
  };
  

  return (
    <div>
      <FormGroup>
        <Tooltip title={`Toggle Dark Mode`}>
          <FormControlLabel 
            control={<Switch checked={darkMode} onChange={toggleDarkTheme}/>} 
            label={darkMode ? <Brightness4Icon /> : <Brightness7Icon />}
          />
        </Tooltip>
      </FormGroup>
    </div>
  )
}

export default ThemeToggle;