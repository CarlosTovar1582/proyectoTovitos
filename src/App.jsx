import { useState } from "react";
import Header from "./components/Header";
import SliderPrincipal from "./components/SliderPrincipal";
import Footers from "./components/Footers";
import Cards from "./components/Cards";
import Containers from "./components/Containers";
import Division from "./components/Division";
import ContainersSalditos from "./components/ContainersSalditos";

function App() {
  return (
    <>
      <Header />
      
      <Containers />   
     
      <ContainersSalditos />            
      <Footers/>
      
    
    </>
  );
}

export default App;
