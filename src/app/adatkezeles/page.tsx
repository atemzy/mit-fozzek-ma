import type { Metadata } from "next";
import InfoPage from "@/components/content/InfoPage";

export const metadata: Metadata = {
  title: "Adatkezelési tájékoztató",
  description: "A mitfozzekmost.hu adatkezelési tájékoztatója, különös tekintettel az AdSense és cookie használatra.",
  alternates: { canonical: "/adatkezeles/" },
};

export default function Page() {
  return (
    <InfoPage title="Adatkezelési tájékoztató" intro="Tájékoztató a mitfozzekmost.hu használatához kapcsolódó személyesadat-kezelésekről.">
      <section>
        <h2 className="font-serif text-2xl font-black text-[#742115]">1. Az adatkezelő adatai</h2>
        <div className="mt-3 space-y-1">
          <p><strong>Adatkezelő:</strong> Mezei Tamás e.v.</p>
          <p><strong>Nyilvántartási szám:</strong> 60025061</p>
          <p><strong>Adószám:</strong> 90698392-1-29</p>
          <p><strong>Weboldal:</strong> mitfozzekmost.hu</p>
          <p><strong>Kapcsolat:</strong> <a className="font-black underline" href="https://mezeitamasdev.hu" target="_blank" rel="noopener noreferrer">mezeitamasdev.hu</a></p>
        </div>
      </section>

      <section>
        <h2 className="font-serif text-2xl font-black text-[#742115]">2. A weboldal alapvető használata</h2>
        <p className="mt-3">A menüsorsoló használatához nem szükséges regisztráció, felhasználói fiók létrehozása vagy személyes adatok közvetlen megadása. A kiszolgálás során a tárhelyszolgáltató technikai naplóadatokat – például IP-címet, időpontot, kért erőforrást és böngészőre vonatkozó technikai adatot – kezelhet a szolgáltatás biztonságos működtetése és hibakeresése érdekében.</p>
      </section>

      <section>
        <h2 className="font-serif text-2xl font-black text-[#742115]">3. Google AdSense és hirdetések</h2>
        <p className="mt-3">A weboldal Google AdSense hirdetéseket jeleníthet meg. A Google és a hirdetési technológiai partnerei sütiket, helyi tárolót, eszközazonosítókat és hasonló technológiákat használhatnak a hirdetések megjelenítéséhez, gyakoriságának szabályozásához, csalásmegelőzéshez, méréshez és – megfelelő hozzájárulás esetén – személyre szabáshoz.</p>
        <p className="mt-3">Az Európai Gazdasági Térségből, az Egyesült Királyságból és Svájcból érkező látogatóknál a hozzájárulás kezelésére Google által tanúsított, IAB TCF-kompatibilis hozzájárulás-kezelő platform alkalmazandó. A jelen megoldás a hozzájárulás-kezelő által visszaigazolt engedélyekig nem tölt be AdSense-hirdetést; elutasítás esetén a menüsorsoló továbbra is használható.</p>
      </section>

      <section>
        <h2 className="font-serif text-2xl font-black text-[#742115]">4. Kapcsolatfelvétel</h2>
        <p className="mt-3">Ha a látogató e-mailben vagy a mezeitamasdev.hu oldalon elérhető csatornán kapcsolatba lép az adatkezelővel, az önkéntesen megadott adatokat – jellemzően név, e-mail-cím és az üzenetben közölt egyéb adatok – a megkeresés megválaszolása és az ehhez kapcsolódó kommunikáció céljából kezeljük.</p>
        <p className="mt-3">A megkereséssel kapcsolatos adatokat legfeljebb a cél fennállásáig, illetve főszabály szerint legfeljebb 1 évig őrizzük meg, kivéve, ha jogszabály hosszabb megőrzést ír elő vagy az érintett korábban kéri a törlést és nincs más jogalap a további kezelésre.</p>
      </section>

      <section>
        <h2 className="font-serif text-2xl font-black text-[#742115]">5. Adattovábbítás és adatfeldolgozók</h2>
        <p className="mt-3">A weboldal működtetéséhez szükséges mértékben adatfeldolgozóként közreműködhet a tárhelyszolgáltató, valamint hirdetési szolgáltatóként a Google és annak, a hozzájárulási felületen megjelölt hirdetési technológiai partnerei. Adat továbbítására jogszabályi kötelezettség esetén hatóság vagy bíróság részére is sor kerülhet.</p>
      </section>

      <section>
        <h2 className="font-serif text-2xl font-black text-[#742115]">6. Az érintett jogai</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>hozzáférés kérése a kezelt személyes adatokhoz;</li>
          <li>helyesbítés vagy – ha annak feltételei fennállnak – törlés kérése;</li>
          <li>az adatkezelés korlátozásának kérése;</li>
          <li>tiltakozás az arra jogosító adatkezeléssel szemben;</li>
          <li>hozzájárulás visszavonása, ha az adatkezelés hozzájáruláson alapul;</li>
          <li>az alkalmazandó feltételek mellett adathordozhatóság kérése.</li>
        </ul>
        <p className="mt-3">Adatvédelmi panasz benyújtható a Nemzeti Adatvédelmi és Információszabadság Hatósághoz (NAIH) is.</p>
      </section>

      <section>
        <h2 className="font-serif text-2xl font-black text-[#742115]">7. Adatbiztonság</h2>
        <p className="mt-3">Az adatkezelő a kockázatokkal arányos technikai és szervezési intézkedésekkel törekszik a kezelt adatok bizalmasságának, sértetlenségének és rendelkezésre állásának biztosítására.</p>
      </section>

      <p>A Google adatfelhasználásáról a <a className="underline" href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">Google partneroldalakra vonatkozó tájékoztatójában</a> olvashatsz. Külső receptkereséskor elhagyod ezt a weboldalt; a céloldal saját adatkezelési szabályai érvényesek.</p>
      <p className="rounded-2xl bg-[#fff5e8] p-5 text-sm">Utolsó frissítés: 2026. október 5. A Google hirdetési partnereinek aktuális listája és a részletes hozzájárulási lehetőségek a weboldalon megjelenő hozzájárulás-kezelő felületen érhetők el.</p>
    </InfoPage>
  );
}
