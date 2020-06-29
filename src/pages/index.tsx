import React from "react";
import Boxes from "../components/Boxes";
import HeaderBox from "../components/HeaderBox";
import ContentBox from "../components/ContentBox";
import Heading from "../components/Heading";
import Reset from "../components/Reset";
import ContentItem from "../components/ContentItem";
import BB from "../components/BB";

const IndexPage = () => {
  return (
    <>
      <Reset />
      <Boxes>
        <HeaderBox>
          <Heading>daily draw</Heading>
        </HeaderBox>
        <BB>hi</BB>
        <ContentBox>
          <ContentItem>
            <h1>Suport Avraychim</h1>
          </ContentItem>
          <ContentItem>
            <h1>Buy a ticket</h1>
          </ContentItem>
          <ContentItem>
            <h1>Don't Wait</h1>
          </ContentItem>
        </ContentBox>
      </Boxes>
    </>
  );
};

export default IndexPage;
