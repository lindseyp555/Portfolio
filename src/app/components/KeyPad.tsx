"use client";

export default function KeyPad() {
  return (
    <div className="mt-6 flex justify-center gap-4">
      {Array.from({ length: 9 }, (_, i) => (
        <button
          key={i}
          className="w-10 h-10 rounded bg-gray-300 text-white hover:bg-gray-500 focus:outline-none"
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}