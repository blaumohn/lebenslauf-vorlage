import {
  EintrageSektion,
  Sektion,
  TagListe,
  SymbolSkala,
  Punkt,
} from "./lib.jsx";
import { macheVollUrl, heutigesDatum } from "./lib.js";

export function Kopfbereich({ halbe, ...kopfdaten }) {
  switch (halbe) {
    case "rechts":
      return <KopfbereichRechts {...kopfdaten} />;
    case "links":
      return <KopfbereichLinks {...kopfdaten} />;
  }
}

function KopfbereichRechts({ telefon, ort, email, linkedin }) {
  return (
    <div className="mb-4 ml-auto text-gray-600 font-semibold text-sm text-right leading-tight">
      <p>
        {telefon} | {ort}
      </p>
      <p>{email}</p>
      <p>{linkedin}</p>
    </div>
  );
}

function KopfbereichLinks({ name, bereich }) {
  return (
    <div className="mb-3">
      <p className="text-3xl text-black font-semibold text-auslaufend text-left">
        {name}
      </p>
      <p className="text-base text-left font-semibold text-gray-500 text-auslaufend leading-tight">
        {bereich}
      </p>
    </div>
  );
}
export function Fussbereich({ daten: { fussbereich, kopfdaten } }) {
  const titel = `${heutigesDatum()} ${kopfdaten.name}`;
  const link = (
    <a
      href={macheVollUrl(fussbereich.link)}
      target="_blank"
      rel="noopener noreferrer"
      className="whitespace-nowrap text-gray-600 hover:underline"
    >
      {fussbereich.link}
    </a>
  );
  return (
    <footer className="break-before-avoid break-inside-avoid text-sm border-t border-gray-300 font-light text-gray-700 text-center">
      <span className="whitespace-nowrap font-normal">{titel} </span>
      <wbr />
      <span className="whitespace-nowrap">| {fussbereich.text} </span>
      <wbr />
      {fussbereich.link && (
        <span className="whitespace-nowrap">{link}</span>
      )}
    </footer>
  );
}

export function Motivation({ motivation, etiketten }) {
  return (
    <Sektion titel={etiketten._} ohneLinie>
      <p className="text-beschreibung">{motivation}</p>
    </Sektion>
  );
}

export function FaehigkeitenSektion({ daten }) {
  return (
    <section className="mt-15">
      <div className="space-y-6">
        {daten.map((gruppe, i) => (
          <div className="break-inside-avoid" key={i}>
            <p className="text-sm font-semibold text-gray-600 leading-tight">
              {gruppe.stufe}
            </p>
            <div className="pl-1 space-y-1">
              <SymbolSkala wert={gruppe.wert} />
              <TagListe tags={gruppe.technologien} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/*
          <li key={i} className="flex justify-between text-sm">
            <span className="">{sprache}</span>
            <span className="text-gray-500">{stufe}</span>
          </li>
*/

export function SprachenSektion({ daten, etiketten }) {
  return (
    <Sektion titel={etiketten._}>
      <ul className="space-y-2">
        {daten.map(({ sprache, stufe }, i) => (
          <li className="flex flex-col sm:flex-row justify-between text-sm gap-x-2 gap-y-0.5 leading-tight">
            <span>{sprache}</span>
            <span className="text-gray-500 text-left">{stufe}</span>
          </li>
        ))}
      </ul>
    </Sektion>
  );
}

export function InteressenSektion({ daten, etiketten }) {
  return (
    <Sektion titel={etiketten._}>
      <div className="text-beschreibung">
        <span>{daten?.join(", ")}</span>
      </div>
    </Sektion>
  );
}

export function AusbildungSektion({ daten, etiketten }) {
  const erreicheText = ({ uni, grad, beschreibung }) =>
    [beschreibung, grad, uni].filter((feld) => feld !== "").join(", ");

  return (
    <Sektion titel={etiketten._}>
      <div className="space-y-2">
        {daten?.map((eintrag, i) => (
          <Punkt key={i} punkt={{ text: erreicheText(eintrag) }} />
        ))}
      </div>
    </Sektion>
  );
}

export function Vortraege({ daten, etiketten }) {
  return (
    <Sektion titel={etiketten._}>
      <div className="space-y-2">
        {daten?.map(({ titel, beschreibung, datum }, i) => (
          <div className="flex justify-between space-x-10">
            <Punkt key={i}>
              <span className="font-medium">{titel}</span>
              <span> | {beschreibung}</span>
            </Punkt>
            <span className="eintrag-datum">{datum}</span>
          </div>
        ))}
      </div>
    </Sektion>
  );
}

export function BerufserfahrungSektion({ daten, etiketten }) {
  return <EintrageSektion daten={daten} etiketten={etiketten} />;
}

export function OpensourceSektion({ daten, etiketten }) {
  return <EintrageSektion daten={daten} etiketten={etiketten} />;
}
