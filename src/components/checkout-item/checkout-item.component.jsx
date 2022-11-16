import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price, id } = cartItem;

  const { increaseItemQuantity, decreaseItemQuantity, removeItem } = useContext(CartContext);

  const increaseItemQuantityHandler = () => increaseItemQuantity(id);
  const decreaseItemQuantityHandler = () => decreaseItemQuantity(id);
  const removeItemCheckoutHandler = () => removeItem(id);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <div className="name">
        <p>{name}</p>
      </div>
      <div className="quantity">
        <button className="arrow" onClick={decreaseItemQuantityHandler}>
          &#10094;
        </button>
        <span className="value">{quantity}</span>
        <button className="arrow" onClick={increaseItemQuantityHandler}>
          &#10095;
        </button>
      </div>
      <div className="price">
        <p>{price}</p>
      </div>
      <button className="remove-button" onClick={removeItemCheckoutHandler}>
        &#10005;
      </button>
    </div>
  );
};

export default CheckoutItem;
