import React from "react";
import { Divider } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className=" col-span-3 lg:col-span-2 content-center ...  pt-6 pl-2 pr-2">
      <Link to={"/Containers/"}>
        <img
          src="https://i.postimg.cc/qB3G1NG7/Logo6.png"
          className="h-auto max-w-full object-cover  "
          alt="Flowbite Logo"
        />
      </Link>
    </div>
  );
}
