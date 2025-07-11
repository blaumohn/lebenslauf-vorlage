// Rekursive Sprachfilterung
export function reduziereAufSprache(objekt, lang) {
  if (Array.isArray(objekt)) {
    return objekt.map((eintrag) => reduziereAufSprache(eintrag, lang));
  }

  if (typeof objekt !== "object" || objekt === null) {
    return objekt;
  }

  // Wenn es ein intlString ist: { de, en }
  if (typeof objekt.de === "string" || typeof objekt.en === "string") {
    return objekt[lang] ?? "";
  }

  // Rekursiv durch alle keys
  const result = {};
  for (const key in objekt) {
    result[key] = reduziereAufSprache(objekt[key], lang);
  }
  return result;
}
