import React from "react";

const people = [
  {
    name: "Casacas",
    //role: 'Senior Designer',
    imageUrl: "https://i.postimg.cc/25vstTTy/Salditos.png",
    xUrl: "#",
    linkedinUrl: "#",
  },
  // More people...
];

export default function ContainersSalditos() {
  return (
    <div className="bg-black py-10 sm:py-32 rounded-2xl ">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-4xl font-semibold   text-white sm:text-5xl">
            SALDOS
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
        >
          {people.map((person) => (
            <li key={person.name} className="rounded-2xl bg-white px-8 py-10">
              <img
                alt=""
                src={person.imageUrl}
                className="mx-auto size-48 rounded-3xl md:size-56"
              />
              <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-white"></h3>
              <p className="text-sm/6 text-gray-400">{person.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
