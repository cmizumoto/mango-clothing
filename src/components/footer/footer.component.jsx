import { FooterContainer, FooterContent } from "./footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <ul>
          Navigation
          <li>Logo/home</li>
          <li>Shop</li>
          <li>Checkout</li>
        </ul>
      </FooterContent>
      <FooterContent>
        <ul>
          Categories
          <li>Hats</li>
          <li>Jackets</li>
          <li>Sneakers</li>
          <li>Womens</li>
          <li>Mens</li>
        </ul>
      </FooterContent>
      <FooterContent>
        <ul>
          <li> Mango Clothing</li>
          <li>Mango St 443</li>
          <li>Mongo, MG</li>
          <li>424242-422</li>
          <li>Mango Co.</li>
        </ul>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
