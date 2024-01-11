"use client"; //🌑🌑[DARK MODE]🌑🌑 making the file able to interract with the user and not be static/server side

import { ThemeProvider } from "next-themes"; //🌑🌑[DARK MODE]🌑🌑

export default function Provider({ children }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="text-gray-700 dark:text-gray-200 dark:bg-gray-700 min-h-screen select-none transition-colors duration-300">
        {children}
      </div>
    </ThemeProvider>
  ); //🌑🌑[DARK MODE]🌑🌑 now we must export this <ThemeProvider>...</ThemeProvider> in the 'layout.js' file and wrap everything from there. NextJS will know that the <Provider>...</Provider> is 'client side' and the interior off it is 'server side' and will keep them sepparate
}
