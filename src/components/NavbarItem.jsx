"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

//🏮🏮[NAVBAR]🏮🏮
export default function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre"); //when the 'genre' will be visible by {useSearchParams} we will be able to select that element and style it

  return (
    <div>
      <Link
        className={`hover:text-amber-600 font-semibold ${
          genre === param
            ? " underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg  "
            : ""
        }`}
        // 🏮🏮[NAVBAR]🏮🏮here we created a Dynamic selection for our Style depending on what element is selected/ NOTE!!! this is related with the URL, detecting what element is active and where to display style, for this we need '{useSearchParams}' from above according with the variables
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  ); //🏮🏮[NAVBAR]🏮🏮 here we created a Dynamic 'link'/URL, the `/?genre=` is a name that we choose and the dynamic name depending on the page is ${param} wich is given from 'Navbar.jsx' file
}
