import type { Metadata } from "next";
import InfoPage from "@/components/content/InfoPage";

export const metadata: Metadata = {
  title: "Cookie tájékoztató",
  description: "Tájékoztató a mitfozzekmost.hu által és a Google AdSense szolgáltatáshoz kapcsolódóan használt sütikről és hasonló technológiákról.",
  alternates: { canonical: "/cookie-tajekoztato/" },
};

export default function Page() {
  return (
    <InfoPage title="Cookie tájékoztató" intro="Milyen sütik és hasonló technológiák fordulhatnak elő a mitfozzekmost.hu használata során?">
      <section>
        <h2 className="font-serif text-2xl font-black text-[#742115]">1. Mik azok a sütik?</h2>
        <p className="mt-3">A cookie (süti) egy kis adatfájl, amelyet a weboldal vagy egy külső szolgáltató a böngészőben tárolhat. Hasonló célra helyi tároló és más böngészőtechnológiák is használhatók. Ezek egy része a weboldal működéséhez szükséges, mások mérési, biztonsági vagy hirdetési célokat szolgálnak.</p>
      </section>

      <section>
        <h2 className="font-serif text-2xl font-black text-[#742115]">2. Feltétlenül szükséges technológiák</h2>
        <p className="mt-3">A weboldal alapvető technikai működéséhez szükséges tárolási megoldások hozzájárulás nélkül is használhatók, ha azok kizárólag a felhasználó által kért szolgáltatás biztosításához vagy a rendszer biztonságos működéséhez szükségesek.</p>
      </section>

      <section>
        <h2 className="font-serif text-2xl font-black text-[#742115]">3. Google AdSense hirdetési technológiák</h2>
        <p className="mt-3">A Google AdSense és a Google hirdetési technológiai partnerei sütiket vagy hasonló technológiákat használhatnak többek között a hirdetések megjelenítésére, a hirdetések gyakoriságának korlátozására, a visszaélések felismerésére, statisztikai mérésre, valamint megfelelő hozzájárulás esetén személyre szabott hirdetések megjelenítésére.</p>
        <p className="mt-3">A ténylegesen használt technológiák köre, szolgáltatói és megőrzési idői függhetnek a látogató régiójától, hozzájárulási választásától és attól, hogy a Google milyen hirdetési technológiai partnereket használ az adott megjelenítésnél.</p>
      </section>

      <section>
        <h2 className="font-serif text-2xl font-black text-[#742115]">4. Hozzájárulás és beállítások</h2>
        <p className="mt-3">Az Európai Gazdasági Térségből, az Egyesült Királyságból és Svájcból érkező látogatóknál a nem feltétlenül szükséges hirdetési technológiákhoz kapcsolódó döntéseket a Google által tanúsított, IAB TCF-kompatibilis hozzájárulás-kezelő felület kezeli.</p>
        <p className="mt-3">A hozzájárulás megadása vagy elutasítása nem akadályozza a menüsorsoló alapvető használatát. A választás befolyásolhatja, hogy milyen típusú hirdetés jelenhet meg. A böngésző saját beállításaiban a sütik törölhetők vagy részben letilthatók, ez azonban egyes szolgáltatások működését is érintheti.</p>
      </section>

      <section>
        <h2 className="font-serif text-2xl font-black text-[#742115]">5. Külső szolgáltatók</h2>
        <p className="mt-3">A hirdetési szolgáltatás fő szolgáltatója a Google. Az aktuális hirdetési technológiai partnerekről, adatkezelési célokról és a hozzájárulási lehetőségekről a weboldalon megjelenő consent/CMP felület nyújt részletes, naprakész tájékoztatást.</p>
      </section>

      <p className="rounded-2xl bg-[#fff5e8] p-5 text-sm">Utolsó frissítés: 2026. szeptember 16. A cookie-tájékoztató oldal a jogi tájékoztatást szolgálja; a tényleges hozzájárulás begyűjtését külön, Google által tanúsított CMP-nek kell végeznie.</p>
    </InfoPage>
  );
}
