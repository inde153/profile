import styled, { ThemeProvider } from "styled-components";
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { darkTheme, lightTheme } from "./styles/theme.ts";
import GlobalStyle from "./styles/GlobalStyle.ts";
import RandingPage from "./page/RandingPage.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";

const App = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle></GlobalStyle>
      </ThemeProvider>
    </>
  );
};

export default App;
