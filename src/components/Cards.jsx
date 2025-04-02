import React from "react";

export default function Cards() {
  return (
    <div className=" rounded-lg bg-rose-900 shadow-sm">
      <div className="px-4 py-5 sm:px-6">
        Hola
        {/* Content goes here */}
        {/* We use less vertical padding on card headers on desktop than on body sections */}
      </div>
      <div className="bg-slate-800 px-4 py-5 sm:p-6">
        {/* Content goes here */}
        Hola como estas sujetyos
      </div>
    </div>
  );
}
