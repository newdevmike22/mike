import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalSyles";
import { Navbar } from "./components/layout/Nav";

const App = () => {

  const theme = {
    colors: {
      white: "#fff",
      blueOne: "#020c1b",
      blueTwo: "#041630",
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
    <Navbar/>
  </ThemeProvider>
  </>
}

export default App;
