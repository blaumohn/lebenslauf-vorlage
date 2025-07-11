import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import { reduziereAufSprache } from "./lib";

export function getObjektVonYaml(dateipfad, lang, schema, mockDatenPfad) {
  const objektVonYaml = ladeObjektVonYamlDatei(dateipfad, mockDatenPfad);

  const validiertObjekt = schema.parse(objektVonYaml);
  return reduziereAufSprache(validiertObjekt, lang);
}

function ladeObjektVonYamlDatei(dateipfad, mockDatenPfad) {
  const yamlZeichenkette = getDatei(dateipfad, mockDatenPfad);
  return yaml.load(yamlZeichenkette);
}

function getDatei(pfad, mockDatenPfad) {
  try {
    return leseDatei(pfad);
  } catch (err) {
    if (mockDatenPfad) {
      return leseDatei(mockDatenPfad);
    } else {
      throw err;
    }
  }
}

function leseDatei(pfad) {
  const vollerPfad = path.join(process.cwd(), pfad);
  return fs.readFileSync(vollerPfad, "utf8");
}

export const __testtables__ = {
  ladeObjektVonYamlDatei,
};
