import Link from "next/link";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai"; //🎧🎧[META-DATA]🎧🎧
import { BsFillInfoCircleFill } from "react-icons/bs"; //🎧🎧[META-DATA]🎧🎧

//🎧🎧[META-DATA]🎧🎧
function Header() {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <div className="flex gap-4">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        {/* now we need to import/pass those PROPS in the 'MenuItem' */}
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <Link href={"/"} className="flex gap-1 items-center">
        <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">
          IMDb
        </span>
        <span className="text-xl hidden sm:inline">Clone</span>
      </Link>
    </div>
  );
}

export default Header;
//🎧🎧[META-DATA]🎧🎧 now we need to import this file in the [SRC/APP/layout.js] file
