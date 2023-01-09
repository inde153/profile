import styled from "styled-components";
import React from "react";
const logo = require("../assets/images/githubIcon.png");
const leftSectionImg = require("../assets/images/images.png");
const rightSectionImg = require("../assets/images/images1.jpg");

const ContainerBox = styled.div`
  background-color: rgba(0, 204, 255, 0.3);
  height: 750px;
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const BodySection = styled.section`
  float: left;
  width: 50%;
  height: 80%;
  // background-color: yellow;
`;

const SectionImage = styled.img`
  width: 80%;
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
