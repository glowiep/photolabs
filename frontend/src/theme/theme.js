import { createTheme } from "@mui/material/styles";

// darkTheme function to handle dark theme using createTheme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    text: {
      primary: "#605D5F",
    }
  },
});

export default darkTheme;