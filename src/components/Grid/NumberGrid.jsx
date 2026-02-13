import { useState } from "react";

export default function NumberGrid() {

  const rows = Array.from({ length: 10 }, (_, i) => 1000 + i * 10);
  const [values, setValues] = useState({});

  const handleChange = (key, val) => {
    setValues(prev => ({
      ...prev,
      [key]: val
    }));
  };

  return (
    <>
{/* ⭐⭐⭐ MOBILE VIEW (MORE COMPACT HEIGHT) ⭐⭐⭐ */}
<div className="sm:hidden flex-1 bg-gray-200 text-black text-center p-[2px]">

  {/* HEADER LABEL ROW */}
  <div className="grid grid-cols-11 gap-[1px] text-[7px] font-bold leading-tight">
    <div>BLOCK</div>
    <div>B0</div>
    {Array.from({ length: 9 }, (_, i) => (
      <div key={i}>{i + 1}</div>
    ))}
  </div>

  {/* HEADER INPUT ROW */}
  <div className="grid grid-cols-11 gap-[1px] mb-[2px]">
    <div></div>

    <div className="flex justify-center">
      <input
        type="text"
        value={values["B0"] || ""}
        onChange={(e)=>handleChange("B0", e.target.value)}
        className="w-[90%] h-3 rounded-full bg-white border border-gray-400 text-center text-[7px]"
      />
    </div>

    {Array.from({ length: 9 }, (_, i) => (
      <div key={i} className="flex justify-center">
        <input
          type="text"
          value={values[`H${i}`] || ""}
          onChange={(e)=>handleChange(`H${i}`, e.target.value)}
          className="w-[90%] h-3.25 rounded-full bg-white border border-gray-400 text-center text-[7px]"
        />
      </div>
    ))}
  </div>

  {/* ROWS */}
  {rows.map((start, rowIndex) => (
    <div key={start} className="grid grid-cols-11 gap-[1px] mb-[2px] items-center">

      <div className="flex flex-col items-center font-bold text-[7px] leading-tight">
        F{rowIndex}
        <input
          type="text"
          value={values[`F${rowIndex}`] || ""}
          onChange={(e)=>handleChange(`F${rowIndex}`, e.target.value)}
          className="mt-[1px] w-[90%] h-[13.5px] rounded-full bg-white border border-gray-400 text-center text-[7px]"
        />
      </div>

      {Array.from({ length: 10 }, (_, i) => {
        const number = start + i;

        return (
          <div key={number} className="flex flex-col items-center leading-tight">
            <span className="font-bold text-[7px]">{number}</span>
            <input
              type="text"
              value={values[number] || ""}
              onChange={(e)=>handleChange(number, e.target.value)}
              className="mt-[1px] w-[90%] h-3 rounded-full bg-white border border-gray-400 text-center text-[7px]"
            />
          </div>
        );
      })}
    </div>
  ))}
</div>



      {/* ⭐⭐⭐ DESKTOP VIEW (UNCHANGED — YOUR ORIGINAL CODE) ⭐⭐⭐ */}
      <div className="hidden sm:block flex-1 bg-gray-200 text-black text-center p-2">

        {/* HEADER LABEL ROW */}
        <div className="grid grid-cols-11 gap-1 text-[10px] sm:text-sm font-bold text-center">
          <div>BLOCK</div>
          <div>B0</div>
          {Array.from({ length: 9 }, (_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>

        {/* HEADER INPUT ROW */}
        <div className="grid grid-cols-11 gap-1 mb-2">
          <div></div>

          <div className="flex justify-center">
            <input
              type="text"
              value={values["B0"] || ""}
              onChange={(e)=>handleChange("B0", e.target.value)}
              className="w-[80%] h-5 rounded-full bg-white border border-gray-400 text-center text-[10px]"
            />
          </div>

          {Array.from({ length: 9 }, (_, i) => (
            <div key={i} className="flex justify-center">
              <input
                type="text"
                value={values[`H${i}`] || ""}
                onChange={(e)=>handleChange(`H${i}`, e.target.value)}
                className="w-[80%] h-5 rounded-full bg-white border border-gray-400 text-center text-[10px]"
              />
            </div>
          ))}
        </div>

        {/* ROWS */}
        {rows.map((start, rowIndex) => (
          <div key={start} className="grid grid-cols-11 gap-1 mb-2 items-center">

            <div className="flex flex-col items-center font-bold text-[10px] sm:text-sm">
              F{rowIndex}
              <input
                type="text"
                value={values[`F${rowIndex}`] || ""}
                onChange={(e)=>handleChange(`F${rowIndex}`, e.target.value)}
                className="mt-1 w-[80%] h-5 rounded-full bg-white border border-gray-400 text-center text-[10px]"
              />
            </div>

            {Array.from({ length: 10 }, (_, i) => {
              const number = start + i;

              return (
                <div key={number} className="flex flex-col items-center">
                  <span className="font-bold text-[10px] sm:text-sm">
                    {number}
                  </span>
                  <input
                    type="text"
                    value={values[number] || ""}
                    onChange={(e)=>handleChange(number, e.target.value)}
                    className="mt-1 w-[80%] h-5 rounded-full bg-white border border-gray-400 text-center text-[10px]"
                  />
                </div>
              );
            })}
          </div>
        ))}

      </div>
    </>
  );
}
