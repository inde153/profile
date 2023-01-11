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
  &:hover {
  }
  cursor: pointer;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

const LogoBox = styled.div`
  float: left;
  margin-top: 0px;
  display: inline-block;
  font-size: 20px;
  margin: 20px 50px;
  &:hover {
  }
  cursor: pointer;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

const Header = () => {
  const navigate = useNavigate();

  const moveUrl = (path: string) => {
    navigate(`${path}`);
  };

  return (
    <ContainerBox>
      <HeaderUl>
        <HeaderLi onClick={() => moveUrl("/about")}>About</HeaderLi>
        <HeaderLi onClick={() => moveUrl("/service")}>Service</HeaderLi>
        <HeaderLi onClick={() => moveUrl("/portfolio")}>Portfolio</HeaderLi>
        <HeaderLi onClick={() => moveUrl("/blog")}>Blog</HeaderLi>
        <HeaderLi onClick={() => moveUrl("/github")}>GitHub</HeaderLi>
      </HeaderUl>
      <LogoBox onClick={() => moveUrl("/")}>Logo 넣을거야</LogoBox>
    </ContainerBox>
  );
};

export default Header;
