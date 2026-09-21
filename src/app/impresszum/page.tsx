import type { Metadata } from "next";
import InfoPage from "@/components/content/InfoPage";

export const metadata: Metadata = {
  title: "Impresszum",
  description: "A mitfozzekmost.hu weboldal üzemeltetői és tárhelyszolgáltatói adatai.",
  alternates: { canonical: "/impresszum/" },
};

export default function Page() {
  return (
    <InfoPage title="Impresszum" intro="A mitfozzekmost.hu weboldal szolgáltatói és üzemeltetői adatai.">
      <section className="rounded-2xl border border-[#6f2b1b]/10 bg-white/75 p-6">
        <h2 className="font-serif text-2xl font-black text-[#742115]">Szolgáltató / tulajdonos</h2>
        <div className="mt-4 space-y-1">
          <p><strong>Név:</strong> Mezei Tamás e.v.</p>
          <p><strong>Nyilvántartási szám:</strong> 60025061</p>
          <p><strong>Adószám:</strong> 90698392-1-29</p>
          <p><strong>Weboldal:</strong> mitfozzekmost.hu</p>
          <p><strong>Kapcsolat:</strong> <a className="font-black underline" href="https://mezeitamasdev.hu" target="_blank" rel="noopener noreferrer">mezeitamasdev.hu</a></p>
        </div>
      </section>

      <section className="rounded-2xl border border-[#6f2b1b]/10 bg-white/75 p-6">
        <h2 className="font-serif text-2xl font-black text-[#742115]">Tárhelyszolgáltató</h2>
        <div className="mt-4 space-y-1">
          <p><strong>Név:</strong> RackForest Zrt.</p>
          <p><strong>Székhely:</strong> 1132 Budapest, Victor Hugo utca 11. 5. em. B05001.</p>
          <p><strong>Adószám:</strong> 32056842-2-41</p>
          <p><strong>Cégjegyzékszám:</strong> 01-10-142004</p>
        </div>
      </section>

      <section>
        <h2 className="font-serif text-2xl font-black text-[#742115]">Szerzői jog</h2>
        <p className="mt-3">A weboldal saját szöveges és vizuális tartalmai, valamint a weboldal egyedi megjelenése szerzői jogi védelem alatt állhatnak. A tartalmak engedély nélküli, üzletszerű újraközlése vagy másolása nem megengedett.</p>
      </section>
    </InfoPage>
  );
}
