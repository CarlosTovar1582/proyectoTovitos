import { useState } from "react";
import Header from "./components/Header";
import SliderPrincipal from "./components/SliderPrincipal";
import Footers from "./components/Footers";
import Cards from "./components/Cards";
import Containers from "./components/Containers";
import Division from "./components/Division";

function App() {
  return (
    <>
      <Header />
      <Division />
      <Containers />   
         
      <Footers/>
      
    
    </>
  );
}

export default App;
