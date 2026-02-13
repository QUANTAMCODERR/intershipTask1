// import { useEffect, useState } from "react";

// export default function ActionButtons() {
//   const [liveTime, setLiveTime] = useState("");

//   useEffect(() => {
//     const updateTime = () => {
//       const now = new Date();
//       setLiveTime(
//         now.toLocaleTimeString("en-US", {
//           hour12: true,
//           hour: "2-digit",
//           minute: "2-digit",
//           second: "2-digit",
//         }),
//       );
//     };

//     updateTime();
//     const timer = setInterval(updateTime, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const timingButtons = [
//     { label: liveTime, style: "bg-green-500" },
//     { label: "3:45 PM", style: "bg-yellow-700" },
//     { label: "07:10 RT", style: "bg-red-600" },
//     { label: "260494 PT", style: "bg-pink-600 text-black" },
//     { label: "RESULT", style: "bg-purple-800" },
//     { label: "REPRINT", style: "bg-cyan-500" },
//     { label: "CANCEL", style: "bg-teal-600" },
//     { label: "REFRESH", style: "bg-blue-700" },
//   ];

//   const rightButtons = [
//     { label: "3D Game", style: "bg-orange-500" },
//     { label: "Password", style: "bg-black" },
//     { label: "Logout", style: "bg-red-600" },
//   ];

//   return (
//     <div className="w-full">
//       {/* ⭐⭐⭐ DESKTOP VIEW (UNCHANGED UI) ⭐⭐⭐ */}
//       <div className="hidden lg:flex items-center w-full pt-1 gap-1">
//         <div className="flex gap-1 flex-1">
//           {timingButtons.map((btn) => (
//             <button
//               key={btn.label}
//               className={`${btn.style} text-white font-semibold px-6 py-2 border border-black rounded-xl shadow font-mono whitespace-nowrap`}
//             >
//               {btn.label || "--:--:--"}
//             </button>
//           ))}
//         </div>

//         <div className="flex gap-1 flex-1 justify-end">
//           {rightButtons.map((btn) => (
//             <button
//               key={btn.label}
//               className={`${btn.style} text-white px-4.25 border border-black  py-2  rounded-xl shadow font-bold text-[11px] whitespace-nowrap`}
//             >
//               {btn.label}
//             </button>
//           ))}
//         </div>
//       </div>

// {/* ⭐⭐⭐ MOBILE / TABLET VIEW ⭐⭐⭐ */}
// <div className="flex flex-col gap-2 lg:hidden p-1 w-full">

//   {/* ⭐ FIRST ROW — 5 COLUMNS */}
//   <div className="grid grid-cols-5 gap-1 w-full">
//     {timingButtons.slice(0,5).map((btn) => (
//       <button
//         key={btn.label}
//         className={`
//           ${btn.style}
//           text-white font-semibold
//           py-2 md:py-1
//           px-1
//           text-[11px] md:text-[9px]
//           border border-black
//           rounded-xl
//           shadow
//           font-mono
//           whitespace-nowrap
//           w-full
//         `}
//       >
//         {btn.label || "--:--:--"}
//       </button>
//     ))}
//   </div>

//   {/* ⭐ SECOND ROW — 6 COLUMNS */}
//   <div className="grid grid-cols-6 gap-1 w-full">
//     {[...timingButtons.slice(5), ...rightButtons].map((btn) => (
//       <button
//         key={btn.label}
//         className={`
//           ${btn.style}
//           text-white font-bold
//           py-2 md:py-1
//           px-1
//           text-[11px] md:text-[9px]
//           border border-black
//           rounded-xl
//           shadow
//           whitespace-nowrap
//           w-full
//         `}
//       >
//         {btn.label}
//       </button>
//     ))}
//   </div>

// </div>


//     </div>
//   );
// }

















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

      {/* ⭐⭐⭐ DESKTOP VIEW (UNCHANGED) ⭐⭐⭐ */}
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
              className={`${btn.style} text-white px-4.25 border border-black py-2 rounded-xl shadow font-bold text-[11px] whitespace-nowrap`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {/* ⭐⭐⭐ MOBILE / TABLET VIEW ⭐⭐⭐ */}
      <div className="flex flex-col gap-2 lg:hidden p-1">

        {/* ⭐ FIRST ROW — 5 BUTTONS */}
        <div className="grid grid-cols-5 gap-1 landscape:gap-[2px]">
          {timingButtons.slice(0,5).map((btn) => (
            <button
              key={btn.label}
              className={`
                ${btn.style}
                text-white font-semibold
                py-2 text-[11px]
                border border-black rounded-xl shadow font-mono

                /* ⭐ LANDSCAPE AUTO SHRINK */
                landscape:py-1
                landscape:text-[9px]
                landscape:rounded-lg
              `}
            >
              {btn.label || "--:--:--"}
            </button>
          ))}
        </div>

        {/* ⭐ SECOND ROW — 6 BUTTONS */}
        <div className="grid grid-cols-6 gap-1 landscape:gap-[2px]">
          {[...timingButtons.slice(5), ...rightButtons].map((btn) => (
            <button
              key={btn.label}
              className={`
                ${btn.style}
                text-white font-bold
                py-2 text-[11px]
                border border-black rounded-xl shadow

                /* ⭐ LANDSCAPE AUTO SHRINK */
                landscape:py-1
                landscape:text-[9px]
                landscape:rounded-lg
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
