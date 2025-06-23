import { getDaten, getEtiketten } from "./parse";
import {
  Kopfbereich,
  Vorstellung,
  FaehigkeitenSektion,
  SprachenSektion,
  BerufserfahrungSektion,
  OpensourceSektion,
} from "./components";

export default function Page() {
  const lang = "de"; // später z.B. per URL oder Header

  const daten = getDaten(lang);
  const etiketten = getEtiketten(lang);
  const {
    kopfdaten,
    vorstellung,
    faehigkeiten,
    sprachen,
    berufserfahrung,
    opensource,
  } = daten;

  return (
    <main className="grid grid-cols-3 gap-6 p-6 max-w-screen-lg mx-auto">
      <Kopfbereich {...kopfdaten} />
      <aside className="col-span-1 space-y-6">
        <FaehigkeitenSektion
          daten={faehigkeiten}
          etiketten={etiketten.faehigkeiten}
        />
        <SprachenSektion daten={sprachen} etiketten={etiketten.sprachen} />
      </aside>
      <section className="col-span-2 space-y-4">
        <Vorstellung
          vorstellung={vorstellung}
          etiketten={etiketten.vorstellung}
        />
        <BerufserfahrungSektion
          daten={berufserfahrung}
          etiketten={etiketten.berufserfahrung}
        />
        <OpensourceSektion
          daten={opensource}
          etiketten={etiketten.opensource}
        />
      </section>
    </main>
  );
}
