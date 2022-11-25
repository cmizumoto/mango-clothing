import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import { CartIconContainer, ShoppingIcon, CartItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, itemQuantity } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <CartItemCount>{itemQuantity}</CartItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
