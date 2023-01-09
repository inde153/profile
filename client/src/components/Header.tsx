import styled from "styled-components";
import React, { useState } from "react";
const logo = require("../assets/images/githubIcon.png");

const ContainerBox = styled.div`
  // background-color: blue;
  height: 100px;
  color: white;
  border-style: solid;
  border-color: black black gray black;
  border-radius: 20px 20px 20px 20px;
`;

const HeaderContents = styled.div`
  text-align: right;
`;

const HeaderUl = styled.ul`
  margin-top: 0px;
`;

const HeaderLi = styled.li`
  display: inline-block;
  font-size: 20px;
  margin: 20px 50px;
`;

const HeaderLogo = styled.img`
  width: 30px;
`;

const Header = () => {
  return (
    <ContainerBox>
      <HeaderContents>
        <HeaderUl>
          <HeaderLi>Home</HeaderLi>
          <HeaderLi>About</HeaderLi>
          <HeaderLi>Service</HeaderLi>
          <HeaderLi>Portfolio</HeaderLi>
          <HeaderLi>Blog</HeaderLi>
          <HeaderLi>GitHub</HeaderLi>
        </HeaderUl>
      </HeaderContents>
    </ContainerBox>
  );
};

export default Header;
