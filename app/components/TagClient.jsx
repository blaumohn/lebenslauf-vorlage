"use client";

import { useRef, useLayoutEffect, useState, useEffect } from "react";
const padding2InPx = 16;

export default function TagClient({ children: text }) {
  const spanRef = useRef(null);
  const [breite, setBreite] = useState(null);

  // Aktuelle Breite als Ref speichern
  const aktuelleBreiteRef = useRef(null);
  aktuelleBreiteRef.current = breite;

  useLayoutEffect(() => {
    const messen = () => {
      const spanBreite =
        spanRef.current?.getBoundingClientRect().width ?? 0;
      if (
        aktuelleBreiteRef.current === null ||
        Math.abs(spanBreite - breite) > 0.5
      )
        setBreite(spanBreite);
    };

    // Debounce-Funktion:
    let timer;
    const verzoegerteMessung = () => {
      clearTimeout(timer);
      timer = setTimeout(messen, 100);
    };

    messen();
    window.addEventListener("resize", verzoegerteMessung);
    return () => window.removeEventListener("resize", verzoegerteMessung);
  }, []);

  return (
    <div
      className="py-0.5 px-2  bg-gray-200 rounded"
      style={
        breite !== null ? { width: `${breite + padding2InPx}px` } : null
      }
      data-tag-breite={breite === null ? "unset" : "gesetzt"}
    >
      <span ref={spanRef}>{text}</span>
    </div>
  );
}
