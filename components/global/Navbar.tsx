import Link from "next/link";
import React from "react";
import { routes } from "@/data/global";

function Navbar({ currentPage }) {
  return (
    <nav className="navbar flex items-center justify-between">
      <li className="list-none font-bold text-lg cursor-pointer">
        <Link href="/">
          <div className="flex justify-center items-center">
            <img
              className="mr-2 transform scale-150 hover:rotate-360 transition-transform duration-500"
              src="/static/logos/logo_full.svg"
              width="250"
            />
          </div>
        </Link>
      </li>
      <ul className="flex items-center space-x-10">
        {routes.map((item, index) => {
          return (
            <li
              key={index}
              className={`list-none text-white ${currentPage === item.title
                ? "opacity-100"
                : "opacity-40 hover:opacity-100 transition-opacity"
                }`}
            >
              <Link href={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
