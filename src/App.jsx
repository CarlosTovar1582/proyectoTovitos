import { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import SliderPrincipal from "./components/SliderPrincipal";
import Footers from "./components/Footers";
import Cards from "./components/Cards";
import Containers from "./components/Containers";
import Division from "./components/Division";
import ContainersSalditos from "./components/ContainersSalditos";

import Products from "./components/Products";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Division />

        <Routes>
          <Route path="/" element={<Containers />} />
          <Route path="/Containers" element={<Containers />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Containers/:id" element={<Products />} />
        </Routes>
        <Division />
        <Footers />
      </BrowserRouter>
    </>
  );
}

export default App;
