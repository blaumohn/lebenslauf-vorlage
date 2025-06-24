import path from "path";
import { getObjektVonYaml } from "./yaml.js";
import { etikettenSchema, lebenslaufSchema } from "../schema.js";

export function getEtiketten(lang) {
  const pfad = path.join("app", "etiketten.yaml");
  return getObjektVonYaml(pfad, lang, etikettenSchema);
}

export function getDaten(lang) {
  const mockDatenPfad = path.join("tests", "daten.yaml");
  return getObjektVonYaml(
    "daten.yaml",
    lang,
    lebenslaufSchema,
    mockDatenPfad
  );
}
