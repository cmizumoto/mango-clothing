import { useState } from "react";
import { useSelector } from "react-redux";

import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";

// https://stripe.com/docs/stripe-js/react#available-element-components
// Other elements we can bring from stripe
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { PaymentFormContainer, FormContainer, PaymentButton } from "./payment-form.styles";

const PaymentForm = () => {
  /* 
        Here we import the methods from react stripe, like a hook
        Elements is wrapped in our APP, so we can access ex: card information
    */
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);

  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true);

    // We fetch an intent to create payment with the amount
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // we multiply by 100 to match the expected value in stripe's end
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());

    // destructure the client secred that we get from the fetch above
    const {
      paymentIntent: { client_secret },
    } = response;

    console.log(client_secret);

    // Now we store the payment result, using confirmCardPayment with the secred above and an object with the card information
    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        // Check stripe docs for more fields and configs
        // https://stripe.com/docs/js/payment_intents/confirm_card_payment
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful");
      }
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Creadit Card Payment</h2>
        <CardElement></CardElement>
        <PaymentButton buttonType={BUTTON_TYPE_CLASSES.inverted} isLoading={isProcessingPayment}>
          Buy now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
