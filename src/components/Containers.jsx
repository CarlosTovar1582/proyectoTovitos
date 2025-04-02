import React from "react";
import { Button } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { Link } from "react-router-dom";

const items = [
  { id: 1, codigo: 1, descripcion: "CONJUNTOS" },
  { id: 2, codigo: 2, descripcion: "PANTALONES" },
  { id: 3, codigo: 3, descripcion: "SHORTS" },
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
          <Link to={"/Containers/" + item.id} key={item.id}>
            <Button className="w-full  shadow-xl mt-10 shadow-blue-600 outline outline-black/5 ">
              <li
                key={item.id}
                className="overflow-hidden ml-4 mr-4 px-4 
             text-center text-black  text-3xl font-DynaPuff  drop-shadow-[0_1.9px_9.2px_rgba(0,0,0,0.8)]
            "
              >
                {" "}
                {item.descripcion}
              </li>
            </Button>
          </Link>
        ))}
      </ul>
    </div>
  );
}
