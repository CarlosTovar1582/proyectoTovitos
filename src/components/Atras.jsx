import React from "react";
import { Divider } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { Link } from "react-router-dom";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
export default function Atras() {
  return (
    <div className=" col-span-3 lg:col-span-2 content-center ...   flex  justify-center">
      <Link to={"/Containers/"}>
        <ArrowUturnLeftIcon
          className="flex h-14 w-14 font-bold bg-black text-white rounded-full "
          aria-hidden="true"
        />
      </Link>
    </div>
  );
}
