import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  padding: 12px 24px;
  height: 300px;
  color: white;
  background-color: black;
  display: flex;
  justify-content: space-between;
`;

export const FooterContent = styled.div`
  h6 {
    font-size: 1.5rem;
    padding: 0;
    margin-bottom: 0;
  }
  ul {
    padding: 0;
    list-style-type: none;
  }

  li {
    font-size: 1.2rem;
  }
`;

export const FooterLink = styled(Link)`
  color: white;

  &:hover {
    color: black;
    background: white;
  }
`;
