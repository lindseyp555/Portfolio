import Image from "next/image";
//@ts-ignore
import backgroundImage from "./wallpaper.jpg";
import { Noto_Serif } from "next/font/google"
import Link from "next/link"

const notoSerif = Noto_Serif({subsets : ["latin"]});


export default function HomePage() {
  return (
    <div className="relative h-screen w-screen">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="Background"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Blue Top Bar */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-blue-800 z-10 flex items-center justify-between text-white text-4xl font-bold shadow-md pl-35 pr-35">
        <div>Lindsey Peterson</div>
        <Link href="/Sudoku" className="hover:underline font-normal text-2xl">
          Sudoku
        </Link>
      </div>
    </div>
  );
}
