import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import React, { Component } from "react";
import { useState } from "react";
import { darkTheme, lightTheme } from "./styles/theme";
import RandingPage from "./page/RandingPage";
import MyProject from "./page/MyProject";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <Header></Header>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RandingPage />} />
            <Route path="/hello" element={<MyProject />} />
          </Routes>
        </BrowserRouter>
        <Footer></Footer>
      </ThemeProvider>
    </>
  );
};

export default App;
