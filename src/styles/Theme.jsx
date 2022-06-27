import { createTheme, responsiveFontSizes } from "@mui/material/styles/";
export let theme = createTheme({
  palette: {
    primary: {
      main: "#009688",
    },
    text: {
      primary: "#fafafa",
      secondary: "#009688",
      fontSize: 12,
    },
  },
  typography: {
    allVariants: {
      fontFamily: "Archivo Black, sans-serif",
    },
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 800,
    fontWeightBolder: 1000,
  },
});

theme = responsiveFontSizes(theme);
