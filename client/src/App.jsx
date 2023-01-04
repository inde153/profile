import styled, { ThemeProvider } from "styled-components";
import React, { Component } from "react";
import { useState } from "react";
import { darkTheme, lightTheme } from "./styles/theme.ts";
import GlobalStyle from "./styles/GlobalStyle.tsx";
import RandingPage from "./page/RandingPage.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";

const App = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle></GlobalStyle>
      </ThemeProvider>
    </>
  );
};

export default App;
