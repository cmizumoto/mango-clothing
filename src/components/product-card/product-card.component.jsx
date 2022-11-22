import { useContext } from "react";

import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";

import {
  ProductCardContainer,
  ProductCardImage,
  ProductCardButton,
  ProductCardFooter,
  ProductName,
  ProductPrice,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <ProductCardImage src={imageUrl} alt={`${name}`} />
      <ProductCardFooter>
        <ProductName>{name}</ProductName>
        <ProductPrice>{price}</ProductPrice>
      </ProductCardFooter>
      <ProductCardButton buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
        Add to cart
      </ProductCardButton>
    </ProductCardContainer>
  );
};

export default ProductCard;
