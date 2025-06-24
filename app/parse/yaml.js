import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import { extrahiereSprache } from "./lib";

export function getObjektVonYaml(dateipfad, lang, schema, mockDatenPfad) {
  const yamlZeichenkette = getDatei(dateipfad, mockDatenPfad);

  const objektVonYaml = yaml.load(yamlZeichenkette);

  const validiertObjekt = schema.parse(objektVonYaml);
  return extrahiereSprache(validiertObjekt, lang);
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
