import sprachen from "./anzeige-sprachen.json";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Seite nicht gefunden</h1>
      <p>Die angeforderte Seite konnte nicht gefunden werden.</p>
      <p>Wählen Sie eine der folgenden Sprachversionen:</p>
      <div>
        {sprachen.map((lang) => (
          <a
            key={lang}
            href={`/${lang}`}
            style={{ margin: "10px", fontSize: "18px" }}
          >
            {lang}
          </a>
        ))}
      </div>
    </div>
  );
}
