import fs from "fs";
import yaml from "yaml";
import { lebenslaufSchema } from "../app/schema.js";

const yamlText = fs.readFileSync("./daten.yaml", "utf8");
const validFixture = yaml.parse(yamlText);

describe("CV-Schema", () => {
  it("akzeptiert gültige Daten", () => {
    expect(() => lebenslaufSchema.parse(validFixture)).not.toThrow();
  });

  it("lehnt unvollständige Daten ab", () => {
    const ungueltig = { ...validFixture };
    delete ungueltig.motivation; // z. B. ein Pflichtfeld
    expect(() => lebenslaufSchema.parse(ungueltig)).toThrow();
  });
});
