import Link from "next/link";
import { recipes } from "@/data/recipes";

export default function RecipeList({ category }: { category?: string }) {
  const selection = category ? recipes.filter(r => (r.categories as readonly string[]).includes(category)) : recipes;
  return <section className="rounded-[2rem] border border-[#6f2b1b]/10 bg-white/75 p-6 md:p-8">
    <h2 className="font-serif text-3xl font-black text-[#742115]">Receptek hozzávalókkal és elkészítéssel</h2>
    <p className="mt-3 leading-7 text-[#69483d]">Válassz egy fogást: az adagok, a hozzávalók és a lépések az oldalon olvashatók. Az idő becslés, az előkészítést is tartalmazza; a köret elkészítése külön időt igényelhet.</p>
    <div className="mt-5 grid gap-4 sm:grid-cols-2">{selection.map(r => <Link key={r.slug} href={`/receptek/${r.slug}/`} className="rounded-2xl bg-[#fff5e8] p-5 transition hover:bg-[#f8e7d4] focus-visible:outline-2">
      <h3 className="text-xl font-black text-[#742115]">{r.title}</h3>
      <p className="mt-2 text-sm font-bold text-[#4d6d36]">Kb. {r.minutes} perc · {r.servings} adag</p>
      <p className="mt-3 leading-7 text-[#69483d]">{r.intro}</p>
      <span className="mt-3 block font-bold underline">Recept elolvasása →</span>
    </Link>)}</div>
  </section>;
}
