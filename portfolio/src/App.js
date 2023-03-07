import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalSyles";
import { Navbar } from "./components/layout/Nav";
import { TopBanner } from "./components/layout/TopBanner";
import { Hero } from "./components/sections/Hero";

const App = () => {

  const theme = {
    colors: {
      white: "#fff",
      blueOne: "#020c1b",
      blueTwo: "#070369",
      blueThree: "#222cf2",
      blueFour: "#03098c",
      green: "#00ce9e",
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
  </ThemeProvider>
  </>
}

export default App;
