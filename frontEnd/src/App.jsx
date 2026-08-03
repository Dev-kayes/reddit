import React from "react";
import UserLayoOut from "./components/Layout/UserLayoOut";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserLayoOut />}>
          {/* user layout */}
          <Route index element={<Home />}></Route>
        </Route>
        <Route>{/* admin layout */}</Route>
      </Routes>
    </>
  );
};

export default App;
