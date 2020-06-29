import styled from "styled-components";

const ContentBox = styled.div`
  /* background-color: pink; */
  grid-area: "content";
  display: flex;
  flex-direction: column;
  @media (min-width: 700px) {
    flex-direction: row;
  }
  align-items: center;
  justify-content: space-around;
  /* margin: 5px; */
`;

export default ContentBox;
