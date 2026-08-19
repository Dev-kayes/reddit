import React from "react";
import UserLayoOut from "./components/Layout/UserLayoOut";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

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
        </Route>
        <Route>{/* admin layout */}</Route>
      </Routes>
    </>
  );
};

export default App;
