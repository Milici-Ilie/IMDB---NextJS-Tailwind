import Link from "next/link";
// import React from "react";

export default function MenuItem({ title, address, Icon }) {
  return (
    <Link href={address} className="hover:text-amber-500">
      <Icon className="text-2xl sm:hidden" />
      {/* here with 'hidden' we create the Media Querie for different screens*/}
      <p className="uppercase hidden sm:inline text-sm">{title}</p>
    </Link>
  ); //🎧🎧[META-DATA]🎧🎧 we use 'Link' from 'NextJS' to navigate easyer between files/pages // ==== // NOTE!! here we did the Icon and text responsive/ media querie to the screen size, check the 'className' from above
}
