import { reduziereAufSprache } from "../../app/parse/lib";

it("verarbeitet Objekte mit Arrays und Sprachknoten auf allen Ebenen", () => {
  const eingabe = {
    titel: { de: "Hallo", es: "Hola" },
    beschreibung: "Ein Objekt",
    stichworte: [
      { de: "Kunst", es: "Arte" },
      { de: "Code", es: "Código" },
    ],
    extras: {
      hinweis: { de: "Optional", es: "Opcional" },
      flags: ["a", "b"],
    },
    zeichenfolge: "Nur Text",
  };

  const erwartet = {
    titel: "Hallo",
    beschreibung: "Ein Objekt",
    stichworte: ["Kunst", "Code"],
    extras: {
      hinweis: "Optional",
      flags: ["a", "b"],
    },
    zeichenfolge: "Nur Text",
  };

  const result = reduziereAufSprache(structuredClone(eingabe), "de");
  expect(result).toEqual(erwartet);
});
