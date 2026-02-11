import { useState } from "react";

export default function NumberGrid() {

  const rows = Array.from({ length: 10 }, (_, i) => 1000 + i * 10);
  const [selectedNumbers, setSelectedNumbers] = useState([]);

  const toggleNumber = (num) => {
    setSelectedNumbers((prev) =>
      prev.includes(num)
        ? prev.filter((n) => n !== num)
        : [...prev, num]
    );
  };

  return (
    <div className="flex-1 bg-gray-100 text-black p-2 sm:p-4 overflow-x-auto">

      {/* ⭐ WRAPPER — keeps desktop layout but allows mobile scroll */}
      <div className="min-w-[720px]">

        {/* HEADER */}
        <div className="grid grid-cols-11 gap-2 mb-3 items-center font-bold">
          <div>BLOCK</div>
          <div className="text-center">B0</div>
          {Array.from({ length: 9 }, (_, i) => (
            <div key={i} className="text-center">{i + 1}</div>
          ))}
        </div>

        {/* ROWS */}
        {rows.map((start, rowIndex) => (

          <div key={start} className="grid grid-cols-11 gap-2 mb-2 items-center">

            <div className="font-bold">
              F{rowIndex}
            </div>

            {Array.from({ length: 10 }, (_, i) => {

              const number = start + i;
              const isActive = selectedNumbers.includes(number);

              return (
                <button
                  key={number}
                  onClick={() => toggleNumber(number)}
                  className={`rounded-md p-2 flex flex-col items-center shadow transition text-xs sm:text-sm
                    ${isActive
                      ? "bg-blue-800 text-white"
                      : "bg-white hover:bg-gray-200"
                    }
                  `}
                >
                  <span className="font-medium">{number}</span>
                  <input type="checkbox" checked={isActive} readOnly />
                </button>
              );
            })}
          </div>

        ))}

      </div>
    </div>
  );
}
