import { useEffect, useState } from "react";

export default function ActionButtons() {

  // ⭐ live time state
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

    updateTime(); // initial call
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  // ⏱️ Timing buttons (LEFT)
  const timingButtons = [
    { label: liveTime, style: "bg-green-500" },   // ✅ dynamic time
    { label: "3:45 PM", style: "bg-yellow-700" },
    { label: "07:10 RT", style: "bg-red-600" },
    { label: "260494 PT", style: "bg-pink-600 text-black" },
  ];

  // 🎯 Center buttons (UNCHANGED)
  const actionButtons = [
    { label: "RESULT", style: "bg-purple-600" },
    { label: "REPRINT", style: "bg-cyan-500" },
    { label: "CANCEL", style: "bg-teal-600" },
    { label: "REFRESH", style: "bg-blue-700" },
    { label: "3D Game", style: "bg-orange-500" },
  ];

return (
  <div className="p-2 bg-gray-800">

    {/* ⭐ DESKTOP LAYOUT (UNCHANGED) */}
    <div className="hidden lg:flex items-center gap-2 flex-wrap">
      
      {/* LEFT SIDE — Timing */}
      <div className="flex gap-2 flex-wrap">
        {timingButtons.map((btn) => (
          <button
            key={btn.label}
            className={`px-2 py-2 rounded-xl text-white font-semibold shadow ${btn.style} hover:opacity-90 w-[140px] text-center`}
          >
            {btn.label || "--:--:--"}
          </button>
        ))}
      </div>

      {/* CENTER — Actions */}
      <div className="flex gap-2 flex-wrap">
        {actionButtons.map((btn) => (
          <button
            key={btn.label}
            className={`px-2 py-2 rounded-xl text-white font-semibold shadow hover:opacity-90 ${btn.style} cursor-pointer active:scale-95`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* RIGHT SIDE — Auth */}
      <div className="flex gap-2">
        <button className="px-2 py-2 rounded-xl bg-black text-white font-semibold shadow active:scale-95 cursor-pointer">
          Password
        </button>

        <button className="px-2 py-2 rounded-xl bg-red-600 text-white font-semibold shadow active:scale-95 cursor-pointer">
          Logout
        </button>
      </div>

    </div>


    {/* ⭐ MOBILE / TABLET LAYOUT */}
    <div className="flex flex-col gap-2 lg:hidden">

      {/* Timing — auto-fit grid */}
      <div className="grid grid-cols-2 gap-2">
        {timingButtons.map((btn) => (
          <button
            key={btn.label}
            className={`py-2 rounded-xl text-white font-semibold shadow ${btn.style} hover:opacity-90 text-center font-mono text-xs`}
          >
            {btn.label || "--:--:--"}
          </button>
        ))}
      </div>

      {/* Actions + Password — 3 per row */}
      <div className="grid grid-cols-3 gap-2">
        {actionButtons.map((btn) => (
          <button
            key={btn.label}
            className={`py-2 rounded-xl text-white font-semibold shadow hover:opacity-90 ${btn.style} cursor-pointer active:scale-95 text-xs`}
          >
            {btn.label}
          </button>
        ))}

        <button className="py-2 rounded-xl bg-black text-white font-semibold shadow active:scale-95 cursor-pointer text-xs">
          Password
        </button>
      </div>

      {/* Logout — bottom right */}
      <div className="flex justify-end">
        <button className="px-3 py-2 rounded-xl bg-red-600 text-white font-semibold shadow active:scale-95 cursor-pointer text-xs">
          Logout
        </button>
      </div>

    </div>

  </div>
);


}
