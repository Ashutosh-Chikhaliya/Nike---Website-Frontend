import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  cart: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "UPDATE_CART":
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product, quantity) => {
    const existingItemIndex = state.cart.findIndex(
      (item) => item.id === product.id
    );

    if (existingItemIndex !== -1) {
      // If the item already exists in the cart, update its quantity
      const updatedCart = [...state.cart];
      updatedCart[existingItemIndex].quantity += quantity;
      dispatch({ type: "UPDATE_CART", payload: updatedCart });
    } else {
      // If the item is not in the cart, add it
      const newItem = { ...product, quantity };
      dispatch({ type: "ADD_TO_CART", payload: newItem });
    }
  };

  return (
    <CartContext.Provider value={{ cart: state.cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

export { CartProvider };
