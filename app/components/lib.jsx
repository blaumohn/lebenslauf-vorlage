import dynamic from "next/dynamic";

export function Sektion({ children, className, titel, ohneLinie }) {
  return (
    <section className={className}>
      <SektionTitle text={titel} ohneLinie={ohneLinie} />
      <div className="pl-0.5 space-y-3">{children}</div>
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
  if (eintrag.stelleGruppe) {
    return <StelleGruppeEintrag eintrag={eintrag} />;
  }

  return <EintragStelle eintrag={eintrag} />;
}

function EintragStelle({ eintrag }) {
  const { unternehmen } = eintrag;

  return (
    <div>
      <EintragObertitel titel={unternehmen} />
      <EintragInhalt eintrag={eintrag} />
    </div>
  );
}

function StelleGruppeEintrag({ eintrag }) {
  const { unternehmen, stelleGruppe } = eintrag;

  return (
    <div>
      {stelleGruppe.letzteStelle && (
        <EintragObertitel titel={unternehmen} />
      )}

      <div className="pl-4 border-l-4 border-gray-400">
        <EintragInhalt className="mt-2" eintrag={eintrag} />
      </div>
    </div>
  );
}

function EintragInhalt({ eintrag, className }) {
  const { projekt, titel, ort, zeitraum, punkte } = eintrag;
  const projektTitel = projekt && (
    <>
      <span className="font-semibold">{projekt}</span>
      <span> | </span>
    </>
  );

  return (
    <div className={className}>
      <div className="relative mb-3">
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-sm text-gray-700">
            {projektTitel} {titel}
          </h3>
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

function EintragObertitel({ titel, children }) {
  return (
    <div className="text-sm font-semibold text-gray-800">
      {children ? children : <span>{titel}</span>}
    </div>
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

export function Punkt({ punkt = {}, children }) {
  return (
    <div className="space-y-1 break-inside-avoid">
      {punkt.tags?.length > 0 && (
        <div className="pl-4">{<TagListe tags={punkt.tags} />}</div>
      )}
      <ul className="list-disc list-outside pl-3 text-beschreibung">
        <li>
          {children ? (
            children
          ) : (
            <p>
              <span>{punkt.text}</span>
            </p>
          )}
        </li>
      </ul>
    </div>
  );
}

const TagClient = dynamic(() => import("./TagClient"));

export function TagListe({ tags }) {
  return (
    <div className="flex flex-wrap gap-2 text-sm text-gray-700">
      {tags.map((tag, i) => (
        <TagClient key={i}>{tag}</TagClient>
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
