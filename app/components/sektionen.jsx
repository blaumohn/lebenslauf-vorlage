import {
  EintrageSektion,
  SektionTitle,
  TagListe,
  SymbolSkala,
} from "./lib.jsx";

export function Kopfbereich({ name, ort, telefon, linkedin }) {
  return (
    <header className="col-span-3 text-center space-y-1">
      <h1 className="text-3xl font-bold">{name}</h1>
      <div className="text-gray-700">{ort}</div>
      <div className="text-gray-700">{telefon}</div>
      <div>
        <a className="text-blue-600 hover:underline" href={linkedin}>
          {linkedin}
        </a>
      </div>
    </header>
  );
}

export function Vorstellung({ vorstellung, etiketten }) {
  return (
    <section>
      <SektionTitle text={etiketten._} />
      <p className="text-sm text-gray-800">{vorstellung}</p>
    </section>
  );
}

export function FaehigkeitenSektion({ daten, etiketten }) {
  return (
    <section>
      <SektionTitle text={etiketten._} />
      {daten.map((gruppe, i) => (
        <div key={i}>
          <span> {gruppe.stufe} </span>
          <SymbolSkala wert={gruppe.wert} />
          <TagListe tags={gruppe.technologien} />
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

export function BerufserfahrungSektion({ daten, etiketten }) {
  return <EintrageSektion daten={daten} etiketten={etiketten} />;
}

export function OpensourceSektion({ daten, etiketten }) {
  return <EintrageSektion daten={daten} etiketten={etiketten} />;
}
