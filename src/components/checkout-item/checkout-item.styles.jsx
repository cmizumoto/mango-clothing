import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  span {
    margin: 0 10px;
  }

  &:hover {
    background-color: #ddd;
  }
`;

export const CheckoutImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const CheckoutDataContainers = styled.div`
  width: 23%;
`;

export const CheckoutQuantityContainer = styled.div`
  width: 23%;
  display: flex;
  align-items: center;
`;

/* 
  Buttons
*/
export const CheckoutItemButtons = styled.button`
  background-color: transparent;
  border: none;
  text-align: center;
  font-size: 16px;
  padding: 7px;
`;

export const CheckoutQuantityArrows = styled(CheckoutItemButtons)`
  cursor: pointer;
  font-weight: bold;
`;

export const CheckoutRemoveButton = styled(CheckoutItemButtons)`
  margin-left: 12px;
  text-align: center;
  cursor: pointer;
`;
