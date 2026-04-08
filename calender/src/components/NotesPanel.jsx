"use client";

import { useEffect, useState } from "react";

export default function NotesPanel({ startDate, endDate }) {
  const key = `notes-${startDate?.toISOString()}-${endDate?.toISOString()}`;
  const [note, setNote] = useState("");

  useEffect(() => {
    if (!startDate) {
      setNote("");
      return;
    }

    const saved = localStorage.getItem(key);
    if (saved) setNote(saved);
    else setNote("");
  }, [key, startDate]);

  const handleChange = (e) => {
    setNote(e.target.value);
    if (startDate) {
      localStorage.setItem(key, e.target.value);
    }
  };

  return (
    <div className="flex flex-col h-full h-[300px] md:h-[350px]">
      <h3 className="text-[16px] font-bold text-slate-800 mb-6">
        Notes
      </h3>

      <div className="flex-1 relative w-full pr-12 md:pr-16">
        {/* Notebook lines effect using actual physical dom nodes for precision */}
        <div className="absolute inset-0 pointer-events-none flex flex-col justify-start gap-0">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
            <div key={i} className="border-b border-gray-300 w-full h-[36px]" />
          ))}
        </div>

        {/* Text area overlaying the lines perfectly */}
        <textarea
          value={note}
          onChange={handleChange}
          className="w-full h-[300px] bg-transparent resize-none outline-none text-slate-800 text-[15px] pt-[7px] pb-0 font-medium"
          placeholder=""
          style={{ lineHeight: '36px' }}
          spellCheck={false}
        />
      </div>
    </div>
  );
}