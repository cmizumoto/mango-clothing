import styled from "styled-components";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  padding-right: 30px;
  margin-bottom: 30px;

  h2 {
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;
  }
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;

  @media (max-width: 756px) {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;
