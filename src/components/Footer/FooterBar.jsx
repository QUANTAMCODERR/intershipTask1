export default function FooterBar() {
  return (
    <div className="w-full flex items-center h-14 sm:h-[5.5vw] lg:h-20">

      {/* LEFT DRAW BUTTON */}
      <button
        className="
          bg-red-600 text-white font-semibold
          px-3 sm:px-8 md:px-10
          h-full
          text-[10px] sm:text-xs md:text-sm lg:text-base
          whitespace-nowrap
          shrink-0
        "
      >
        Advance Draw F9
      </button>

      {/* CENTER PURPLE STRIP */}
      <div
        className="
          flex flex-1 min-w-0
          items-center justify-between
          bg-linear-to-r from-purple-700 to-purple-500
          px-2 sm:px-4
          h-full
          gap-2
        "
      >
        {/* BARCODE INPUT */}
        <input
          type="text"
          placeholder="Barcode"
          className="
            flex-1 min-w-0
            max-w-32 sm:max-w-xs md:max-w-md
            px-2
            h-8 sm:h-7 md:h-10
            rounded bg-white border-2
            text-xs sm:text-sm
            text-black font-semibold
            outline-none
          "
        />

        {/* BUY BUTTON */}
        <button
          className="
            bg-green-600 text-white font-semibold
            px-3 sm:px-6 md:px-10
            h-8 sm:h-7 lg:h-12
            text-xs sm:text-sm
            rounded
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
          flex gap-2
          bg-teal-700
          px-2 sm:px-4
          h-full
          items-center
          shrink-0
        "
      >
        <div className="bg-white text-black px-4 sm:px-6 h-8 md:h-12 sm:h-7 font-bold rounded text-center text-xs sm:text-sm flex items-center justify-center">
          0
        </div>
        <div className="bg-white text-black px-4 sm:px-6 h-8 md:h-12 sm:h-7 font-bold rounded text-center text-xs sm:text-sm flex items-center justify-center">
          0
        </div>
      </div>

    </div>
  );
}
