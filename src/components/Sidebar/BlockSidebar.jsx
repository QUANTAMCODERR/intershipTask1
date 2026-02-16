import { useState } from "react";

export default function BlockSidebar() {
  const blocks = [
    "All",
    "1000-1099",
    "1100-1199",
    "1200-1299",
    "1300-1399",
    "1400-1499",
    "1500-1599",
    "1600-1699",
    "1700-1799",
    "1800-1899",
    "1900-1999",
  ];

  const [selected, setSelected] = useState("All");

  return (
    <>
      {/* ⭐⭐⭐ MOBILE VIEW (UNCHANGED) ⭐⭐⭐ */}
      <div className="flex flex-col w-full bg-white space-y-[1.3px] overflow-y-auto sm:hidden">
        {blocks.map((block) => {
          const isActive = selected === block;

          return (
            <button
              key={block}
              onClick={() => setSelected(block)}
              className={`relative flex items-center px-3 py-[4.4px] rounded-full transition w-full text-xs
                ${isActive ? "bg-black text-white" : "bg-blue-900 text-white"}
              `}
            >
              <input
                type="checkbox"
                checked={isActive}
                readOnly
                className="accent-white w-3 h-2.5 z-50"
              />

              <span className="absolute left-[60%] -translate-x-1/2 max-w-[70%] truncate text-center">
                {block}
              </span>
            </button>
          );
        })}
      </div>

      {/* ⭐⭐⭐ DESKTOP VIEW — RESPONSIVE SHRINKING ⭐⭐⭐ */}
      <div
        className="
    hidden sm:flex flex-col
    shrink-0
    w-[clamp(9.7rem,14vw,rem)]
    min-w-24
    bg-white
    px-[0.05vw]
    space-y-0.5
    overflow-y-hidden
    
  "
      >
        {blocks.map((block) => {
          const isActive = selected === block;

          return (
            <button
              key={block}
              onClick={() => setSelected(block)}
              className={`relative flex items-center text-xs md:text-sm lg:text-lg  px-3 py-[1.03vh] rounded-full transition w-full
                ${
                  isActive
                    ? "bg-black text-white"
                    : "bg-blue-900 text-white hover:bg-blue-600"
                }
              `}
            >
              <input
                type="checkbox"
                checked={isActive}
                readOnly
                className="accent-white w-4 h-[3.1vh]  z-10"
              />

              <span className="absolute left-1/2 -translate-x-1/2 max-w-[70%] truncate text-center">
                {block}
              </span>
            </button>
          );
        })}
      </div>
    </>
  );
}
