import "../globals.css";
import { Source_Sans_3 } from "next/font/google";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-source-sans",
  display: "swap",
});

// 'async' wurde hinzugefügt, um die Next.js-Warnung zu vermeiden,
// obwohl die Anwendung auch ohne funktioniert.
export default async function Layout({ children, params }) {
  const { lang } = await params;
  return (
    <html
      lang={lang}
      className={`${sourceSans.className} no-js max-w-screen mx-auto`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.remove('no-js'); document.documentElement.classList.add('js');`,
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
