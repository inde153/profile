import styled from "styled-components";
import React, { useState } from "react";
const logo = require("../assets/images/githubIcon.png");

const ContainerBox = styled.div`
  background-color: blue;
  height: 100px;
  color: white;
`;

const HeaderContents = styled.div`
  //
`;

const HeaderLogo = styled.img`
  width: 30px;
`;

const Header = () => {
  return (
    <ContainerBox>
      <HeaderContents>header</HeaderContents>
      {/* <HeaderContents>
        <ul>
          <li>
            <a>
              hello<HeaderLogo src={logo}></HeaderLogo>
            </a>
          </li>
          <li>
            <a>hello</a>
          </li>
        </ul>
      </HeaderContents> */}
    </ContainerBox>
  );
};

export default Header;
