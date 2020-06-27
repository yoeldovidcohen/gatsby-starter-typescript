import React from "react";
import Boxes from "../components/Boxes";
import HeaderBox from "../components/HeaderBox";
import ContentBox from "../components/ContentBox";
import Heading from "../components/Heading";
const IndexPage = () => {
  return (
    <>
      <Boxes>
        <HeaderBox>
          <Heading>daily draw</Heading>
        </HeaderBox>
        <ContentBox></ContentBox>
      </Boxes>
    </>
  );
};

export default IndexPage;
