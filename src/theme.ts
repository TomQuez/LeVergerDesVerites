import { createTheme } from "@mui/material";

export const colors = {
  beige: "#F3EBDD",
  beigePaper: "#FBF7EF",
  oak: "#8B5E34",
  oakDark: "#5E3E22",
  green: "#A8D5BA",
  greenDark: "#6FB38E",
  text: "#2F2A24",
};

const theme = createTheme({
  typography: {
    fontFamily:
      "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Noto Sans, sans-serif",
    h1: { fontFamily: "Merriweather, serif", fontWeight: 700 },
    h2: { fontFamily: "Merriweather, serif", fontWeight: 700 },
    h3: { fontFamily: "Merriweather, serif", fontWeight: 700 },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: colors.green,
      dark: colors.greenDark,
      contrastText: colors.text,
    },
    secondary: {
      main: colors.oak,
      dark: colors.oakDark,
      contrastText: "#fff",
    },
    background: {
      default: colors.beige,
      paper: colors.beigePaper,
    },
    text: {
      primary: colors.text,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiPaper: {
      styleOverrides: { root: { borderRadius: 16 } },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 999, paddingInline: 18, paddingBlock: 10 },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: colors.beigePaper,
          color: colors.text,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
        },
      },
    },
  },
});

export default theme;
