import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import React, { Component } from "react";
import { useState } from "react";
import { darkTheme, lightTheme } from "./styles/theme";
import Randing from "./page/Randing";
import About from "./page/Randing";
import MyProject from "./page/MyProject";
import Header from "./components/Header";
import Footer from "./components/Footer";

const AppContainerBox = styled.div`
  background-color: rgba(255, 255, 255);
`;

const ContainerBox = styled.div`
margin 0px 50px 0px 50px;
background-color: black;
`;

const App = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <AppContainerBox>
      <ContainerBox>
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
          <BrowserRouter>
            <Header></Header>
            <Routes>
              <Route path="/" element={<Randing />} />
              <Route path="/about" element={<About />} />
            </Routes>
            <Footer></Footer>
          </BrowserRouter>
        </ThemeProvider>
      </ContainerBox>
    </AppContainerBox>
  );
};

export default App;
