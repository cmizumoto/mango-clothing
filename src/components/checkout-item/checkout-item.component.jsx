import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import {
  CheckoutItemContainer,
  CheckoutImageContainer,
  CheckoutQuantityContainer,
  CheckoutDataContainers,
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
      <CheckoutDataContainers>
        <p>{name}</p>
      </CheckoutDataContainers>
      <CheckoutQuantityContainer>
        <CheckoutQuantityArrows onClick={decreaseItemQuantityHandler}>
          &#10094;
        </CheckoutQuantityArrows>
        <span>{quantity}</span>
        <CheckoutQuantityArrows onClick={increaseItemQuantityHandler}>
          &#10095;
        </CheckoutQuantityArrows>
      </CheckoutQuantityContainer>

      <CheckoutDataContainers>
        <p>{price}</p>
      </CheckoutDataContainers>
      <CheckoutRemoveButton onClick={removeItemCheckoutHandler}>&#10005;</CheckoutRemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
