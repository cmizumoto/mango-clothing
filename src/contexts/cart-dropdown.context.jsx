import { useEffect } from "react";
import { createContext, useState } from "react";

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

const totalItems = (cartItems) => {
  const newTotal = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
  return newTotal;
};

export const CartDropdownContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  itemQuantity: 0,
  addItemToCart: () => {},
});

export const CartDropdownProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [itemQuantity, setitemQuantity] = useState(0);

  useEffect(() => {
    setitemQuantity(totalItems(cartItems));
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, itemQuantity };

  return <CartDropdownContext.Provider value={value}>{children}</CartDropdownContext.Provider>;
};
