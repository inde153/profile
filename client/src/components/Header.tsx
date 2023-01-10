import styled from "styled-components";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const logo = require("../assets/images/githubIcon.png");

const ContainerBox = styled.div`
  background-color: rgba(50, 50, 50, 0.7);
  height: 100px;
  color: white;
  margin-bottom: 5px;
  // border-color: black black gray black;
  // border-radius: 20px 20px 20px 20px;
`;

const HeaderUl = styled.ul`
  float: right;
  margin-top: 0px;
`;

const HeaderLi = styled.li`
  display: inline-block;
  font-size: 20px;
  margin: 20px 50px;
`;

const Header = () => {
  const navigate = useNavigate();

  const path = () => {
    navigate("/home");
  };

  return (
    <ContainerBox>
      <HeaderUl>
        <HeaderLi onClick={path}>Home</HeaderLi>
        <HeaderLi>About</HeaderLi>
        <HeaderLi>Service</HeaderLi>
        <HeaderLi>Portfolio</HeaderLi>
        <HeaderLi>Blog</HeaderLi>
        <HeaderLi>GitHub</HeaderLi>
      </HeaderUl>
    </ContainerBox>
  );
};

export default Header;
