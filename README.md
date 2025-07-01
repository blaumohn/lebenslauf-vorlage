# Lebenslauf Vorlage

Dies ist eine einfache, modulare Vorlage für einen Lebenslauf, die es ermöglicht, das Layout schnell und einfach zu ändern, ohne das gesamte Dokument manuell anzupassen. Mit dieser Vorlage kann der Lebenslauf sowohl für den Druck als auch als HTML-Seite erstellt und geteilt werden.

## Ziele der Anwendung

Die Anwendung wurde entwickelt, um die Erstellung und Anpassung von Lebensläufen zu vereinfachen:

- **Einfache Layout-Anpassung**: Mit der Vorlage kannst du das Layout deines Lebenslaufs einfach ändern, ohne jede Zeile manuell bearbeiten zu müssen.
- **Modulare Programmierung**: Ermöglicht eine einfache Änderung des Layouts, ohne das gesamte Dokument neu schreiben zu müssen. Die Struktur und das Design sind voneinander getrennt.
- **Trennung von Inhalt und Programm**: Verhindert Fehler und erleichtert es, den Lebenslauf schnell zu aktualisieren. Entwickler können den Programtext anpassen, um den Lebenslauf weiter zu personalisieren.
- **Responsive und druckfertig**: Mit ein wenig CSS ist der Lebenslauf sowohl für das Web als auch für den Druck optimiert.
- **Internationalisierung**: Der Lebenslauf lässt sich einfach in verschiedene Sprachen übersetzen, was in mehrsprachigen Umgebungen von Vorteil ist.

## Beispiel

Hier ein Beispiel, wie der Lebenslauf aussehen könnte:

![Lebenslauf Beispiel](screenshot.png)

Du kannst die Vorlage nach deinen Wünschen anpassen und die Änderungen sofort im Browser sehen.

## Verwendung

1. **Installiere die Abhängigkeiten**:

   ```bash
   npm install
   ```

2. **Starte den Entwicklungsserver**:

   ```bash
   npx next dev
   ```

   Dein Lebenslauf wird unter [http://localhost:3000](http://localhost:3000) verfügbar sein.

3. **Daten bearbeiten**:
   Die Lebenslauf-Daten werden in der Datei `data.yaml` gespeichert. Du kannst diese Datei anpassen, um deinen Lebenslauf zu personalisieren. Wenn keine Daten vorhanden sind, wird `tests/data.yaml` als Beispiel-Datenquelle verwendet.

4. **Generierung einer HTML-Seite**:
   Der Lebenslauf wird als HTML-Seite generiert, die du einfach als URL teilen oder für den Druck vorbereiten kannst.

## Projektstruktur

```
/lebenslauf-vorlage
├── /app # React-Komponenten, Seiten und Logik
│ ├── /components # Komponenten für Layout und Darstellung
│ ├── /parse # Daten werden aus YAML-Dateien gelesen.
│ ├── /[lang] # Next.js Seite
│ ├── /etiketten.yaml # Die Beschriftungen für die Sektionen
│ └── /schema.js # Das Schema für die Lebenslauf-Daten
├── /tests # Testdaten (z.B. für Mock-Daten)
├── /data.yaml # Deine persönlichen Lebenslauf-Daten
└── /tests/data.yaml # Beispiel-Mock-Daten
/data.yaml              # Deine persönlichen Lebenslauf-Daten
/globals.css            # Einige CSS / Tailwind Utilities
```

## Zukunftspläne

- Unterstützung für verschiedene Lebenslauf-Designs und -Stile.
- Automatische Integration von Lebenslauf-Daten aus LinkedIn oder anderen Quellen.
- Erweiterte Funktionen zur Personalisierung von Layout und Design.

## Lizenz

Dieses Projekt steht unter der MIT-Lizenz. Weitere Informationen findest du in der [LICENSE](LICENSE)-Datei.
