import styled from "styled-components";

export const AboutUsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid black;
`;

export const HalfImage = styled.img`
  width: 50%;
`;

export const Description = styled.div`
  margin: 1rem;
  width: 50%;
  line-height: 1.5rem;

  & h3 {
    font-size: 1.5rem;
  }
`;
