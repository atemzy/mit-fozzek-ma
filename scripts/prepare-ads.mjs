import { readFileSync, writeFileSync, existsSync } from 'node:fs';
// Run before next build; process variables override .env files, like Next.js.
for (const filename of ['.env.production.local', '.env.local', '.env.production', '.env']) {
  if (!existsSync(filename)) continue;
  for (const line of readFileSync(filename, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*(NEXT_PUBLIC_ADSENSE_[A-Z_]+)\s*=\s*(.*?)\s*$/);
    if (m && process.env[m[1]] === undefined) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
}
const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT || '';
const enabled = process.env.NEXT_PUBLIC_ADSENSE_ENABLED === 'true';
if (client && !/^ca-pub-\d{16}$/.test(client)) throw new Error('Hibás AdSense client: ca-pub- + 16 számjegy szükséges.');
if (enabled && (!client || process.env.NEXT_PUBLIC_ADSENSE_CMP_READY !== 'true')) throw new Error('Hirdetéshez valódi client és beállított, tanúsított CMP szükséges.');
const output = client ? `google.com, ${client.replace(/^ca-/, '')}, DIRECT, f08c47fec0942fa0\n` : '# Nincs beallitott AdSense megjelenitoi azonosito.\n# Add meg a NEXT_PUBLIC_ADSENSE_CLIENT erteket (.env.local), majd futtasd: npm run build\n# A helyes sor formatuma: google.com, pub-<sajat 16 szamjegy>, DIRECT, f08c47fec0942fa0\n';
writeFileSync('public/ads.txt', output);
console.log(client ? 'ads.txt: valódi megjelenítői azonosító beírva.' : 'ads.txt: azonosító hiányzik; nincs engedélyezett hirdetésértékesítő.');
