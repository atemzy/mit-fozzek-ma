# Mit főzzek ma?

Magyar menüsorsoló Next.js alapon a `mitfozzekmost.hu` domainhez.

## Fejlesztés

```bash
npm install
npm run dev
```

## Ellenőrzés

```bash
npm run lint
npm run build
```

A `next build` statikus exportot készít az `out` mappába. Apache tárhelyen az `out` mappa tartalmát kell feltölteni a domain dokumentumgyökerébe; a szükséges `.htaccess` automatikusan bekerül az exportba a `public/.htaccess` fájlból.

## Környezeti változók

Másold a `.env.example` fájlt `.env.local` néven, majd töltsd ki az AdSense és Search Console azonosítókat. A részletes AdSense lépések az `ADSENSE_SETUP.md` fájlban vannak.
