import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import SearchByPlot from "../routes/SearchByPlot";
import Home from "../routes/Home";

const RouteManager = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="searchbyplot" element={<SearchByPlot />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteManager;
