import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import React, { Component } from "react";
import { useState } from "react";
import { darkTheme, lightTheme } from "./styles/theme";
import RandingPage from "./page/RandingPage";
import MyProject from "./page/MyProject";
import Header from "./components/Header";
import Footer from "./components/Footer";

const AppContainerBox = styled.div`
  background-color: black;
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
          <Header></Header>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<RandingPage />} />
              <Route path="/Home" element={<MyProject />} />
              <Route path="/About" element={<MyProject />} />
              <Route path="/Service" element={<MyProject />} />
              <Route path="/Portfolio" element={<MyProject />} />
              <Route path="/Blog" element={<MyProject />} />
              <Route path="/GitHub" element={<MyProject />} />
            </Routes>
          </BrowserRouter>
          <Footer></Footer>
        </ThemeProvider>
      </ContainerBox>
    </AppContainerBox>
  );
};

export default App;
