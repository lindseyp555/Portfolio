"use client";

export default function KeyPad() {
  return (
    <div className="mt-6 flex flex-col items-center gap-4">
    <div className="flex gap-4">
      {Array.from({ length: 9 }, (_, i) => (
        <button
          key={i}
          className="w-10 h-10 rounded bg-gray-300 text-white hover:bg-gray-500 focus:outline-none"
        >
          {i + 1}
        </button>
      ))}
    </div>
    <div className="flex gap-4">
        <button
            key = {"reset"}
            className="w-15 h-10 rounded bg-gray-300 text-white hover:bg-gray-500 focus:outline-none"
        >
            Reset
        </button>
        <button
            key = {"new puzzle"}
            className="w-30 h-10 rounded bg-gray-300 text-white hover:bg-gray-500 focus:outline-none"
        >
            New Puzzle
        </button>
    </div>
    </div>
  );
}