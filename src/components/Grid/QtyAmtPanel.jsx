export default function QtyAmtPanel() {
  const rows = Array.from({ length: 10 });

  return (
    <>
      {/* ⭐⭐⭐ MOBILE VIEW — SMALL SIZE (FIT SCREEN) ⭐⭐⭐ */}
      <div className="sm:hidden bg-white border-t border-gray-300 px-1 space-y-1">

        {/* Header */}
        <div className="grid grid-cols-2 gap-1">
          <button className="bg-red-600 text-white py-1 rounded-lg font-semibold text-[10px]">
            Qty
          </button>
          <button className="bg-red-600 text-white py-1 rounded-lg font-semibold text-[10px]">
            Amt
          </button>
        </div>

        {/* Rows — GRID (NO SCROLL) */}
        <div className="grid grid-cols-2 gap-1">
          {rows.map((_, index) => (
            <div key={index} className="contents">
              <button className="bg-blue-900 text-white rounded-full py-0.5 text-[10px] font-semibold">
                0
              </button>

              <button className="bg-blue-900 text-white rounded-full py-[3.25px] text-[10px] font-semibold">
                0
              </button>
            </div>
          ))}
        </div>
      </div>


      {/* ⭐⭐⭐ DESKTOP VIEW (YOUR ORIGINAL — UNCHANGED) ⭐⭐⭐ */}
      <div className="hidden xl:flex sm:flex w-34 bg-white border-l border-gray-300 flex-col">
        
        {/* Header */}
        <div className="grid grid-cols-2 text-center">
          <button className="bg-red-600 text-white py-4 px-4 ml-[1px] rounded-md font-semibold hover:bg-red-700 active:scale-95 text-xs transition cursor-pointer">
            Qty
          </button>

          <button className="bg-red-600 text-white py-4 text-xs px-3 ml-[1px] rounded-md font-semibold hover:bg-red-700 active:scale-95 transition cursor-pointer">
            Amt
          </button>
        </div>

        {/* Rows */}
        <div className="flex-1 overflow-auto space-y-3 py-1 ml-[1px]">
          {rows.map((_, index) => (
            <div key={index} className="grid grid-cols-2 gap-1">
              <button className="bg-blue-900 text-white rounded-full py-3.25 text-center font-semibold shadow-inner hover:bg-blue-700 active:scale-95 transition cursor-pointer text-xs">
                0
              </button>

              <button className="bg-blue-900 text-white rounded-full py-3 px-4 text-center font-semibold shadow-inner hover:bg-blue-700 active:scale-95 transition cursor-pointer text-xs">
                0
              </button>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}
