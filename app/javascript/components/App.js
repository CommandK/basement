import React from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import MyAppBar from "./template/MyAppBar";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000", // primary color is black
    },
    secondary: {
      main: "#757575", // secondary color is grey
    },
    text: {
      primary: "#000", // primary text color is black
      secondary: "#757575", // secondary text color is grey
    },
    background: {
      default: "#fff", // background color is white
    },
  },
  typography: {
    fontFamily: [
      // your preferred bold font
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MyAppBar />
      {/* Rest of your components go here */}
    </ThemeProvider>
  );
}

export default App;
