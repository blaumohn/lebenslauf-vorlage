export function Sektion({
  children,
  className,
  titel,
  ohneLinie,
  ohneTitel,
}) {
  const ohneSektionTitel = ohneTitel && ohneLinie;
  return (
    <section className={className}>
      {!ohneSektionTitel && (
        <SektionTitle text={titel} ohneLinie={ohneLinie} />
      )}
      <div className="space-y-3">{children}</div>
    </section>
  );
}

export function EintrageSektion({ daten, etiketten }) {
  return (
    <Sektion titel={etiketten._}>
      {daten.map((eintrag, i) => (
        <Eintrag key={i} eintrag={eintrag} />
      ))}
    </Sektion>
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
    <div>
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

      <div className="pl-4 border-l-4 border-gray-400">
        <EintragInhalt className="mt-2" eintrag={eintrag} />
      </div>
    </div>
  );
}

function EintragStelleGruppeEnde({ eintrag }) {
  return (
    <div className="pl-4 border-l-4 border-gray-400">
      <EintragInhalt eintrag={eintrag} />
    </div>
  );
}
function EintragInhalt({ eintrag, className }) {
  const { titel, ort, zeitraum, punkte } = eintrag;

  return (
    <div className={className}>
      <div className="relative mb-3">
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-sm text-gray-700">{titel}</h3>
          <span className="eintrag-datum">{zeitraum}</span>
        </div>

        {ort && (
          <div className="absolute top-full right-0 eintrag-datum ml-auto">
            <span>{ort}</span>
          </div>
        )}
      </div>

      <div className="space-y-2.5">
        {punkte.map((punkt, i) => (
          <Punkt key={i} punkt={punkt} />
        ))}
      </div>
    </div>
  );
}

function EintragObertitel({ titel }) {
  return (
    <div className="text-sm font-semibold text-gray-800">{titel}</div>
  );
}

export function SektionTitle({ text, ohneLinie }) {
  return (
    <div>
      {!ohneLinie && (
        <div className="w-7/8 border-1 border-t border-gray-400 ml-1"></div>
      )}
      <h2 className="text-[0.950rem] font-bold text-black pb-1.5 leading-tight">
        {text}
      </h2>
    </div>
  );
}

export function Punkt({ punktTextStil, punkt }) {
  return (
    <div className="space-y-1 break-inside-avoid">
      {punkt.tags?.length > 0 && (
        <div className="pl-4">{<TagListe tags={punkt.tags} />}</div>
      )}
      <ul className="list-disc list-outside pl-3 text-beschreibung">
        <li>
          <p>
            <span className={punktTextStil}>{punkt.text}</span>
          </p>
        </li>
      </ul>
    </div>
  );
}

export function TagListe({ tags }) {
  return (
    <div className="flex flex-wrap gap-2">
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
      <span>{"●".repeat(wert) + "○".repeat(max - wert)}</span>
    </div>
  );
}
