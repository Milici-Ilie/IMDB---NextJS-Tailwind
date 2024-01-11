import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; //🎧🎧[META-DATA]🎧🎧 this is imported down 👇in the <body>...here...</body>

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB Clone",
  description: "This is a movie database clone",
}; //ⓂⓂ[META-DATA]ⓂⓂ === ⓂⓂ[META-DATA]ⓂⓂ

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
