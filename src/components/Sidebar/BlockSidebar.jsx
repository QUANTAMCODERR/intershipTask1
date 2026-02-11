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
      {/* ⭐ MOBILE VIEW ONLY */}
      <div className="grid grid-cols-2 gap-2 p-2 bg-white sm:hidden">
        {blocks.map(block => {
          const isActive = selected === block;

          return (
            <button
              key={block}
              onClick={() => setSelected(block)}
              className={`py-2 rounded-md text-xs transition w-full
                ${isActive
                  ? "bg-black text-white"
                  : "bg-blue-700 text-white"
                }
              `}
            >
              {block}
            </button>
          );
        })}
      </div>

      {/* ⭐ ORIGINAL DESKTOP SIDEBAR (UNCHANGED) */}
      <div className="hidden sm:flex sm:flex-col sm:w-52 bg-white p-2 space-y-2 overflow-y-auto">
        {blocks.map(block => {

          const isActive = selected === block;

          return (
            <button
              key={block}
              onClick={() => setSelected(block)}
              className={`text-center py-3 rounded-md transition
                ${isActive 
                  ? "bg-black text-white"
                  : "bg-blue-700 text-white hover:bg-blue-600"
                }
              `}
            >
              {block}
            </button>
          );
        })}
      </div>
    </>
  );
}
