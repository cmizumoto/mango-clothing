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

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [itemQuantity, setItemQuantity] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newTotal = cartItems.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
    setItemQuantity(newTotal);
  }, [cartItems]);

  useEffect(() => {
    const sumTotal = cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    setCartTotal(sumTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const increaseItemQuantity = (id) => {
    setCartItems(increaseQuantity(cartItems, id));
  };
  const decreaseItemQuantity = (id) => {
    setCartItems(descreaseQuantity(cartItems, id));
  };
  const removeItem = (id) => {
    setCartItems(removeFromCart(cartItems, id));
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
