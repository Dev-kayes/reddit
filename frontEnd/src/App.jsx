import React from "react";
import UserLayoOut from "./components/Layout/UserLayoOut";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CollectionPage from "./pages/CollectionPage";
import ProductDetails from "./products/ProductDetails";
import CheckOut from "./components/Cart/CheckOut";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";

const App = () => {
  return (
    <>
      <Routes>
        {/* user layout */}
        <Route path="/" element={<UserLayoOut />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="collections/:collection" element={<CollectionPage />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="checkOut" element={<CheckOut />} />
          <Route
            path="orderConfirmationPage"
            element={<OrderConfirmationPage />}
          />
        </Route>
        <Route>{/* admin layout */}</Route>
      </Routes>
    </>
  );
};

export default App;
