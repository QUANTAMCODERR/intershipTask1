import { useState } from "react";

export default function BlockNumberQtyLayout() {

  const rows = Array.from({ length: 10 }, (_, i) => 1000 + i * 10);
  const [values, setValues] = useState({});
  const [qty, setQty] = useState("");
  const [amt, setAmt] = useState("");

  const handleChange = (key, val) => {
    setValues(prev => ({
      ...prev,
      [key]: val
    }));
  };

  return (
    <div className="flex w-full min-h-screen bg-gray-100">

      {/* ================= BLOCK SIDEBAR ================= */}
      <div className="w-20 bg-gray-800 text-white flex flex-col items-center py-4 space-y-4">
        <div className="font-bold">BLOCK</div>
        {Array.from({ length: 10 }, (_, i) => (
          <button
            key={i}
            className="bg-gray-600 hover:bg-gray-500 w-12 h-8 rounded text-sm"
          >
            F{i}
          </button>
        ))}
      </div>


      {/* ================= NUMBER GRID ================= */}
      <div className="flex-1 bg-gray-200 text-black text-center p-2">

        {/* HEADER */}
        <div className="grid grid-cols-11 gap-1 font-bold text-sm">
          <div>BLOCK</div>
          <div>B0</div>
          {Array.from({ length: 9 }, (_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>

        {/* HEADER INPUT */}
        <div className="grid grid-cols-11 gap-1 mb-2">
          <div></div>

          <input
            type="text"
            value={values["B0"] || ""}
            onChange={(e)=>handleChange("B0", e.target.value)}
            className="rounded-full border text-center"
          />

          {Array.from({ length: 9 }, (_, i) => (
            <input
              key={i}
              type="text"
              value={values[`H${i}`] || ""}
              onChange={(e)=>handleChange(`H${i}`, e.target.value)}
              className="rounded-full border text-center"
            />
          ))}
        </div>

        {/* ROWS */}
        {rows.map((start, rowIndex) => (
          <div key={start} className="grid grid-cols-11 gap-1 mb-2">

            <div className="flex flex-col items-center font-bold">
              F{rowIndex}
              <input
                type="text"
                value={values[`F${rowIndex}`] || ""}
                onChange={(e)=>handleChange(`F${rowIndex}`, e.target.value)}
                className="mt-1 rounded-full border text-center w-full"
              />
            </div>

            {Array.from({ length: 10 }, (_, i) => {
              const number = start + i;
              return (
                <div key={number} className="flex flex-col items-center">
                  <span className="font-bold">{number}</span>
                  <input
                    type="text"
                    value={values[number] || ""}
                    onChange={(e)=>handleChange(number, e.target.value)}
                    className="mt-1 rounded-full border text-center w-full"
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>


      {/* ================= QTY AMT LAYOUT ================= */}
      <div className="w-40 bg-white border-l p-4 flex flex-col space-y-4">

        <div>
          <label className="font-bold block mb-1">QTY</label>
          <input
            type="text"
            value={qty}
            onChange={(e)=>setQty(e.target.value)}
            className="w-full border rounded p-1 text-center"
          />
        </div>

        <div>
          <label className="font-bold block mb-1">AMT</label>
          <input
            type="text"
            value={amt}
            onChange={(e)=>setAmt(e.target.value)}
            className="w-full border rounded p-1 text-center"
          />
        </div>

        <div className="font-bold text-center border-t pt-2">
          TOTAL: {Number(qty || 0) * Number(amt || 0)}
        </div>

      </div>

    </div>
  );
}
