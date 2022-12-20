import styled from "styled-components";

export const CategoryTitle = styled.h2`
  font-size: 38px;
  padding: 25px;
  text-align: center;
  text-transform: uppercase;
`;

export const CategoryContainer = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  margin-bottom: 100px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;

  @media (max-width: 756px) {
    display: flex;
    flex-direction: column;
  }
`;
