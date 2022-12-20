import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import PaymentForm from "../../components/payment-form/payment-form.component";
import Footer from "../../components/footer/footer.component";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  CheckoutItems,
  CheckoutPrice,
} from "./checkout.styles";
import { Fragment } from "react";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  // Grab the cart items from context

  return (
    <Fragment>
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
        <PaymentForm></PaymentForm>
      </CheckoutContainer>

      <Footer></Footer>
    </Fragment>
  );
};

export default Checkout;
