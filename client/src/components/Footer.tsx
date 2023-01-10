import styled from "styled-components";
import React, { useState } from "react";

const ContainerBox = styled.div`
  background-color: rgba(150, 150, 150, 1);
  margin-top: 5px;
  height: 100px;
  color: white;
`;

const Footer = () => {
  return <ContainerBox>footer</ContainerBox>;
};

export default Footer;
