import styled from "styled-components";

const Boxes = styled.div`
  /* background-color: red; */
  display: grid;
  height: 100vh;
  width: 100vw;
  /* grid-column: 100%; */
  grid-template-rows: 40% 60%;
  /* grid-template-columns: 5vw 90vw 5vw; */
  grid-template-areas: "header" "content";
`;

export default Boxes;
