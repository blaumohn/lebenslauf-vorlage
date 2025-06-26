import { getDaten, getEtiketten } from "./parse";
import {
  Kopfbereich,
  Motivation,
  FaehigkeitenSektion,
  SprachenSektion,
  BerufserfahrungSektion,
  OpensourceSektion,
} from "./components";
import { AusbildungSektion } from "./components/sektionen";

export default function Page() {
  const lang = "de"; // später z.B. per URL oder Header

  const daten = getDaten(lang);
  const etiketten = getEtiketten(lang);
  const {
    kopfdaten,
    motivation,
    faehigkeiten,
    sprachen,
    berufserfahrung,
    vortraege,
    interessen,
    ausbildung,
    opensource,
  } = daten;

  return (
    <main className="grid grid-cols-4 gap-6 p-6 max-w-screen-lg mx-auto">
      <aside className="col-span-1 col-start-1 space-y-8">
        <Kopfbereich {...kopfdaten} halbe="links" />

        <FaehigkeitenSektion
          daten={faehigkeiten}
          etiketten={etiketten.faehigkeiten}
        />

        <SprachenSektion daten={sprachen} etiketten={etiketten.sprachen} />
      </aside>
      <section className="col-start-2 col-span-3 space-y-8">
        <Kopfbereich {...kopfdaten} halbe="rechts" />

        <Motivation
          motivation={motivation}
          etiketten={etiketten.motivation}
        />

        <BerufserfahrungSektion
          daten={berufserfahrung}
          etiketten={etiketten.berufserfahrung}
        />

        <OpensourceSektion
          daten={opensource}
          etiketten={etiketten.opensource}
        />

        <AusbildungSektion
          daten={ausbildung}
          etiketten={etiketten.ausbildung}
        />
      </section>
    </main>
  );
}
