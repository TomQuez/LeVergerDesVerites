import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import theme from "./theme";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Contact from "./components/Contact";
import Association from "./components/Association";
import Actus from "./components/Actus";
import Presse from "./components/Presse";
import Mentions from "./components/Mentions";
import { CONTACT } from "./Constant";
import InaugurationDialog from "./components/InaugurationDialog";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <a
        href="#main-content"
        style={{
          position: "absolute",
          left: "-9999px",
          top: "auto",
          width: "1px",
          height: "1px",
          overflow: "hidden",
          zIndex: 9999,
        }}
        onFocus={(e) => {
          e.currentTarget.style.position = "static";
          e.currentTarget.style.width = "auto";
          e.currentTarget.style.height = "auto";
        }}
        onBlur={(e) => {
          e.currentTarget.style.position = "absolute";
          e.currentTarget.style.left = "-9999px";
          e.currentTarget.style.width = "1px";
          e.currentTarget.style.height = "1px";
        }}
      >
        Aller au contenu principal
      </a>
      <Header />
      <Box component="main" id="main-content">
        <Hero />
        <Actus />
        <Cards />
        <Association />
        <Contact
          phoneDisplay={CONTACT.phoneDisplay}
          email={CONTACT.email}
          phoneE164={CONTACT.phoneE164}
        />
        <Presse />
        <Mentions />
      </Box>
      <Footer />
      <InaugurationDialog />
    </ThemeProvider>
  );
}

export default App;
