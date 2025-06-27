import { getDaten, getEtiketten } from "../parse";
import {
  Kopfbereich,
  Motivation,
  FaehigkeitenSektion,
  SprachenSektion,
  InteressenSektion,
  BerufserfahrungSektion,
  OpensourceSektion,
  AusbildungSektion,
  Vortraege,
} from "../components";

export default async function Page({ params }) {
  const { lang } = await params;
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
    <main className="flex flex-row gap-4 p-6 max-w-screen-lg mx-auto">
      <aside className="w-7/32 space-y-6">
        <Kopfbereich {...kopfdaten} halbe="links" />

        <FaehigkeitenSektion
          daten={faehigkeiten}
          etiketten={etiketten.faehigkeiten}
        />

        <SprachenSektion daten={sprachen} etiketten={etiketten.sprachen} />
        <InteressenSektion
          daten={interessen}
          etiketten={etiketten.interessen}
        />
      </aside>
      <section className="w-25/32 space-y-4">
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

        <Vortraege daten={vortraege} etiketten={etiketten.vortraege} />

        <AusbildungSektion
          daten={ausbildung}
          etiketten={etiketten.ausbildung}
        />
      </section>
    </main>
  );
}
