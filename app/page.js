import {
  Kopfbereich,
  Vorstellung,
  FaehigkeitenSektion,
  SprachenSektion,
} from "./components/sektionen";
import EintragsSektion from "./components/Eintraege";
import getLebenslaufDaten from "./parseDaten.js";

export default function Page() {
  const {
    kopf,
    berufserfahrung,
    faehigkeiten,
    sprachen,
    opensource,
    vorstellung,
  } = getLebenslaufDaten();
  return (
    <main className="grid grid-cols-3 gap-6 p-6 print:grid-cols-3 print:p-4 print:text-sm max-w-screen-lg mx-auto">
      {/* Linke Spalte */}
      <aside className="col-span-1 space-y-6">
        <Kopfbereich {...kopf} />
        <FaehigkeitenSektion daten={faehigkeiten} />
        <SprachenSektion daten={sprachen} />
        <Vorstellung daten={vorstellung} />
      </aside>

      {/* Rechte Spalte */}
      <section className="col-span-2 space-y-8">
        <EintragsSektion
          titel="Berufserfahrung"
          farbe="blue"
          daten={berufserfahrung}
        />
        <EintragsSektion titel="Open Source" farbe="green" daten={opensource} />
      </section>
    </main>
  );
}
