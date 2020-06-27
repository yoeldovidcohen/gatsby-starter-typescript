import styled from "styled-components";

const Boxes = styled.div`
  background-color: red;
  display: grid;
  height: 95vh;
  width: 95vw;
  grid-column: 100%;
  grid-template-rows: 30% 70%;
  grid-template-areas: "header" "content";
`;

export default Boxes;
