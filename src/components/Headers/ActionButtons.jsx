import { useEffect, useState } from "react";

export default function ActionButtons() {
  const [liveTime, setLiveTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLiveTime(
        now.toLocaleTimeString("en-US", {
          hour12: true,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const timingButtons = [
    { label: liveTime, style: "bg-green-500" },
    { label: "3:45 PM", style: "bg-yellow-700" },
    { label: "07:10 RT", style: "bg-red-600" },
    { label: "260494 PT", style: "bg-pink-600 text-black" },
    { label: "RESULT", style: "bg-purple-800" },
    { label: "REPRINT", style: "bg-cyan-500" },
    { label: "CANCEL", style: "bg-teal-600" },
    { label: "REFRESH", style: "bg-blue-700" },
  ];

  const rightButtons = [
    { label: "3D Game", style: "bg-orange-500" },
    { label: "Password", style: "bg-black" },
    { label: "Logout", style: "bg-red-600" },
  ];

  return (
    <div className="w-full">

{/* ⭐⭐⭐ DESKTOP VIEW — CENTER FIXED ⭐⭐⭐ */}
<div className="hidden sm:flex items-center w-full pt-1 gap-1 overflow-hidden">

  {/* LEFT — BIG TIMING BUTTONS */}
  <div className="flex gap-1 flex-5 min-w-0">
    {timingButtons.map((btn) => (
      <button
        key={btn.label}
        className={`
          ${btn.style}
          text-white
          font-extrabold
          flex-1 min-w-0
          px-4
          py-[2vh]
          text-[clamp(2vh,1.2vw,18px)]
          border border-black
          rounded-xl
          shadow
          font-mono
          whitespace-nowrap
          flex items-center justify-center
          text-center
        `}
      >
        {btn.label || "--:--:--"}
      </button>
    ))}
  </div>

  {/* RIGHT — SMALLER CONTROL BUTTONS */}
  <div className="flex gap-1 flex-[1.3] justify-end min-w-0">
    {rightButtons.map((btn) => (
      <button
        key={btn.label}
        className={`
          ${btn.style}
          text-white
          font-semibold
          flex-1 min-w-0
          px-2
          py-1
          text-[clamp(8px,0.8vw,12px)]
          border border-black
          rounded-xl
          shadow
          whitespace-nowrap
          flex items-center justify-center
          text-center
        `}
      >
        {btn.label}
      </button>
    ))}
  </div>

</div>


      {/* ⭐⭐⭐ MOBILE VIEW — ONLY BELOW sm (640px) ⭐⭐⭐ */}
      <div className="flex flex-col gap-2 sm:hidden p-1 w-full">

        {/* FIRST ROW — 5 BUTTONS */}
        <div className="grid grid-cols-5 gap-1 w-full">
          {timingButtons.slice(0, 5).map((btn) => (
            <button
              key={btn.label}
              className={`${btn.style}
                text-white font-semibold
                py-2
                px-1
                text-[10px]
                border border-black
                rounded-xl
                shadow
                font-mono
                whitespace-nowrap
                w-full
              `}
            >
              {btn.label || "--:--:--"}
            </button>
          ))}
        </div>

        {/* SECOND ROW — 6 BUTTONS */}
        <div className="grid grid-cols-6 gap-1 w-full">
          {[...timingButtons.slice(5), ...rightButtons].map((btn) => (
            <button
              key={btn.label}
              className={`${btn.style}
                text-white font-bold
                py-2
                px-1
                text-[11px]
                border border-black
                rounded-xl
                shadow
                whitespace-nowrap
                w-full
              `}
            >
              {btn.label}
            </button>
          ))}
        </div>

      </div>

    </div>
  );
}
