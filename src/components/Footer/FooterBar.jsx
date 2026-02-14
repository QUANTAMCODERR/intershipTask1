// export default function FooterBar() {
//   return (
//     <>
//       {/* ⭐⭐⭐ MOBILE VERSION — LANDSCAPE SAFE ⭐⭐⭐ */}
//       <div className="sm:hidden w-full flex items-stretch text-[10px]">
//         {/* LEFT DRAW BUTTON */}
//         <button
//           className="
//     bg-red-600 text-white font-semibold
//     px-2 py-2
//     shrink-0
//     whitespace-nowrap
//   "
//         >
//           Advance Draw F9
//         </button>

//         {/* CENTER PURPLE STRIP */}
//         <div
//           className="
//     flex flex-1 min-w-0
//     items-center justify-center
//     bg-linear-to-r from-purple-700 to-purple-500
//     px-1 py-1 gap-1
//   "
//         >
//           {/* BARCODE INPUT */}
//           <input
//             type="text"
//             placeholder="Barcode"
//             className="
//         flex-1 min-w-0
//         px-2 py-1
//         rounded bg-white border-2
//         text-black text-[10px]
//         outline-none
//       "
//           />

//           {/* BUY BUTTON */}
//           <button
//             className="
//       bg-green-600 text-white font-semibold
//       px-2 py-1
//       border-2 rounded
//       whitespace-nowrap
//       shrink-0
//     "
//           >
//             Buy
//           </button>
//         </div>

//         {/* RIGHT VALUE BOXES */}
//         <div
//           className="
//     flex gap-1 bg-teal-700
//     px-1 py-1
//     shrink-0
//   "
//         >
//           <div className="bg-white text-black px-4 py-1 font-bold rounded text-center">
//             0
//           </div>
//           <div className="bg-white text-black px-4 py-1 font-bold rounded text-center">
//             0
//           </div>
//         </div>
//       </div>

// {/* ⭐⭐⭐ DESKTOP FOOTER — FIXED RESPONSIVE VERSION ⭐⭐⭐ */}
// <div className="hidden sm:flex w-full items-stretch">

//   {/* LEFT DRAW BUTTON */}
//   <button
//     className="
//       bg-red-600 text-white font-semibold
//       px-6 lg:px-12
//       py-4
//       whitespace-nowrap
//       shrink-0
//     "
//   >
//     Advance Draw F9
//   </button>

//   {/* CENTER PURPLE STRIP */}
//   <div
//     className="
//       flex flex-1 min-w-0
//       items-center justify-center
//       bg-gradient-to-r from-purple-700 to-purple-500
//       px-3 lg:px-6
//       py-2
//       gap-4
//     "
//   >
//     {/* BARCODE INPUT */}
//     <input
//       type="text"
//       placeholder="Barcode"
//       className="
//         flex-1 min-w-0
//         max-w-xs lg:max-w-md
//         px-3 py-2
//         rounded bg-white border-2
//         text-black font-semibold
//         outline-none
//       "
//     />

//     {/* BUY BUTTON */}
//     <button
//       className="
//         bg-red-600 text-white font-semibold
//         px-6 lg:px-12
//         py-2
//         rounded
//         whitespace-nowrap
//         shrink-0
//       "
//     >
//       Buy
//     </button>
//   </div>

//   {/* RIGHT VALUE BOXES */}
//   <div
//     className="
//       flex gap-2
//       bg-teal-700
//       px-4 lg:px-8
//       py-2
//       shrink-0
//     "
//   >
//     <div className="bg-white text-black px-4 lg:px-8 py-2 font-bold rounded-lg text-center">
//       0
//     </div>
//     <div className="bg-white text-black px-4 lg:px-8 py-2 font-bold rounded-lg text-center">
//       0
//     </div>
//   </div>

// </div>

//     </>
//   );
// }




export default function FooterBar() {
  return (
    <div className="w-full flex items-stretch">

      {/* LEFT DRAW BUTTON */}
      <button
        className="
          bg-red-600 text-white font-semibold
          px-2 sm:px-4 md:px-6 lg:px-10
          py-2 sm:py-3 md:py-4
          text-[10px] sm:text-xs md:text-sm
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
          items-center justify-center
          bg-gradient-to-r from-purple-700 to-purple-500
          px-1 sm:px-3 md:px-5
          py-1 sm:py-2
          gap-1 sm:gap-3
        "
      >
        {/* BARCODE INPUT */}
        <input
          type="text"
          placeholder="Barcode"
          className="
            flex-1 min-w-0
            max-w-[120px] sm:max-w-xs md:max-w-md
            px-2 sm:px-3
            py-1 sm:py-2
            rounded bg-white border-2
            text-[10px] sm:text-xs md:text-sm
            text-black font-semibold
            outline-none
          "
        />

        {/* BUY BUTTON */}
        <button
          className="
            bg-green-600 text-white font-semibold
            px-2 sm:px-4 md:px-8 lg:px-12
            py-1 sm:py-2
            text-[10px] sm:text-xs md:text-sm
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
          flex gap-1 sm:gap-2
          bg-teal-700
          px-1 sm:px-3 md:px-6
          py-1 sm:py-2
          shrink-0
        "
      >
        <div className="bg-white text-black px-4 sm:px-4 md:px-8 py-1 sm:py-2 font-bold rounded text-center text-[10px] sm:text-xs md:text-sm">
          0
        </div>
        <div className="bg-white text-black px-4  sm:px-4 md:px-8 py-1 sm:py-2 font-bold rounded text-center text-[10px] sm:text-xs md:text-sm">
          0
        </div>
      </div>

    </div>
  );
}
