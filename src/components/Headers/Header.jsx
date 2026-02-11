import { useEffect, useState } from "react";
import ActionButtons from "./ActionButtons";

export default function Header() {
  const numbers = [1028,1195,1200,1312,1475,1572,1641,1723,1850,1935];

  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black p-2 space-y-2 w-full text-white">

      {/* TOP BAR */}
      <div className="
        flex 
        flex-col 
        sm:flex-row 
        sm:justify-between 
        sm:items-start 
        gap-2
      ">

        {/* Left — Top Numbers */}
        <div className="flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {numbers.map((num, i) => (
            <div
              key={i}
              className="
                px-4 py-2 
                rounded-md 
                text-xs sm:text-sm 
                font-semibold 
                bg-gradient-to-r 
                from-red-500 
                to-purple-600 
                flex-shrink-0
              "
            >
              {num}
            </div>
          ))}
        </div>

        {/* Right — Date / Time / Welcome */}
        <div className="
          text-xs 
          sm:text-sm 
          text-center 
          sm:text-right 
          leading-tight
        ">
          <div className="text-gray-300 flex justify-center sm:justify-end gap-2 font-mono">
            <span>{dateTime.toLocaleDateString()}</span>
            <span>{dateTime.toLocaleTimeString()}</span>
          </div>

          <div className="font-semibold">
            Welcome to freedomplay
          </div>
        </div>

      </div>

      {/* Buttons Row */}
      <ActionButtons />

    </div>
  );
}
