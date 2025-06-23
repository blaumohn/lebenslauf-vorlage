import { lebenslaufSchema, etikettenSchema } from "../app/schema.js";
import path from "path";
import yaml from "js-yaml";
import fs from "fs";

function getObjektVonYaml(dateipfad) {
  const pfad = path.join(process.cwd(), dateipfad);
  const yamlString = fs.readFileSync(pfad, "utf8");
  return yaml.load(yamlString);
}

const lebenslaufJsonObjekt = getObjektVonYaml("daten.yaml");
lebenslaufSchema.parse(lebenslaufJsonObjekt);

const etikettenJsonObjekt = getObjektVonYaml("app/etiketten.yaml");
console.log(etikettenJsonObjekt);
console.log(etikettenSchema.parse(etikettenJsonObjekt));
