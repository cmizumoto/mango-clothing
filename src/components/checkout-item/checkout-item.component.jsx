import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  increaseItemQuantity,
  decreaseItemQuantity,
  removeItemFromCart,
} from "../../store/cart/cart.action";

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

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const increaseItemQuantityHandler = () => dispatch(increaseItemQuantity(cartItems, id));
  const decreaseItemQuantityHandler = () => dispatch(decreaseItemQuantity(cartItems, id));
  const removeItemFromCartCheckoutHandler = () => dispatch(removeItemFromCart(cartItems, id));

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
      <CheckoutRemoveButton onClick={removeItemFromCartCheckoutHandler}>
        &#10005;
      </CheckoutRemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
