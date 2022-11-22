import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import {
  CheckoutItemContainer,
  CheckoutImageContainer,
  CheckoutQuantityContainer,
  CheckoutQuantityArrows,
  CheckoutRemoveButton,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price, id } = cartItem;

  const { increaseItemQuantity, decreaseItemQuantity, removeItem } = useContext(CartContext);

  const increaseItemQuantityHandler = () => increaseItemQuantity(id);
  const decreaseItemQuantityHandler = () => decreaseItemQuantity(id);
  const removeItemCheckoutHandler = () => removeItem(id);

  return (
    <CheckoutItemContainer>
      <CheckoutImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </CheckoutImageContainer>
      <span>
        <p>{name}</p>
      </span>
      <span>
        <CheckoutQuantityContainer>
          <CheckoutQuantityArrows onClick={decreaseItemQuantityHandler}>
            &#10094;
          </CheckoutQuantityArrows>
          <span>{quantity}</span>
          <CheckoutQuantityArrows onClick={increaseItemQuantityHandler}>
            &#10095;
          </CheckoutQuantityArrows>
        </CheckoutQuantityContainer>
      </span>
      <span>
        <p>{price}</p>
      </span>
      <CheckoutRemoveButton onClick={removeItemCheckoutHandler}>&#10005;</CheckoutRemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
