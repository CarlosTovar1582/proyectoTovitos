import React from "react";
import { Button } from "rsuite";
import "rsuite/dist/rsuite.min.css";

const items = [
  { id: 1, descripcion: "CASACAS" },
  { id: 2, descripcion: "PANTALONES" },
  { id: 3, descripcion: "CONJUNTOS" },
  { id: 4, descripcion: "POLOS" },
  // More items...
];

export default function Containers() {
  return (
    <div
      style={{
        backgroundImage: `url("https://i.postimg.cc/RhMc5JvP/Logo-Fondo1.png")`,
      }}
    >
      <ul role="list" className="space-y-6  pl-6 pr-6 pb-32 rounded-3xl ">
        {items.map((item) => (
          <Button
            key={item.id}
            className="w-full  shadow-xl mt-32 shadow-blue-600 outline outline-black/5 "
          >
            <li
              key={item.id}
              className="overflow-hidden ml-4 mr-4 px-4 
             text-center text-black  text-2xl font-semibold  drop-shadow-[0_1.9px_4.2px_rgba(0,0,0,0.8)]
            "
            >
              {" "}
              {item.descripcion}
            </li>
          </Button>
        ))}
      </ul>
    </div>
  );
}
