import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export default function getLebenslaufDaten() {
  const dateipfad = path.join(process.cwd(), 'daten.yaml');
  const inhalt = fs.readFileSync(dateipfad, 'utf8');
  return yaml.load(inhalt);
}
