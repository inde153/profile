import styled from "styled-components";
import React from "react";
const logo = require("../assets/images/githubIcon.png");
const leftSectionImg = require("../assets/images/space1.jpg");
const rightSectionImg = require("../assets/images/space2.jpg");

const ContainerBox = styled.div`
  background-color: rgba(200, 255, 234, 1);
  height: 750px;
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const BodySection = styled.section`
  float: left;
  width: 50%;
  height: 100%;
  background-color: rgba(0, 0, 0, 1);
`;

const SectionImage = styled.img`
  width: 90%;
  height: 90%;
  margin: 1px;
`;

const RandingPage = () => {
  return (
    <>
      <ContainerBox>
        <BodySection>
          <ImageBox>
            <SectionImage src={leftSectionImg} />
          </ImageBox>
        </BodySection>
        <BodySection>
          <ImageBox>
            <SectionImage src={rightSectionImg} />
          </ImageBox>
        </BodySection>
      </ContainerBox>
    </>
  );
};

export default RandingPage;
