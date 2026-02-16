export default function Filters() {

  const ranges = [
    { label:"All", color:"bg-black" },
    { label:"00-09", color:"bg-blue-600" },
    { label:"10-19", color:"bg-blue-700" },
    { label:"20-29", color:"bg-green-600" },
    { label:"30-39", color:"bg-red-600" },
    { label:"40-49", color:"bg-purple-600" },
    { label:"50-59", color:"bg-yellow-400 text-black font-bold" },
    { label:"60-69", color:"bg-pink-600" },
    { label:"70-79", color:"bg-teal-600" },
    { label:"80-89", color:"bg-orange-500" },
    { label:"90-99", color:"bg-blue-800" }
  ];

  return (
    <div className="bg-white p-2">

      {/* ⭐ MOBILE VIEW */}
      <div className="sm:hidden w-full space-y-2">

        {/* ROW 1 — 11 RANGE BUTTONS */}
        <div className="grid grid-cols-11 gap-1 w-full items-center">

          {ranges.map(range => (
            <div
              key={range.label}
              className="grid grid-cols-[auto_1fr] items-center gap-1"
            >
              {/* Checkbox */}
              <input
                type="checkbox"
                className="accent-black w-2.5 h-2.5"
              />

              {/* Button */}
              <button
                className={`
                  ${range.color}
                  text-white
                  text-[7px]
                  py-1.5
                  leading-none
                  whitespace-nowrap
                  w-full text-center
                `}
              >
                {range.label}
              </button>
            </div>
          ))}

        </div>

        {/* ROW 2 — EVEN ODD CP FP */}
        <div className="flex justify-center gap-4 text-xs font-semibold text-black">
          {["EVEN","ODD","CP","FP"].map(label => (
            <label key={label} className="flex items-center gap-1">
              <input type="checkbox" />
              {label}
            </label>
          ))}
        </div>

      </div>


{/* ⭐ DESKTOP VIEW — RESPONSIVE FIXED */}
<div className="hidden sm:flex w-full items-center gap-1 overflow-hidden">

  {/* RANGE BUTTONS */}
  <div className="flex gap-1 flex-5 min-w-0">
    {ranges.map(range => (
      <div
        key={range.label}
        className="flex items-center gap-1 flex-1 min-w-0"
      >
        {/* Checkbox */}
        <input
          type="checkbox"
          className="accent-black w-3 h-3 shrink-0"
        />

        {/* Button */}
        <button
          className={`
            ${range.color}
            flex-1 min-w-0
            px-2
            py-0.5
            text-[clamp(9px,0.8vw,14px)]
            rounded
            text-white
            whitespace-nowrap
            flex items-center justify-center
          `}
        >
          {range.label}
        </button>
      </div>
    ))}
  </div>

  {/* EVEN ODD CP FP */}
  <div className="flex gap-3 items-center text-[clamp(9px,0.8vw,14px)] font-bold shrink-0">
    {["EVEN","ODD","CP","FP"].map(label => (
      <label key={label} className="flex items-center gap-1 whitespace-nowrap">
        <input type="checkbox" />
        {label}
      </label>
    ))}
  </div>

</div>


    </div>
  );
}
