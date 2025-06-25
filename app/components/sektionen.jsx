import {
  EintrageSektion,
  SektionTitle,
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
    <header className="flex items-center max-w-screen-lg">
      <div className="ml-auto text-gray-700 text-right">
        <p>
          {telefon} | {ort}
        </p>
        <p>{email}</p>
        <p>{linkedin}</p>
      </div>
    </header>
  );
}

function KopfbereichLinks({ name, bereich }) {
  return (
    <div className="text-2xl font-bold text-left">
      {name}
      <h2 className="text-lg text-left font-semibold text-gray-600 whitespace-nowrap overflow:visible">
        {bereich}
      </h2>
    </div>
  );
}

export function Motivation({ motivation, etiketten }) {
  return (
    <section className="pb-2">
      <SektionTitle text={etiketten._} />
      <p className="text-beschreibung">{motivation}</p>
    </section>
  );
}

export function FaehigkeitenSektion({ daten, etiketten }) {
  return (
    <section>
      <SektionTitle text={etiketten._} />
      {daten.map((gruppe, i) => (
        <div className="mb-6" key={i}>
          <span className="text-sm font-semibold text-gray-600">
            {gruppe.stufe}
          </span>
          <div className="pl-1">
            <SymbolSkala wert={gruppe.wert} />
            <TagListe tags={gruppe.technologien} />
          </div>
        </div>
      ))}
    </section>
  );
}

export function SprachenSektion({ daten, etiketten }) {
  return (
    <section>
      <SektionTitle text={etiketten._} />
      <ul>
        {daten.map(({ sprache, stufe }, i) => (
          <li key={i} className="flex justify-between text-sm">
            <span>{sprache}</span>
            <span className="text-gray-500">{stufe}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function AusbildungSektion({ daten, etiketten }) {
  const erreicheText = ({ uni, grad, beschreibung }) =>
    [beschreibung, grad, uni].filter((feld) => feld !== "").join(", ");

  return (
    <section>
      <SektionTitle text={etiketten._} />
      {daten?.map((eintrag, i) => (
        <Punkt key={i} punkt={{ text: erreicheText(eintrag) }} />
      ))}
    </section>
  );
}
export function BerufserfahrungSektion({ daten, etiketten }) {
  return <EintrageSektion daten={daten} etiketten={etiketten} />;
}

export function OpensourceSektion({ daten, etiketten }) {
  return <EintrageSektion daten={daten} etiketten={etiketten} />;
}
