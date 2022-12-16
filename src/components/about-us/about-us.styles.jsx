import styled from "styled-components";

export const AboutUsContainer = styled.div`
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid black;
`;

export const HalfImage = styled.img`
  height: 100%;
  width: 50%;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Description = styled.div`
  padding: 12px 24px;
  width: 50%;
  font-size: 1.5rem;
  line-height: 2rem;

  .desc-title {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 1rem;
    line-height: 1.7rem;

    .desc-title {
      line-height: 2rem;
    }
  }
`;
