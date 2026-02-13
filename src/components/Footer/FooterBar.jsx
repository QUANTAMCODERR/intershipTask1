export default function FooterBar() {
  return (
    <>
      {/* ⭐⭐⭐ MOBILE VERSION — LANDSCAPE SAFE ⭐⭐⭐ */}
      <div className="sm:hidden w-full flex items-stretch text-[10px]">
        {/* LEFT DRAW BUTTON */}
        <button
          className="
    bg-red-600 text-white font-semibold
    px-2 py-2
    shrink-0
    whitespace-nowrap
  "
        >
          Advance Draw F9
        </button>

        {/* CENTER PURPLE STRIP */}
        <div
          className="
    flex flex-1 min-w-0
    items-center justify-center
    bg-linear-to-r from-purple-700 to-purple-500
    px-1 py-1 gap-1
  "
        >
          {/* BARCODE INPUT */}
          <input
            type="text"
            placeholder="Barcode"
            className="
        flex-1 min-w-0
        px-2 py-1
        rounded bg-white border-2
        text-black text-[10px]
        outline-none
      "
          />

          {/* BUY BUTTON */}
          <button
            className="
      bg-green-600 text-white font-semibold
      px-2 py-1
      border-2 rounded
      whitespace-nowrap
      shrink-0
    "
          >
            Buy
          </button>
        </div>

        {/* RIGHT VALUE BOXES */}
        <div
          className="
    flex gap-1 bg-teal-700
    px-1 py-1
    shrink-0
  "
        >
          <div className="bg-white text-black px-2 py-1 font-bold rounded text-center">
            0
          </div>
          <div className="bg-white text-black px-2 py-1 font-bold rounded text-center">
            0
          </div>
        </div>
      </div>

      {/* ⭐⭐⭐ DESKTOP FOOTER — UNCHANGED ⭐⭐⭐ */}
      <div className="hidden sm:flex w-full items-center">
        <button className="bg-red-600 text-white font-semibold px-14 sm:px-6  py-4 whitespace-nowrap">
          Advance Draw F9
        </button>

        <div className="flex flex-1 items-center justify-around bg-linear-to-r from-purple-700 to-purple-500 px-4 py-2">
          <input
            type="text"
            placeholder="Barcode"
            className="w-64 px-2 sm:w-48 rounded bg-white border-2 outline-black text-black font-semibold outline-none"
          />

          <button className="bg-red-600 text-white font-semibold px-20 sm:px-10  py-2 rounded">
            Buy
          </button>
        </div>

        <div className="flex gap-2 bg-teal-700 px-12 sm:px-5 py-2">
          <div className="bg-white text-black px-10  py-2 font-bold rounded-lg text-center">
            0
          </div>
          <div className="bg-white text-black font-bold px-10 py-2 rounded-lg text-center">
            0
          </div>
        </div>
      </div>
    </>
  );
}
