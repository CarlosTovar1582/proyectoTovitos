import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
const products = [
  {
    id: 1,
    grupo: 1,
    name: "Casaca Jeans Modelo 1",
    href: "#",
    price: "$13",
    description: "3 sizes available",
    imageSrc:
      "https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-01-image-card-01.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 2,
    grupo: 1,
    name: "Casaca Jeans Modelo 2",
    href: "#",
    price: "$64",
    description: "Walnut",
    imageSrc:
      "https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-01-image-card-02.jpg",
    imageAlt: "Paper card sitting upright in walnut card holder on desk.",
  },

  // More products...
];

export default function Products() {
  const params = useParams();
  return (
    <div
      style={{
        backgroundImage: `url("https://i.postimg.cc/RhMc5JvP/Logo-Fondo1.png")`,
      }}
    >
      <div>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h1
            id="products-heading"
            className="text-center pb-10 font-Concert-One text-6xl"
          >
            {"1" == params.id ? "Casacas" : null}
            {"2" == params.id ? "Pantalones" : null}
            {"3" == params.id ? "Conjuntos" : null}
            {"4" == params.id ? "Polos" : null}
          </h1>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="aspect-square w-full overflow-hidden rounded-lg object-cover group-hover:opacity-75 sm:aspect-2/3"
                />
                <div className="mt-4 flex items-center justify-center  text-base font-DynaPuff text-blue-600">
                  <h5>{product.name}</h5>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
