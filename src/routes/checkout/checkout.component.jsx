import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  CheckoutItems,
  CheckoutPrice,
} from "./checkout.styles";

const Checkout = () => {
  // Grab the cart items from context
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      <CheckoutItems>
        {cartItems.map((item) => (
          <CheckoutItem cartItem={item} key={item.id} />
        ))}
      </CheckoutItems>
      <CheckoutPrice>{<p>Total: {`$${cartTotal}`}</p>}</CheckoutPrice>
    </CheckoutContainer>
  );
};

export default Checkout;
