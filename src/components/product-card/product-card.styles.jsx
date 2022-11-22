import { BaseButton } from "../button/button.styles";
import styled from "styled-components";

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
`;

export const ProductCardImage = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;

  ${ProductCardContainer}:hover & {
    opacity: 0.8;
  }
`;

export const ProductCardButton = styled(BaseButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;

  ${ProductCardContainer}:hover & {
    opacity: 0.85;
    display: flex;
  }
`;

export const ProductCardFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  span {
    width: 90%;
    margin-bottom: 15px;
  }
`;

export const ProductFooterPrice = styled.span`
  width: 10%;
`;
