import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalSyles";
import { Navbar } from "./components/layout/Nav";
import { TopBanner } from "./components/layout/TopBanner";
import { About } from "./components/sections/About";
import { Hero } from "./components/sections/Hero";
import { Container } from "./components/styles/layout/common/ContainerStlyes";
import { Projects } from "./components/sections/Projects";
import { Services } from "./components/sections/Services";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/layout/Footer";

const App = () => {

  const theme = {
    colors: {
      white: "#fff",
      blueOne: "#020c1b",
      blueTwo: "#070369",
      blueThree: "#222cf2",
      blueFour: "#03098c",
      green: "#076b02",
      orange: "#f9680e",
      purple: "#663399",
      yellow: "#f2df07",
    },
    mobile: "768px",
    transition: "all 650ms ease-in-out"
  };

  return <>
  <ThemeProvider theme={theme}>
    <GlobalStyles/>
    <TopBanner/>
    <Navbar/>
    <Hero/>
    <Container>
      <About/>
      <Projects/>
      <Services/>
      <Contact/>
    </Container>
    <Footer/>
  </ThemeProvider>
  </>
}

export default App;
