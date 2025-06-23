import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import { extrahiereSprache } from "./lib";

export function getObjektVonYaml(dateipfad, lang, schema, mockDatenPfad) {
  console.log({ mockDatenPfad });
  const yamlString = getDatei(dateipfad, mockDatenPfad);

  const yamlObjekt = yaml.load(yamlString);

  const validiert = schema.parse(yamlObjekt);
  return extrahiereSprache(validiert, lang);
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
