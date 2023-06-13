import React from "react";
import { Route, Routes } from "react-router-dom";
import AllPage from "../pages/all";
import YourPage from "../pages/your";
import BlockedPage from "../pages/blocked";
import Layout from "../Layout";
import { Navigation } from "react-router-dom";
function Myrouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Navigation to="/all" />} />
        <Route path="/all" element={<AllPage />} />
        <Route path="/your" element={<YourPage />} />
        <Route path="/blocked" element={<BlockedPage />} />
      </Route>
    </Routes>
  );
}

export default Myrouter;
