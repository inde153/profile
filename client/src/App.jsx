import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import React, { Component } from "react";
import { useState } from "react";
import { darkTheme, lightTheme } from "./styles/theme.ts";
import GlobalStyle from "./styles/GlobalStyle.tsx";
import RandingPage from "./page/RandingPage.tsx";
import MyProject from "./page/MyProject.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";

const App = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RandingPage />} />
            <Route path="/hello" element={<MyProject />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
