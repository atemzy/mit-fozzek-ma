import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#6f2b1b]/10 bg-[#2d241f] px-5 py-8 text-sm text-white/70">
      <div className="mx-auto w-full max-w-[1480px]">
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div>
            <p className="font-serif text-xl font-black text-white">
              Mit főzzek ma?
            </p>
            <p className="mt-2 max-w-xl leading-relaxed">
              Ötletek hétköznapi és hétvégi főzéshez, magyaros fogásokkal és egy
              egyszerű menüsorsolóval.
            </p>
          </div>

          <div className="md:justify-self-end md:text-right">
            <nav
              className="mt-3 flex flex-wrap gap-x-4 gap-y-2 md:max-w-xl md:justify-end"
              aria-label="Lábléc navigáció"
            >
              <Link href="/rolunk" className="hover:text-white">
                Az oldalról
              </Link>
              <Link href="/kapcsolat" className="hover:text-white">
                Kapcsolat
              </Link>
              <Link href="/impresszum" className="hover:text-white">
                Impresszum
              </Link>
              <Link href="/adatkezeles" className="hover:text-white">
                Adatkezelés
              </Link>
              <Link href="/cookie-tajekoztato" className="hover:text-white">
                Cookie tájékoztató
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-5 text-center">
          <p className="font-black text-white">
            Készítette:{" "}
            <a
              href="https://mezeitamasdev.hu"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-white/35 underline-offset-4 hover:text-[#f6c455]"
            >
              MTD
            </a>{" "}
            <span aria-hidden="true">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
