import { __testtables__ } from "../../app/parse/yaml.js";
import { lebenslaufMockDatenPfad } from "../../config.js";

const { ladeObjektVonYamlDatei } = __testtables__;

function rekursiveKopie(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export function ladeFixtures() {
  const lebenslauf = {
    gueltig: ladeObjektVonYamlDatei(lebenslaufMockDatenPfad),
    ungueltig: null,
  };
  lebenslauf.ungueltig = rekursiveKopie(lebenslauf.gueltig);
  delete lebenslauf.ungueltig.motivation; // z. B. ein Plitchfeld
  return { lebenslauf };
}
