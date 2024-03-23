import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeC from "./navComponents/home";

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomeC />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterComponent;
