import { CategoryItem } from "../categories/category.types";
import { CART_ACTION_TYPES, CartItem } from "./cart.types";
import {
  createAction,
  withMatcher,
  Action,
  ActionWithPayload,
} from "../../utils/reducer/reducer.utils";

export type SetIsCartOpen = ActionWithPayload<CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean>;

export type SetCartItems = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItem[]>;

export const setIsCartOpen = withMatcher((boolean: boolean): SetIsCartOpen => {
  return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);
});

export const setCartItems = withMatcher((cartArray: CartItem[]): SetCartItems => {
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartArray);
});

export type ProductToAdd = {
  name: string;
  imageUrl: string;
  quantity: number;
  price: number;
};

const addCartItem = (cartItems: CartItem[], productToAdd: CategoryItem): CartItem[] => {
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
const increaseQuantity = (cartItems: CartItem[], id: number): CartItem[] => {
  let newCart = [...cartItems];
  const selectedItemIndex = cartItems.findIndex((item) => item.id === id);
  newCart[selectedItemIndex].quantity++;
  return newCart;
};

const descreaseQuantity = (cartItems: CartItem[], id: number): CartItem[] => {
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

const removeFromCart = (cartItems: CartItem[], id: number): CartItem[] => {
  const newCart = cartItems.filter((item) => item.id !== id);
  return newCart;
};

export const addItemToCart = (cartItems: CartItem[], productToAdd: CategoryItem) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};
export const increaseItemQuantity = (cartItems: CartItem[], id: number) => {
  const newCartItems = increaseQuantity(cartItems, id);
  return setCartItems(newCartItems);
};
export const decreaseItemQuantity = (cartItems: CartItem[], id: number) => {
  const newCartItems = descreaseQuantity(cartItems, id);
  return setCartItems(newCartItems);
};
export const removeItemFromCart = (cartItems: CartItem[], id: number) => {
  const newCartItems = removeFromCart(cartItems, id);
  return setCartItems(newCartItems);
};
