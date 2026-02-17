import React, { useState } from "react";

const ranges = [
  { label: "All", start: 1000, end: 1999 },
  { label: "1000-1099", start: 1000, end: 1099 },
  { label: "1100-1199", start: 1100, end: 1199 },
  { label: "1200-1299", start: 1200, end: 1299 },
  { label: "1300-1399", start: 1300, end: 1399 },
  { label: "1400-1499", start: 1400, end: 1499 },
  { label: "1500-1599", start: 1500, end: 1599 },
  { label: "1600-1699", start: 1600, end: 1699 },
  { label: "1700-1799", start: 1700, end: 1799 },
  { label: "1800-1899", start: 1800, end: 1899 },
  { label: "1900-1999", start: 1900, end: 1999 },
];

const rows = Array.from({ length: 10 }, (_, i) => ({
  label: `F${i}`,
  index: i,
}));

export default function NumberGridSection() {
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [activeRange, setActiveRange] = useState("All");

  const toggleNumber = (num) => {
    setSelectedNumbers((prev) =>
      prev.includes(num)
        ? prev.filter((n) => n !== num)
        : [...prev, num]
    );
  };

  const isVisible = (num) => {
    const range = ranges.find((r) => r.label === activeRange);
    return num >= range.start && num <= range.end;
  };

  return (
    <div className="w-full bg-white flex justify-center">
      <div className="w-full max-w-350 flex items-stretch bg-gray-200">

        {/* LEFT SIDEBAR */}
        <div
          className="
            w-[15%] 
            xs:w-[20%] 
            sm:w-[18%] 
            md:w-[15%] 
            lg:w-[14%] 
            xl:w-[12%] 
            2xl:w-[10%] 
            min-w-15 
            bg-white 
            p-0 sm:p-0 md:p-0
            space-y-0.5 sm:space-y-1
            flex flex-col
          "
        >
          {ranges.map((range) => (
            <div
              key={range.label}
              onClick={() => setActiveRange(range.label)}
              className={`
                flex items-center 
                gap-1 sm:gap-2 md:gap-3  
                px-1 sm:px-2 md:px-2 
                py-0 sm:py-0 lg:py-1
                rounded-xl cursor-pointer
                ${
                  activeRange === range.label
                    ? "bg-black text-white"
                    : "bg-[#2f4ea2] text-white"
                }
              `}
            >
              <input
                type="checkbox" 
                checked={activeRange === range.label}
                readOnly
                className="
                  accent-white 
                  scale-50 sm:scale-90 md:scale-90 lg:scale-100
                "
              />
              <span
                className="
                  font-medium 
                  text-[5px] sm:text-xs md:text-xs lg:text-sm xl:text-base
                "
              >
                {range.label}
              </span>
            </div>
          ))}
        </div>

{/* CENTER GRID */}
<div className="flex-1 bg-[#e6e6e6] flex flex-col">

  {/* HEADER ROW */}
  <div className="grid grid-cols-11 py-1 sm:py-0 lg:py-0 items-center mb-">

    <div className="pl-2 font-bold 
                    text-[5px]  sm:text-[7px] md:text-[7.2px] lg:text-[13px] xl:text-base">
      BLOCK
    </div>

    {[...Array(10)].map((_, i) => (
      <div key={i} className="flex flex-col items-center">
        <span className="font-bold 
                         text-[5px] sm:text-[7.2px] md:text-[7.2px] lg:text-[13px] xl:text-base">
          B{i}
        </span>
        <input
          type="text"
          readOnly
          className="rounded-full border border-gray-400 bg-white text-center
                     text-[5px] sm:text-[7.2px] md:text-xs lg:text-[13px]
                     w-3 sm:w-6 md:w-9 lg:w-10 xl:w-11
                     h-1 sm:h-2 md:h-2 lg:h-3
                     focus:outline-none focus:ring-0"
        />
      </div>
    ))}
  </div>

  {/* GRID ROWS */}
  {[...Array(10)].map((_, row) => (
    <div key={row} className="grid grid-cols-11 items-center lg:mb-0 mb-[3px] sm:mb-[1px] ">
      <div className="flex flex-col items-center">
        <span className="font-bold 
                         text-[5px] sm:text-[7.2px] md:text-[7.2px] lg:text-[13px] xl:text-base">
          F{row}
        </span>
        <input
          type="text"
          readOnly
          className="rounded-full border border-gray-400 bg-white text-center
                     text-[5px] sm:text-[7.2px] md:text-xs lg:text-[13px]
                     w-3 sm:w-6 md:w-9 lg:w-10 xl:w-11
                     h-1 sm:h-2 md:h-2 lg:h-3
                     focus:outline-none focus:ring-0"
        />
      </div>

      {[...Array(10)].map((_, col) => {
        const number = 1000 + row * 10 + col;
        const visible = isVisible(number);

        return (
          <div key={col} className="flex flex-col items-center">
            <span className="font-bold 
                             text-[5px] md:text-[7.2px] sm:text-[7.2px] md:text-xs lg:text-[13px] xl:text-base">
              {number}
            </span>

            {visible ? (
              <input
                type="text"
                readOnly
                onClick={() => toggleNumber(number)}
                className="rounded-full border border-gray-400 bg-white text-center
                           text-[5px] sm:text-[7.2px] md:text-xs lg:text-[13px]
                           w-3 sm:w-6 md:w-9 lg:w-10 xl:w-11
                           h-1 sm:h-2 md:h-2 lg:h-3
                           focus:outline-none focus:ring-0"
              />
            ) : (
              <div
                className="rounded0full bg-[#e5e5e5] opacity-40
                           w-3 sm:w-6 md:w-9 lg:w-10 xl:w-11
                           h-1 sm:h-2 md:h-2 lg:h-3"
              />
            )}
          </div>
        );
      })}
    </div>
  ))}
</div>


        {/* RIGHT SUMMARY */}
        <div
          className="
            w-[20%] 
            xs:w-[28%] 
            sm:w-[24%] 
            md:w-[20%] 
            lg:w-[13%] 
            xl:w-[13%] 
            2xl:w-[13%] 
            min-w-20 
            bg-white 
            p-0 sm:p-0 
            space-y-0.5 sm:space-y-1
            flex flex-col
          "
        >
          <div className="flex items-center gap-0.5 rounded-xl">
            <div className="bg-red-600 text-white font-medium w-full text-center rounded-xl 
                            py-[2.7px] sm:py-0 lg:py-1
                            text-[5px] sm:text-xs md:text-xs lg:text-sm xl:text-base">
              Qty
            </div>
            <div className="bg-red-600 text-white font-medium w-full text-center rounded-xl 
                            py-[2.7px] sm:py-0 lg:py-1
                            text-[5px] sm:text-xs md:text-xs lg:text-sm xl:text-base">
              Amt
            </div>
          </div>

          {rows.map((row) => {
            const qty = selectedNumbers.filter(
              (n) => Math.floor((n - 1000) / 10) === row.index
            ).length;

            return (
              <div key={row.index} className="flex items-center gap-0.5 rounded-xl">
                <div className="bg-[#2f4ea2] text-white font-medium w-full text-center rounded-xl 
                                py-[2.7px] sm:py-0 lg:py-1
                                text-[5px] sm:text-xs md:text-xs lg:text-sm xl:text-base">
                  {qty}
                </div>
                <div className="bg-[#2f4ea2] text-white font-medium w-full text-center rounded-xl 
                                py-[2.77px] sm:py-0 lg:py-1
                                text-[5px] sm:text-xs md:text-xs lg:text-sm xl:text-base">
                  {qty * 0}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
