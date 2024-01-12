import React from "react";
import NavbarItem from "./NavbarItem";

//🏮🏮[NAVBAR]🏮🏮 now we must pass the Props in the 'NavbarItem.jsx' file
export default function Navbar() {
  return (
    <div className="flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-10">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  ); //here 'dark:bg-amber-600' this will apply that collor only on the dark mode
}
