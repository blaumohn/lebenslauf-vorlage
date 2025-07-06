import { getDaten, getEtiketten } from "../parse";
import sprachen from "../anzeige-sprachen.json";
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
  Fussbereich,
} from "../components";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const etiketten = getEtiketten(lang);
  return { title: etiketten._, description: etiketten._ };
}

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
    fussbereich,
  } = daten;

  return (
    <div className="flex flex-col space-y-6">
      <main className="max-sm:hyphens-auto flex flex-row gap-4">
        <aside className="w-1/3 xs:w-7/32 space-y-6">
          <Kopfbereich {...kopfdaten} halbe="links" />

          <FaehigkeitenSektion
            daten={faehigkeiten}
            etiketten={etiketten.faehigkeiten}
          />

          <SprachenSektion
            daten={sprachen}
            etiketten={etiketten.sprachen}
          />
          <InteressenSektion
            daten={interessen}
            etiketten={etiketten.interessen}
          />
        </aside>

        <section className="w-2/3 xs:w-25/32 space-y-4">
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
      <Fussbereich
        daten={{ fussbereich, kopfdaten }}
        etiketten={etiketten}
      />
    </div>
  );
}
export function generateStaticParams() {
  return sprachen.map((sprache) => ({ lang: sprache }));
}
