/* Refactoring in progress
import React, { createContext, useContext } from 'react';

// Create context
const ThemeContext = createContext();


// Provider component to wrap app
export const AppProvider = ({ children }) => {
  // Entire state of the application
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{darkMode, setDarkMode}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

/*