import styled from "styled-components";

export const NewsletterContainer = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  margin-bottom: 50px;
  min-height: 350px;
  text-align: center;

  h4 {
    font-size: 2rem;
  }
`;

export const NewsletterContent = styled.div`
  padding-bottom: 50px;
  border: 1px solid black;

  display: flex;
  flex-direction: column;
  align-items: center;

  h5 {
    font-size: 2rem;
    line-height: 0;
  }

  p {
    font-size: 1.2rem;
  }

  input {
    width: 50%;
    font-size: 1.2rem;
    height: 40px;
    margin-bottom: 20px;

    &:focus {
      outline: 2px black solid;
    }
  }
`;
