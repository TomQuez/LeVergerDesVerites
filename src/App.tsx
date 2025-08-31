import { CssBaseline, ThemeProvider, Divider, Box } from "@mui/material";
import theme from "./theme";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Contact from "./components/Contact";
import Association from "./components/Association";
import { Mentions } from "./components/Mentions";
import { CONTACT } from "./Constant";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />

      <Hero />
      <Box my={4}>
        <Divider />
      </Box>
      <Cards />
      <Box my={4}>
        <Divider />
      </Box>
      <Association />
      <Box my={4}>
        <Divider />
      </Box>
      <Contact
        phoneDisplay={CONTACT.phoneDisplay}
        email={CONTACT.email}
        phoneE164={CONTACT.phoneE164}
      />
      <Box my={4}>
        <Divider />
      </Box>
      <Mentions />
      <Box my={4}>
        <Divider />
      </Box>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
