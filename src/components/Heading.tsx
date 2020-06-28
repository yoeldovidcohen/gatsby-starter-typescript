import styled from "styled-components";

const Heading = styled.h1`
  text-align: center;
  display: block;
  font-size: 3rem;
  @media (min-width: 700px) {
    font-size: 5rem;
  }
  @media (min-width: 1200px) {
    font-size: 8rem;
  }
  font-weight: bold;
  text-transform: uppercase;
  font-family: sans-serif;
`;

export default Heading;
