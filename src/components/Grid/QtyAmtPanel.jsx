export default function QtyAmtPanel() {
  const rows = Array.from({ length: 10 }); // F0–F9 rows

  return (
    <>
      {/* ⭐ MOBILE VERSION (GRID — NO SCROLL) */}
      <div className="sm:hidden bg-white border-t border-gray-300 p-2 space-y-2">

        {/* Header */}
        <div className="grid grid-cols-2 gap-2">
          <button className="bg-red-600 text-white py-2 rounded-xl font-semibold">
            Qty
          </button>
          <button className="bg-red-600 text-white py-2 rounded-xl font-semibold">
            Amt
          </button>
        </div>

        {/* Rows — GRID INSTEAD OF SCROLL */}
        <div className="grid grid-cols-2 gap-2">
          {rows.map((_, index) => (
            <>
              <button
                key={`qty-${index}`}
                className="bg-blue-800 text-white rounded-full py-2 text-xs font-semibold"
              >
                0
              </button>

              <button
                key={`amt-${index}`}
                className="bg-blue-800 text-white rounded-full py-2 text-xs font-semibold"
              >
                0
              </button>
            </>
          ))}
        </div>
      </div>

      {/* ⭐ ORIGINAL DESKTOP PANEL (UNCHANGED) */}
      <div className="hidden sm:flex w-32 bg-white border-l border-gray-300 flex-col pt-1">
        {/* Header */}
        <div className="grid grid-cols-2 text-center">
          <button className="bg-red-600 text-white py-2 m-1 rounded-xl font-semibold hover:bg-red-700 active:scale-95 transition cursor-pointer">
            Qty
          </button>

          <button className="bg-red-600 text-white py-2 m-1 rounded-xl font-semibold hover:bg-red-700 active:scale-95 transition cursor-pointer">
            Amt
          </button>
        </div>

        {/* Rows */}
        <div className="flex-1 overflow-auto space-y-3 p-2">
          {rows.map((_, index) => (
            <div key={index} className="grid grid-cols-2 gap-2">
              <button className="bg-blue-800 text-white rounded-full py-2 text-center font-semibold shadow-inner hover:bg-blue-700 active:scale-95 transition cursor-pointer">
                0
              </button>

              <button className="bg-blue-800 text-white rounded-full py-2 text-center font-semibold shadow-inner hover:bg-blue-700 active:scale-95 transition cursor-pointer">
                0
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
