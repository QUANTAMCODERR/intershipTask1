import { useState } from "react";

export default function Filters() {

  const ranges = [
    "All","00-09","10-19","20-29","30-39",
    "40-49","50-59","60-69","70-79","80-89","90-99"
  ];

  const [selectedRange, setSelectedRange] = useState("All");

  return (
    <div className="bg-gray-800 p-2">

      {/* ⭐ MOBILE VIEW ONLY */}
      <div className="grid grid-cols-3 gap-2 sm:hidden">
        {ranges.map(range => {
          const isActive = selectedRange === range;

          return (
            <button
              key={range}
              onClick={() => setSelectedRange(range)}
              className={`py-1 rounded text-xs transition w-full
                ${isActive
                  ? "bg-black text-white"
                  : "bg-blue-600 text-white"
                }
              `}
            >
              {range}
            </button>
          );
        })}

        {/* Mobile Checkboxes */}
        <div className="col-span-3 flex justify-center gap-3 text-xs mt-1">
          {["EVEN","ODD","CP","FP"].map(label => (
            <label key={label} className="flex items-center gap-1 text-white">
              <input type="checkbox" />
              {label}
            </label>
          ))}
        </div>
      </div>


      {/* ⭐ ORIGINAL DESKTOP VIEW (UNCHANGED) */}
      <div className="hidden sm:flex flex-wrap gap-2">

        {ranges.map(range => {

          const isActive = selectedRange === range;

          return (
            <button
              key={range}
              onClick={() => setSelectedRange(range)}
              className={`px-3 py-1 rounded text-sm transition
                ${isActive
                  ? "bg-black text-white"
                  : "bg-blue-600 text-white hover:bg-blue-700"
                }
              `}
            >
              {range}
            </button>
          );
        })}

        {/* Desktop Checkboxes */}
        <div className="ml-auto flex gap-3 items-center text-sm">
          {["EVEN","ODD","CP","FP"].map(label => (
            <label key={label} className="flex items-center gap-1 cursor-pointer text-white">
              <input type="checkbox" />
              {label}
            </label>
          ))}
        </div>

      </div>

    </div>
  );
}
