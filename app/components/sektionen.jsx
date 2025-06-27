import {
  EintrageSektion,
  Sektion,
  TagListe,
  SymbolSkala,
  Punkt,
} from "./lib.jsx";

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

export function Motivation({ motivation, etiketten }) {
  return (
    <Sektion titel={etiketten._} ohneLinie>
      <p className="text-beschreibung">{motivation}</p>
    </Sektion>
  );
}

export function FaehigkeitenSektion({ daten }) {
  return (
    <Sektion className="mt-15" ohneTitel ohneLinie>
      {daten.map((gruppe, i) => (
        <div className="space-y-6" key={i}>
          <span className="text-sm font-semibold text-gray-600">
            {gruppe.stufe}
          </span>
          <div className="pl-1 space-y-1">
            <SymbolSkala wert={gruppe.wert} />
            <TagListe tags={gruppe.technologien} />
          </div>
        </div>
      ))}
    </Sektion>
  );
}

export function SprachenSektion({ daten, etiketten }) {
  return (
    <Sektion titel={etiketten._}>
      <ul>
        {daten.map(({ sprache, stufe }, i) => (
          <li key={i} className="flex justify-between text-sm">
            <span>{sprache}</span>
            <span className="text-gray-500">{stufe}</span>
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
        {daten?.map(({ titel, beschreibung }, i) => (
          <Punkt key={i} punkt={{ text: `${titel} | ${beschreibung}` }} />
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
