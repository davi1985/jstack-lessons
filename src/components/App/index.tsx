import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "../../Routes";
import { GlobalStyles } from "../../assets/styles/global";
import defaultTheme from "../../assets/styles/themes/default";
import { Header } from "../Header";
import { Container } from "./styles";
import { ToastContainer } from "../Toast/ToastContainer";

export const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <ToastContainer />

      <Container>
        <Header />

        <Routes />
      </Container>
    </ThemeProvider>
  </BrowserRouter>
);
