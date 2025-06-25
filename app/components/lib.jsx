export function EintrageSektion({ daten, etiketten }) {
  return (
    <section>
      <SektionTitle text={etiketten._} />
      {daten.map((eintrag, i) => (
        <Eintrag key={i} eintrag={eintrag} />
      ))}
    </section>
  );
}

export function Eintrag({ eintrag }) {
  if (eintrag.stelleGruppe?.anfang) {
    return <EintragStelleGruppeAnfang eintrag={eintrag} />;
  }

  if (eintrag.stelleGruppe?.ende) {
    return <EintragStelleGruppeEnde eintrag={eintrag} />;
  }

  return <EintragStelle eintrag={eintrag} />;
}

function EintragStelle({ eintrag }) {
  const { projekt, unternehmen } = eintrag;

  return (
    <div className="mb-6">
      <EintragObertitel titel={unternehmen ?? projekt} />
      <EintragInhalt eintrag={eintrag} />
    </div>
  );
}

function EintragStelleGruppeAnfang({ eintrag }) {
  const { unternehmen } = eintrag;

  return (
    <div>
      <EintragObertitel titel={unternehmen} />

      <div className="pl-4 border-l-4 border-gray-400 mb-6">
        <div className="mb-2"></div>
        <EintragInhalt eintrag={eintrag} />
      </div>
    </div>
  );
}

function EintragStelleGruppeEnde({ eintrag }) {
  return (
    <div className="pl-4 border-l-4 border-gray-400 mb-6">
      <EintragInhalt eintrag={eintrag} />
    </div>
  );
}
function EintragInhalt({ eintrag }) {
  const { titel, ort, zeitraum, punkte } = eintrag;

  return (
    <div>
      <div className="relative mb-3">
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-gray-700">{titel}</h3>
          <span className="eintrag-datum">{zeitraum}</span>
        </div>

        {ort && (
          <div className="absolute top-full right-0 eintrag-datum ml-auto">
            {ort}
          </div>
        )}
      </div>

      <ul className="list-disc list-inside text-beschreibung space-y-4">
        {punkte.map((punkt, i) => (
          <Punkt key={i} punkt={punkt} />
        ))}
      </ul>
    </div>
  );
}

function EintragObertitel({ titel }) {
  return (
    <div className="text-lg font-semibold text-gray-800">{titel}</div>
  );
}

export function SektionTitle({ text }) {
  return (
    <div>
      <div className="w-7/8 border-1 border-t border-gray-300 ml-1"></div>
      <h2 className="text-xl font-bold text-gray-600 pb-3">{text}</h2>
    </div>
  );
}

export function Punkt({ punkt }) {
  return (
    <div className="space-y-1">
      <div className="pl-4">
        {punkt.tags?.length > 0 && <TagListe tags={punkt.tags} />}
      </div>
      <ul className="list-disc pl-3 list-outside text-beschreibung">
        <li className="">{punkt.text}</li>
      </ul>
    </div>
  );
}

export function TagListe({ tags }) {
  return (
    <div className="flex flex-wrap gap-2 mt-1">
      {tags.map((tag, i) => (
        <span
          key={i}
          className="bg-gray-200 px-2 py-0.5 rounded text-xs text-gray-700"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export function SymbolSkala({ wert }) {
  const max = 5;
  return (
    <div className="font-mono text-gray-500">
      {"●".repeat(wert) + "○".repeat(max - wert)}
    </div>
  );
}
