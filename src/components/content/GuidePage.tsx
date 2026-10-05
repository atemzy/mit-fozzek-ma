import GuidePlan from "./GuidePlan";
import RecipeList from "./RecipeList";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import SingleIdeaRandomizer from "@/components/content/SingleIdeaRandomizer";
import RandomIdeaGrid from "@/components/content/RandomIdeaGrid";
import Advertisement from "@/components/advertisement/Default";

type Section = { title: string; paragraphs: readonly string[]; bullets?: readonly string[] };

type GuidePageProps = {
  category: string;
  eyebrow: string;
  title: string;
  intro: string;
  sections: readonly Section[];
  randomizerIdeas: readonly string[];
};

export default function GuidePage({ category, eyebrow, title, intro, sections, randomizerIdeas }: GuidePageProps) {
  return (
    <main className="min-h-screen font-sans">
      <div className="mx-auto my-2 w-[calc(100%-1rem)] max-w-[1480px] overflow-hidden rounded-[1.25rem] border border-[#6f2b1b]/15 bg-[#fffaf0]/85 shadow-[0_20px_70px_rgba(87,35,21,0.12)] sm:my-4 sm:w-[calc(100%-1.5rem)] sm:rounded-[2rem]">
        <SiteHeader />
        <section className="bg-[linear-gradient(135deg,#fff4dc_0%,#fffaf0_55%,#f8e7d4_100%)] px-5 py-10 md:px-10 md:py-14">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#4d6d36]">{eyebrow}</p>
          <h1 className="mt-2 max-w-4xl font-serif text-4xl font-black tracking-tight text-[#742115] md:text-6xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#623f34]">{intro}</p>
        </section>
        <article className="mx-auto max-w-5xl space-y-8 px-5 py-8 md:px-10 md:py-12">
          <GuidePlan category={category} />
          <SingleIdeaRandomizer ideas={randomizerIdeas} />
          <section className="rounded-[2rem] border border-[#6f2b1b]/10 bg-white/75 p-6 md:p-8">
            <h2 className="font-serif text-3xl font-black text-[#742115]">Konkrét ötletek</h2>
            <RandomIdeaGrid ideas={randomizerIdeas} count={12} />
          </section>
          <RecipeList category={category} />
          {sections.map((section) => (
            <section key={section.title} className="rounded-[2rem] border border-[#6f2b1b]/10 bg-white/75 p-6 md:p-8">
              <h2 className="font-serif text-3xl font-black text-[#742115]">{section.title}</h2>
              {section.paragraphs.map((p) => <p key={p} className="mt-4 leading-8 text-[#69483d]">{p}</p>)}
              {section.bullets ? <ul className="mt-5 grid gap-3 md:grid-cols-2">{section.bullets.map((b) => <li key={b} className="rounded-xl bg-[#f8efe2] p-4 leading-relaxed text-[#69483d]">✓ {b}</li>)}</ul> : null}
            </section>
          ))}
          <Advertisement />
          <section className="rounded-[2rem] bg-[#742115] p-7 text-[#fffaf0] md:p-9">
            <h2 className="font-serif text-3xl font-black">Még mindig nincs ötleted?</h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-white/80">A menüsorsoló levesből, főételből és desszertből állít össze egy teljes menüt. Ha valamelyik fogás nem tetszik, külön is újrasorsolhatod.</p>
            <Link href="/" className="mt-5 inline-flex rounded-2xl bg-[#fffaf0] px-5 py-3 font-black text-[#742115]">Menü sorsolása</Link>
          </section>
        </article>
        <SiteFooter />
      </div>
    </main>
  );
}
