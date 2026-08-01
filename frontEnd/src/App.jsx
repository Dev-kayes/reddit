import React from "react";
import UserLayoOut from "./components/Layout/UserLayoOut";
import { Route, Routes } from "react-router";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserLayoOut />}>
          {/* user layout */}
        </Route>
        <Route>{/* admin layout */}</Route>
      </Routes>
    </>
  );
};

export default App;
