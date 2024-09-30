// WishlistContext.js
import React, { createContext, useContext, useReducer } from "react";

const WishlistContext = createContext();

export const useWishlist = () => {
  return useContext(WishlistContext);
};

const initialState = {
  wishlist: [],
};

const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return { ...state, wishlist: [...state.wishlist, action.payload] };
    default:
      return state;
  }
};

export const WishlistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wishlistReducer, initialState);

  const addToWishlist = (product) => {
    dispatch({ type: "ADD_TO_WISHLIST", payload: product });
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist: state.wishlist, addToWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
