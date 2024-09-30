import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  LoginPage,
  MenPage,
  SignupPage,
  WomenPage,
  KidsPage,
  WishlistPage,
  CartPage,
  HomePage,
  ProductdetailsPage,
  CheckoutPage,
} from "./Routes.js";
import Navbar from "../src/layouts/Navbar";
import { WishlistProvider } from "./context/WishlistContext";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <WishlistProvider>
        <CartProvider>
          <Navbar />
          <Routes>
            toast.configure();
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/Sign-up" element={<SignupPage />} />
            <Route path="/men" element={<MenPage />} />
            <Route path="/women" element={<WomenPage />} />
            <Route path="/Kids" element={<KidsPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route
              path="/product/:productId"
              element={<ProductdetailsPage />}
            />
          </Routes>
        </CartProvider>
      </WishlistProvider>
    </BrowserRouter>
  );
}

export default App;
