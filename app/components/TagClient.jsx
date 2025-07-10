"use client";

import { useRef, useLayoutEffect, useState } from "react";
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
  const spanBreiteErmittelt = breite !== null;

  if (!spanBreiteErmittelt)
    return (
      <Tag
        style={null}
        dataTagBreite="unset"
        spanRef={spanRef}
        text={text}
      />
    );

  return (
    <Tag
      style={{ width: `${breite + padding2InPx}px` }}
      dataTagBreite="gesetzt"
      spanRef={spanRef}
      text={text}
    />
  );
}

function Tag({ style, dataTagBreite, spanRef, text }) {
  return (
    <div
      className="py-0.5 px-2  bg-gray-200 rounded"
      style={style}
      data-tag-breite={dataTagBreite}
    >
      <span ref={spanRef}>{text}</span>
    </div>
  );
}
