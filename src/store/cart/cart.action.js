import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setIsCartOpen = (boolean) => {
  return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);
};

export const setCartItems = (cartArray) => {
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartArray);
};

const addCartItem = (cartItems, productToAdd) => {
  let newCart = null;
  // find if cart items contains productToAdd
  const indexCartItem = cartItems.findIndex((item) => {
    return item.id === productToAdd.id;
  });
  // if found, increment quantity
  if (indexCartItem !== -1) {
    newCart = [...cartItems];
    newCart[indexCartItem].quantity++;
  } else {
    newCart = [...cartItems, { ...productToAdd, quantity: 1 }];
  }

  return newCart;
};

/* 
  Buttons for checkout
*/
const increaseQuantity = (cartItems, id) => {
  let newCart = [...cartItems];
  const selectedItemIndex = cartItems.findIndex((item) => item.id === id);
  newCart[selectedItemIndex].quantity++;
  return newCart;
};

const descreaseQuantity = (cartItems, id) => {
  let newCart = [...cartItems];
  const selectedItemIndex = cartItems.findIndex((item) => item.id === id);

  const item = newCart[selectedItemIndex];

  item.quantity--;
  if (item.quantity < 1) {
    newCart = newCart.filter((cartElement) => cartElement.id !== id);
    return newCart;
  }
  return newCart;
};

const removeFromCart = (cartItems, id) => {
  const newCart = cartItems.filter((item) => item.id !== id);
  return newCart;
};

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const increaseItemQuantity = (cartItems, id) => {
  const newCartItems = increaseQuantity(cartItems, id);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const decreaseItemQuantity = (cartItems, id) => {
  const newCartItems = descreaseQuantity(cartItems, id);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const removeItemFromCart = (cartItems, id) => {
  const newCartItems = removeFromCart(cartItems, id);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
