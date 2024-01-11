"use client";

import { MdLightMode, MdDarkMode } from "react-icons/md"; //🌑🌑[DARK MODE]🌑🌑
import { useTheme } from "next-themes"; //🌑🌑[DARK MODE]🌑🌑
import { useEffect, useState } from "react";

export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false); // possible to need this, but will work also without it
  const currentTheme = theme === "system" ? systemTheme : theme; //here we sett the theme 'system' is from 'systemThem' from above
  useEffect(() => setMounted(true), []); // also possible not to need this 'useEffect', it should work even without it
  // ❗❗❗NOTE❗❗❗ the Dark Mode will work even without the 2 HOOKS [mounted, setMounted] and 'userEffect(()=>setMounted)', also need to erase the {mounted && (...this code NO...)}, just the 'mounted && ...'

  return (
    <div>
      {mounted &&
        (currentTheme === "dark" ? (
          <MdLightMode
            onClick={() => setTheme("light")}
            className="text-xl cursor-pointer hover:text-amber-500"
          />
        ) : (
          <MdDarkMode
            onClick={() => setTheme("dark")}
            className="text-xl cursor-pointer hover:text-amber-500"
          />
        ))}
    </div>
  ); //🌑🌑[DARK MODE]🌑🌑 this must be imported inside of our [Header.jsx]
}
