import styled from "styled-components";
import { HeroBackgroundImage } from "../hero/hero.styles";

export const AboutUsContainer = styled(HeroBackgroundImage)`
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("https://images.unsplash.com/photo-1630695669474-2abc5258a8d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80");

  min-height: 400px;

  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Description = styled.div`
  margin: auto 0;
  padding: 12px 100px;
  font-size: 1.5rem;
  line-height: 2rem;
  color: white;

  .desc-title {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 1rem;
    line-height: 1.7rem;
    padding: 12px 24px;

    .desc-title {
      line-height: 2rem;
    }
  }
`;
