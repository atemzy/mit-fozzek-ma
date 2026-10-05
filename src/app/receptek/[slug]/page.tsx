import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { recipes } from "@/data/recipes";
import { guides } from "@/app/contentData";
import InfoPage from "@/components/content/InfoPage";
import Advertisement from "@/components/advertisement/Default";
export const dynamicParams = false;
export function generateStaticParams() { return recipes.map(r => ({ slug: r.slug })); }
async function getRecipe(params: Promise<{slug: string}>) { const {slug} = await params; const recipe = recipes.find(r => r.slug === slug); if (!recipe) notFound(); return recipe; }
export async function generateMetadata({params}: {params: Promise<{slug: string}>}): Promise<Metadata> {
  const r = await getRecipe(params);
  return { title: `${r.title} – hozzávalók és elkészítés`, description: r.intro, alternates: { canonical: `/receptek/${r.slug}/` }, openGraph: {title:r.title, description:r.intro, url:`/receptek/${r.slug}/`, type:"article"} };
}
export default async function Page({params}: {params: Promise<{slug:string}>}) {
  const r = await getRecipe(params);
  return <InfoPage title={r.title} intro={r.intro}>
    <nav aria-label="Morzsamenü" className="text-sm"><Link href="/">Főoldal</Link> / <Link href="/receptek/">Receptek</Link> / {r.title}</nav>
    <p className="rounded-2xl bg-[#fff5e8] p-5 font-bold">{r.servings} adag · Becsült teljes idő: {r.minutes} perc · Receptváltozat: Mit főzzek ma? · Közzétéve: 2026. október 5.</p>
    <p>A leírás házias alapváltozat. A főzési idő az alapanyag méretétől és a készüléktől függ; mindig az elkészültséget ellenőrizd. Az opcionális feltétek és köretek nincsenek beleszámítva az adagokba.</p>
    <section><h2 className="font-serif text-3xl font-black text-[#742115]">Hozzávalók {r.servings} adaghoz</h2><ul className="mt-4 list-disc pl-6">{r.ingredients.map(i => <li key={i}>{i}</li>)}</ul></section>
    <section><h2 className="font-serif text-3xl font-black text-[#742115]">Elkészítés lépésről lépésre</h2><ol className="mt-5 list-decimal space-y-4 pl-6">{r.steps.map(s => <li key={s} className="pl-2">{s}</li>)}</ol></section>
    <Advertisement />
    <section><h2 className="font-serif text-2xl font-black text-[#742115]">Mire figyelj főzés közben?</h2><p className="mt-3">{r.mistake}</p></section>
    <section><h2 className="font-serif text-2xl font-black text-[#742115]">Változatok és helyettesítés</h2><p className="mt-3">{r.variation}</p>{r.slug === "tojasos-sult-rizs" ? <a className="underline" href="https://www.gov.uk/government/publications/home-food-fact-checker/home-food-fact-checker#rice" target="_blank" rel="noopener noreferrer">Food Standards Agency: otthoni élelmiszer-biztonság és rizs</a> : null}</section>
    <section><h2 className="font-serif text-2xl font-black text-[#742115]">Milyen menübe illik?</h2><ul className="mt-3 space-y-2">{r.categories.map(c => <li key={c}><Link className="underline" href={`/${c}/`}>{guides[c as keyof typeof guides].title}</Link></li>)}</ul></section>
    <section><h2 className="font-serif text-2xl font-black text-[#742115]">További fogások</h2><div className="mt-3 flex flex-wrap gap-4">{recipes.filter(x => x.slug !== r.slug && x.categories.some(c => (r.categories as readonly string[]).includes(c))).slice(0,3).map(x => <Link className="underline" key={x.slug} href={`/receptek/${x.slug}/`}>{x.title}</Link>)}</div></section>
    <p className="text-sm">Eltérést találtál a leírásban? A <Link href="/kapcsolat/" className="underline">kapcsolat oldalon</Link> jelezheted az üzemeltetőnek.</p>
  </InfoPage>;
}
