"use client"
import KeyPad from "../components/KeyPad"

export default function Page() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-10">
        <div className="grid grid-cols-9 grid-rows-9 gap-0">
          {Array.from({ length: 81 }).map((_, i) => {
            const row = Math.floor(i / 9);
            const col = i % 9;
  
            const isTop = row % 3 === 0;
            const isLeft = col % 3 === 0;
            const isBottom = row === 8;
            const isRight = col === 8;
  
            const borderClasses = [
              "border",
              "border-gray-500",
              isTop ? "border-t-4" : "",
              isLeft ? "border-l-4" : "",
              isBottom ? "border-b-4" : "",
              isRight ? "border-r-4" : "",
            ].join(" ");
  
            return (
              <div
                key={i}
                className={`w-12 h-12 flex items-center justify-center bg-white ${borderClasses}`}
              >
                {i + 1}
              </div>
            );
          })}
        </div>
        <KeyPad />
      </div>
    );
  }