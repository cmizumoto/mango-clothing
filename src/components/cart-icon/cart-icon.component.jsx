import { useContext } from "react";

import { UserContext } from "../../contexts/user.context";
import { CartDropdownContext } from "../../contexts/cart-dropdown.context";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartDropdownContext);
  const { itemQuantity } = useContext(CartDropdownContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemQuantity}</span>
    </div>
  );
};

export default CartIcon;
