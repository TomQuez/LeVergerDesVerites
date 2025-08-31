import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Cards from "./components/Cards";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Hero />
      <Cards />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
