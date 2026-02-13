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
        }),
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
      {/* ⭐⭐⭐ DESKTOP VIEW (UNCHANGED UI) ⭐⭐⭐ */}
      <div className="hidden lg:flex items-center w-full pt-1 gap-1">
        <div className="flex gap-1 flex-1">
          {timingButtons.map((btn) => (
            <button
              key={btn.label}
              className={`${btn.style} text-white font-semibold px-6 py-2 border border-black rounded-xl shadow font-mono whitespace-nowrap`}
            >
              {btn.label || "--:--:--"}
            </button>
          ))}
        </div>

        <div className="flex gap-1 flex-1 justify-end">
          {rightButtons.map((btn) => (
            <button
              key={btn.label}
              className={`${btn.style} text-white px-4.25 border border-black  py-2  rounded-xl shadow font-bold text-[11px] whitespace-nowrap`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
{/* ⭐⭐⭐ MOBILE / TABLET VIEW — LANDSCAPE LIKE HEADER ⭐⭐⭐ */}
<div className="lg:hidden w-full">

  <div className="flex gap-0.5 w-full min-w-0">

    {[...timingButtons, ...rightButtons].map((btn) => (
      <button
        key={btn.label}
        className={`
          ${btn.style}
          flex-1
          min-w-0
          text-white
          text-[9px]
          sm:text-[11px]
          font-semibold
          py-1.5
          border border-black
          rounded-lg
          shadow
          whitespace-nowrap
        `}
      >
        {btn.label || "--:--:--"}
      </button>
    ))}

  </div>

</div>


    </div>
  );
}
