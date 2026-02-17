import { useEffect, useState } from "react";
import ActionButtons from "./ActionButtons";

export default function Header() {

  // ⭐ color mapping (your updated colors)
  const numbers = [
    { value: 1028, color: "bg-red-600" },
    { value: 1195, color: "bg-blue-600" },
    { value: 1200, color: "bg-purple-600" },
    { value: 1312, color: "bg-green-600" },
    { value: 1475, color: "bg-indigo-700" },
    { value: 1572, color: "bg-orange-400" },
    { value: 1641, color: "bg-red-500" },
    { value: 1723, color: "bg-orange-700" },
    { value: 1850, color: "bg-teal-800" },
    { value: 1935, color: "bg-yellow-500 " },
  ];

  // ⭐ live date & time
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-black  text-white">

      {/* ⭐ TOP STRIP */}
      <div className="w-full flex items-center justify-between  sm:px-1 py-0.75 xs:mb-1 lg:mb-1">

        {/* LEFT — NUMBER STRIP */}
        <div className="flex gap-0.5 flex-1 min-w-0">
          {numbers.map((num, i) => (
            <div
              key={i}
              className={`
                ${num.color}
                flex-1
                text-[10px] sm:text-[12px]
                font-bold
                py-1.25 sm:py-[1vh]
                text-center
                whitespace-nowrap
              `}
            >
              {num.value}
            </div>
          ))}
        </div>

        {/* RIGHT — DATE / TIME / WELCOME */}
        <div className="
          text-[9px] sm:text-[11px]
          text-right
          pl-1
          sm:pl-1
          whitespace-nowrap
          leading-tight
          shrink-0
        ">
          <div className="font-mono">
            {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}
          </div>

          <div className="font-semibold">
            Welcome to freedomplay
          </div>
        </div>

      </div>

      {/* ⭐ ACTION BUTTONS SECTION */}
      <div className="sm:px-0.5  bg-white">
        <ActionButtons />
      </div>

    </div>
  );
}
