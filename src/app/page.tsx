"use client";

import Advertisement from "@/components/advertisement/Default";
import Button from "@/components/buttons/Default";
import Card from "@/components/cards/Default";
import { Food, FoodNumber, RandomFood } from "@/utils/RandomRecipe";
import { useState } from "react";
import Image from "next/image";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mitfozzekmost.hu";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Mit főzzek ma?",
      inLanguage: "hu-HU",
      description:
        "Magyar menü sorsoló, amely egy levest, egy főételt és egy desszertet ajánl.",
      publisher: {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "MTD",
      },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "MTD",
      url: "https://mezeitamasdev.hu",
      logo: `${siteUrl}/icon-512.png`,
    },
    {
      "@type": "WebApplication",
      "@id": `${siteUrl}/#app`,
      name: "Mit főzzek ma? – Magyar menü sorsoló",
      url: siteUrl,
      applicationCategory: "LifestyleApplication",
      operatingSystem: "Web",
      inLanguage: "hu-HU",
      isAccessibleForFree: true,
      description:
        "Egy kattintással véletlenszerű magyaros levest, főételt és desszertet sorsoló webalkalmazás.",
      creator: {
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Mit csinál a Mit főzzek ma? oldal?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Az oldal egyetlen kattintással ajánl egy levest, egy főételt és egy desszertet, főként magyaros és itthon ismert fogásokból.",
          },
        },
        {
          "@type": "Question",
          name: "Ingyenes a menü sorsoló?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Igen, az oldal ingyenesen használható, regisztráció nélkül.",
          },
        },
        {
          "@type": "Question",
          name: "Külön is újrasorsolható a leves, a főétel vagy a desszert?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Igen, ha csak egy fogás nem tetszik, azt külön is újra lehet sorsolni.",
          },
        },
        {
          "@type": "Question",
          name: "Vannak receptlinkek is?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Igen, minden ételnél elérhető receptkeresés, így rögtön tovább tudsz menni az elkészítéshez.",
          },
        },
      ],
    },
  ],
};

const loadingFood: Food = {
  name: "Sorsoljuk...",
  source: "#",
  image_src: "/loading.gif",
  loading: true,
};

const faqs = [
  {
    q: "Mit tud ez az oldal?",
    a: "A menü sorsoló egy teljes napi ötletet ad: 1 leves, 1 főétel és 1 desszert jelenik meg egy kattintás után.",
  },
  {
    q: "Csak magyar ételek vannak benne?",
    a: "A hangsúly a magyaros, itthon jól ismert fogásokon van: klasszikus levesek, főételek, tészták, egytálételek és desszertek szerepelnek benne.",
  },
  {
    q: "Mi van, ha csak az egyik fogás nem tetszik?",
    a: "Semmi gond: külön újrasorsolhatod csak a levest, csak a főételt vagy csak a desszertet.",
  },
  {
    q: "Kapok receptötletet is?",
    a: "Igen. Minden fogásnál van receptkereső link, így rögtön tovább tudsz menni a részletes recepthez.",
  },
];

export default function Home() {
  const [soup, setSoup] = useState<Food>();
  const [main, setMain] = useState<Food>();
  const [dessert, setDessert] = useState<Food>();

  const hasResult = soup && main && dessert;

  const handleRandom = async (food?: FoodNumber) => {
    if (food === FoodNumber.SOUP) {
      setSoup(loadingFood);
      setSoup(await RandomFood(FoodNumber.SOUP));
      return;
    }

    if (food === FoodNumber.MAIN) {
      setMain(loadingFood);
      setMain(await RandomFood(FoodNumber.MAIN));
      return;
    }

    if (food === FoodNumber.DESSERT) {
      setDessert(loadingFood);
      setDessert(await RandomFood(FoodNumber.DESSERT));
      return;
    }

    setSoup(loadingFood);
    setMain(loadingFood);
    setDessert(loadingFood);

    const [newSoup, newMain, newDessert] = await Promise.all([
      RandomFood(FoodNumber.SOUP),
      RandomFood(FoodNumber.MAIN),
      RandomFood(FoodNumber.DESSERT),
    ]);

    setSoup(newSoup);
    setMain(newMain);
    setDessert(newDessert);
  };

  return (
    <main className="min-h-screen px-2 py-2 font-sans sm:px-3 sm:py-4 md:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="mx-auto w-full max-w-[1480px] overflow-hidden rounded-[1.25rem] border border-[#6f2b1b]/15 sm:rounded-[2rem] bg-[#fffaf0]/80 shadow-[0_20px_70px_rgba(87,35,21,0.12)] backdrop-blur-sm">
        <header className="flex items-center justify-between gap-2 border-b border-[#6f2b1b]/10 sm:gap-4 bg-white/70 px-4 py-3 md:px-7">
          <div className="flex items-center gap-3">
            <Image src="/logo-mark.png" alt="Mit főzzek ma? embléma" width={54} height={54} priority className="h-11 w-11 shrink-0 sm:h-[54px] sm:w-[54px]" />
            <div>
              <div className="font-serif text-lg font-black tracking-tight text-[#742115] sm:text-xl md:text-2xl">Mit főzzek ma?</div>
              <div className="text-xs font-semibold text-[#4d6d36]">Magyar ízek. Nincs több fejtörés.</div>
            </div>
          </div>
          <div className="hidden rounded-full border border-[#4d6d36]/20 bg-[#f4f8ed] px-4 py-2 text-xs font-bold text-[#4d6d36] sm:block">
            Leves · Főétel · Desszert
          </div>
        </header>

        <section className="relative overflow-hidden border-b border-[#6f2b1b]/10 bg-[linear-gradient(135deg,#fff4dc_0%,#fffaf0_50%,#f8e7d4_100%)] px-4 py-8 text-center sm:px-5 sm:py-10 md:px-10 md:py-14">
          <div className="pointer-events-none absolute -left-10 -top-16 h-52 w-52 rounded-full bg-[#c5231a]/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-8 h-64 w-64 rounded-full bg-[#4d7b36]/10 blur-3xl" />
          <p className="relative mb-2 text-xs font-black uppercase tracking-[0.28em] text-[#4d6d36]">Mai menü sorsoló</p>
          <h1 className="relative font-serif text-4xl font-black tracking-tight text-[#742115] sm:text-5xl md:text-7xl">Mit főzzek ma?</h1>
          <p className="relative mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#623f34] md:text-xl">
            Sorsolj egy teljes, magyaros menüt egyetlen kattintással: egy levest, egy főételt és egy desszertet.
          </p>
          <div className="relative mt-7">
            <Button onClick={() => handleRandom()} title={hasResult ? "Sorsolj új menüt" : "Sorsolj nekem egy menüt!"} />
          </div>
        </section>

        <div className="grid gap-4 p-3 sm:p-4 md:gap-5 md:p-6 xl:grid-cols-[180px_minmax(0,1fr)_180px]">
          <Advertisement
            className="hidden min-h-[560px] xl:flex"
            label="Hirdetés"
            slot={process.env.NEXT_PUBLIC_ADSENSE_BOTTOM_LEFT_SLOT}
          />

          <div className="min-w-0 space-y-6">
            {hasResult ? (
              <>
                <section className="grid items-stretch gap-4 md:grid-cols-3 md:gap-5">
                  <Card onClick={() => handleRandom(FoodNumber.SOUP)} title="Leves" food={soup} />
                  <Card onClick={() => handleRandom(FoodNumber.MAIN)} title="Főétel" food={main} />
                  <Card onClick={() => handleRandom(FoodNumber.DESSERT)} title="Desszert" food={dessert} />
                </section>
                <p className="text-center text-sm font-semibold text-[#76564c]">
                  Nem tetszik valamelyik? Csak azt az egy fogást sorsold újra.
                </p>
              </>
            ) : (
              <section className="grid gap-4 md:grid-cols-3">
                {[
                  ["🥣", "Leves", "Klasszikus és tartalmas magyar levesek"],
                  ["🍲", "Főétel", "Házias, hétköznapi és ünnepi fogások"],
                  ["🍰", "Desszert", "Sütemények és magyar kedvencek"],
                ].map(([emoji, label, desc]) => (
                  <div key={label} className="rounded-[1.6rem] border border-[#7b3e2f]/10 bg-white/75 px-5 py-7 text-center shadow-sm">
                    <div className="text-4xl" aria-hidden="true">{emoji}</div>
                    <h2 className="mt-3 font-serif text-2xl font-black text-[#742115] [overflow-wrap:anywhere]">{label}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-[#76564c]">{desc}</p>
                  </div>
                ))}
              </section>
            )}

            <Advertisement
              className="min-h-[110px]"
              label="Hirdetés"
              slot={process.env.NEXT_PUBLIC_ADSENSE_MIDDLE_SLOT}
            />

            <section className="rounded-[2rem] border border-[#6f2b1b]/10 bg-white/70 p-6 md:p-9">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#4d6d36]">Ötlet egy kattintásra</p>
              <h2 className="mt-2 font-serif text-3xl font-black text-[#742115] [overflow-wrap:anywhere] md:text-4xl">Mit főzzek ma ebédre vagy vacsorára?</h2>
              <p className="mt-4 leading-relaxed text-[#69483d]">
                Ha minden nap ugyanaz a kérdés jár a fejedben, a menü sorsoló segít dönteni. Egyetlen kattintással kapsz egy teljes háromfogásos ötletet, főként magyaros és itthon jól ismert fogásokból.
              </p>
              <div className="mt-7 grid gap-4 md:grid-cols-3">
                {[
                  ["🇭🇺", "Magyaros kínálat", "Sok klasszikus, házias és itthon megszokott étel."],
                  ["🎲", "Véletlenszerű", "Minden sorsolás új kombinációt adhat."],
                  ["🔎", "Recept link", "A kiválasztott fogáshoz rögtön receptet is kereshetsz."],
                ].map(([icon, title, desc]) => (
                  <div key={title} className="rounded-2xl bg-[#fff5e8] p-5">
                    <div className="text-2xl">{icon}</div>
                    <h3 className="mt-2 font-black text-[#742115]">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#76564c]">{desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[2rem] border border-[#6f2b1b]/10 bg-white/70 p-6 md:p-9">
              <h2 className="font-serif text-3xl font-black text-[#742115] [overflow-wrap:anywhere]">Gyakori kérdések</h2>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {faqs.map((faq) => (
                  <article key={faq.q} className="rounded-2xl border border-[#6f2b1b]/10 bg-[#fffaf2] p-5">
                    <h3 className="font-black text-[#742115]">{faq.q}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#76564c]">{faq.a}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <Advertisement
            className="hidden min-h-[560px] xl:flex"
            label="Hirdetés"
            slot={process.env.NEXT_PUBLIC_ADSENSE_BOTTOM_RIGHT_SLOT}
          />
        </div>

        <div className="px-4 pb-5 md:px-6">
          <Advertisement
            className="min-h-[90px]"
            label="Hirdetés"
            slot={process.env.NEXT_PUBLIC_ADSENSE_TOP_SLOT}
          />
        </div>

        <footer className="border-t border-[#6f2b1b]/10 bg-[#2d241f] px-5 py-6 text-center text-sm text-white/65">
          <p>Sorsolj egy menüt, főzz valami jót!</p>
          <p className="mt-2 font-black text-white">
            Készítette:{" "}
            <a
              href="https://mezeitamasdev.hu"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-white/35 underline-offset-4 transition hover:text-[#f6c455]"
              aria-label="MTD – mezeitamasdev.hu (új ablakban nyílik meg)"
            >
              MTD
            </a>{" "}
            <span aria-hidden="true">♥</span>
          </p>
        </footer>
      </div>
    </main>
  );
}
