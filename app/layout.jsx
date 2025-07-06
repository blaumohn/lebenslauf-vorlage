import "./globals.css";
export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased p-6">{children}</body>
    </html>
  );
}
