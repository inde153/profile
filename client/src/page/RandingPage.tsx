import styled from "styled-components";
import React from "react";
const logo = require("../assets/images/githubIcon.png");

const ContainerBox = styled.div`
  background-color: red;
  height: 750px;
`;

const BodySection = styled.section`
  float: left;
  width: 50%;
  height: 100%;
  background-color: yellow;
`;

const RandingPage = () => {
  return (
    <>
      <ContainerBox>
        <BodySection>left section</BodySection>
        <BodySection style={{ backgroundColor: "red" }}>
          right section
        </BodySection>
      </ContainerBox>
    </>
  );
};

export default RandingPage;
