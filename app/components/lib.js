export function macheVollUrl(url) {
  if (/^https?:\/\//i.test(url)) return url;
  return `https://${url}`;
}

export function heutigesDatum() {
  const heute = new Date();
  const monat = String(heute.getMonth() + 1).padStart(2, "0");
  const jahr = heute.getFullYear();
  return `${monat}.${jahr}`; // z.‚ÄØB. "07.2025"
}
