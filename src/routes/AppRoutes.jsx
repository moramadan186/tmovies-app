import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Category from "../pages/Category";
import Detail from "../pages/detail/Detail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/:category/search/:keyword" element={<Category />} />
      <Route path="/:category/:id" element={<Detail />} />
      <Route path="/:category" element={<Category />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
