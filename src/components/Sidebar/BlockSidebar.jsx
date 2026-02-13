import { useState } from "react";

export default function BlockSidebar() {

  const blocks = [
    "All",
    "1000-1099","1100-1199","1200-1299","1300-1399",
    "1400-1499","1500-1599","1600-1699","1700-1799",
    "1800-1899","1900-1999"
  ];

  const [selected, setSelected] = useState("All");

  return (
    <>
      {/* ⭐⭐⭐ MOBILE VIEW (SMALL SIZE) ⭐⭐⭐ */}
      <div className="flex flex-col w-full bg-white  space-y-1 overflow-y-auto sm:hidden">

        {blocks.map(block => {

          const isActive = selected === block;

          return (
            <button
              key={block}
              onClick={() => setSelected(block)}
              className={`relative flex items-center px-3 py-[5px] rounded-full transition w-full text-xs
                ${isActive 
                  ? "bg-black text-white"
                  : "bg-blue-700 text-white"
                }
              `}
            >
              {/* Small checkbox */}
              <input
                type="checkbox"
                checked={isActive}
                readOnly
                className="accent-white w-3 h-3 z-10 left-0  "
              />

              {/* Center text */}
              <span className="absolute left-[60%] -translate-x-1/2 max-w-[70%] truncate text-center">
                {block}
              </span>
            </button>
          );
        })}

      </div>


      {/* ⭐⭐⭐ DESKTOP VIEW (UNCHANGED — YOUR ORIGINAL UI) ⭐⭐⭐ */}
      <div className="hidden sm:flex flex-col w-full sm:w-55 bg-white p-2 space-y-1 overflow-y-auto">

        {blocks.map(block => {

          const isActive = selected === block;

          return (
            <button
              key={block}
              onClick={() => setSelected(block)}
              className={`relative flex items-center px-4 py-4 rounded-full transition w-full
                ${isActive 
                  ? "bg-black text-white"
                  : "bg-blue-700 text-white hover:bg-blue-600"
                }
              `}
            >
              <input
                type="checkbox"
                checked={isActive}
                readOnly
                className="accent-white w-4 h-4 z-10"
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
