import { FooterContainer, FooterContent, FooterLink } from "./footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <h6>
          <FooterLink to="/">Mango Clothing</FooterLink>
        </h6>
        <ul>
          <li>Mango St 443</li>
          <li>Mongo, MG</li>
          <li>424242-422</li>
          <li>Mango Co.</li>
        </ul>
      </FooterContent>
      <FooterContent>
        <h6>Navigation</h6>
        <ul>
          <li>
            <FooterLink to="/">Home</FooterLink>
          </li>
          <li>
            <FooterLink to="/shop">Shop</FooterLink>
          </li>
          <li>
            <FooterLink to="/checkout">Checkout</FooterLink>
          </li>
        </ul>
      </FooterContent>
      <FooterContent>
        <h6>Categories</h6>
        <ul>
          <li>
            <FooterLink to="/shop/hats">Hats</FooterLink>
          </li>
          <li>
            <FooterLink to="/shop/jackets">Jackets</FooterLink>
          </li>
          <li>
            <FooterLink to="/shop/sneakers">Sneakers</FooterLink>
          </li>
          <li>
            <FooterLink to="/shop/womens">Womens</FooterLink>
          </li>
          <li>
            <FooterLink to="/shop/mens">Mens</FooterLink>
          </li>
        </ul>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
