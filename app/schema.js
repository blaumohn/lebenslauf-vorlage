import { z } from "zod";

const Langs = ["de", "en"];
const zIntlStringObject = Object.fromEntries(
  Langs.map((lang) => [lang, z.string()])
);

const intlString = z.union([z.string(), z.object(zIntlStringObject)]);

const faehigkeitStufe = z.object({
  stufe: intlString,
  wert: z.number(),
  technologien: z.array(intlString),
});

const eintragPunkt = z.object({
  tags: z.array(intlString),
  text: intlString,
});

const eintrag = z.object({
  titel: intlString,
  zeitraum: z.string(),
  punkte: z.array(eintragPunkt),
});

const eintragBeruf = eintrag.extend({
  ort: intlString,
  unternehmen: z.string(),
  stelleGruppe: z
    .object({
      letzteStelle: z.boolean().optional(),
    })
    .optional(),
});

const eintragProjekt = eintrag.extend({
  projekt: z.string(),
});

const sprachen = z.object({
  sprache: intlString,
  stufe: intlString,
});

const eintragAusbildung = z.object({
  uni: intlString,
  grad: intlString,
  beschreibung: intlString,
});

const eintragVortrag = z.object({
  titel: z.string(),
  beschreibung: intlString,
});

export const lebenslaufSchema = z.object({
  kopfdaten: z.object({
    name: z.string(),
    bereich: intlString,
    ort: intlString,
    email: z.string(),
    telefon: z.string(),
    linkedin: z.string(),
  }),
  motivation: intlString,
  faehigkeiten: z.array(faehigkeitStufe),
  berufserfahrung: z.array(eintragBeruf),
  opensource: z.array(eintragProjekt),
  sprachen: z.array(sprachen),
  ausbildung: z.array(eintragAusbildung),
  vortraege: z.array(eintragVortrag),
  interessen: z.array(intlString),
});

export const etikettenSchema = z.lazy(() =>
  z
    .object({
      _: intlString,
    })
    .catchall(z.union([intlString, etikettenSchema]))
);
