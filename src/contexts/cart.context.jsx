/* 
  Redux took place of this functionality, there is no need to keep this file, but leaving it for studies purpouse.
*/

import { createContext, useReducer } from "react";

import { createAction } from "../utils/reducer/reducer.utils";

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

/* 
  Context block
*/
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  itemQuantity: 0,
  cartTotal: 0,
  addItemToCart: () => {},
  increaseItemQuantity: () => {},
  decreaseItemQuantity: () => {},
  removeItem: () => {},
});

const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  itemQuantity: 0,
  cartTotal: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };

    case "REMOVE_ITEM":
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [{ isCartOpen, cartItems, itemQuantity, cartTotal }, dispatch] = useReducer(
    cartReducer,
    INITIAL_STATE
  );

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);

    const newCartTotal = newCartItems.reduce((total, item) => {
      return total + item.quantity;
    }, 0);

    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems,
        cartTotal: newCartCount,
        itemQuantity: newCartTotal,
      })
    );
  };

  const setIsCartOpen = (bool) => {
    dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };
  const increaseItemQuantity = (id) => {
    const newCartItems = increaseQuantity(cartItems, id);
    updateCartItemsReducer(newCartItems);
  };
  const decreaseItemQuantity = (id) => {
    const newCartItems = descreaseQuantity(cartItems, id);
    updateCartItemsReducer(newCartItems);
  };
  const removeItem = (id) => {
    const newCartItems = removeFromCart(cartItems, id);
    updateCartItemsReducer(newCartItems);
  };

  const value = {
    isCartOpen,
    cartItems,
    itemQuantity,
    cartTotal,
    setIsCartOpen,
    addItemToCart,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
