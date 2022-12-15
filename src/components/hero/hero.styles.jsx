import styled from "styled-components";

export const HeroContainer = styled.div`
  height: 70vh;
  margin-bottom: 2rem;
  border: 1px solid black;
`;

export const HeroBackgroundImage = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://images.unsplash.com/photo-1528341900797-3c17d5088d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1633&q=80");
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

export const HeroText = styled.div`
  text-align: center;
  color: white;
  font-size: 2.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
