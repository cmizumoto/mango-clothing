import styled from "styled-components";

export const DirectoryItemContainer = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;
  cursor: pointer;

  &.large {
    height: 380px;
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  /* 
  Another approach would be leaving the hover inside this component and selecting the components
  
  &:hover {
    cursor: pointer;
    & $DirectoryBackgroundImage {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & $DirectoryBody {
      opacity: 0.9;
    }
  }
  */
`;
/* 
  Another approach would be passing the props to this component, then we use a function to pass the props to the this component

  export const DirectoryBackgroundImage = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: ${({imageUrl}) => `url(${imgUrl})`}
`;
*/

export const DirectoryBackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;

  ${DirectoryItemContainer}:hover & {
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`;

/* 
  One note is to usually use one component for the styling, we choose more if we have more elements that need specific styles, following the same rule as the CSS.
  
*/
export const DirectoryBody = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;

  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color: #4a4a4a;
  }

  p {
    font-weight: lighter;
    font-size: 16px;
  }

  ${DirectoryItemContainer}:hover & {
    opacity: 0.9;
  }
`;
