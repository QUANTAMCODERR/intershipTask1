export default function FooterBar() {
  return (
    <>
      {/* ⭐ MOBILE VERSION */}
      <div className="sm:hidden bg-gray-800 p-3 flex flex-col gap-2">

        <button className="bg-red-600 w-full py-2 rounded active:scale-95 cursor-pointer text-white font-semibold">
          Advance Draw F9
        </button>

        <input
          type="text"
          placeholder="Barcode"
          className="px-3 py-2 outline-1 outline-white rounded text-black w-full placeholder:text-gray-200 placeholder:font-semibold"
        />

        <button className="bg-green-600 w-full py-2 rounded active:scale-95 cursor-pointer text-white font-semibold">
          Buy
        </button>

      </div>

      {/* ⭐ ORIGINAL DESKTOP FOOTER (UNCHANGED) */}
      <div className="hidden sm:flex  bg-gray-800 p-3 items-center gap-3">

        <button className="bg-red-600 px-4 py-2 rounded active:scale-95 cursor-pointer text-white font-semibold ">
          Advance Draw F9
        </button>

        <input
          type="text"
          placeholder="Barcode"
          className="px-3 py-2 outline-1 outline-white rounded text-black flex-1 placeholder:text-gray-200 placeholder:font-semibold"
        />

        <button className="bg-green-600 px-6 py-2 rounded active:scale-95 cursor-pointer text-white font-semibold">
          Buy
        </button>

      </div>
    </>
  );
}
