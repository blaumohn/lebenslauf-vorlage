import { lebenslaufSchema } from "../app/schema.js";
import { ladeFixtures } from "./fixtures/index.js";

const { lebenslauf } = ladeFixtures();

describe("CV-Schema", () => {
  it("akzeptiert gültige Daten", () => {
    expect(() => lebenslaufSchema.parse(lebenslauf.gueltig)).not.toThrow();
  });

  it("lehnt unvollständige Daten ab", () => {
    expect(() => lebenslaufSchema.parse(lebenslauf.ungueltig)).toThrow();
  });
});
