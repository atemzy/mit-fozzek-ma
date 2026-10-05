"use client";

import { findRecipe } from "@/data/recipes";
import { useMemo, useState } from "react";

type Props = {
  ideas: readonly string[];
  eyebrow?: string;
  title?: string;
};

export default function SingleIdeaRandomizer({
  ideas,
  eyebrow = "Egyablakos sorsoló",
  title = "Sorsolj egy ételötletet",
}: Props) {
  const initial = useMemo(() => ideas[0] ?? "", [ideas]);
  const [idea, setIdea] = useState(initial);
  const localRecipe = findRecipe(idea);
  const recipeUrl = localRecipe ? `/receptek/${localRecipe.slug}/` : `https://www.google.com/search?q=${encodeURIComponent(`${idea} recept`)}`;

  const randomize = () => {
    if (!ideas.length) return;
    if (ideas.length === 1) {
      setIdea(ideas[0]);
      return;
    }

    const options = Array.from(new Set(ideas)).filter(item => item !== idea);
    if (options.length) setIdea(options[Math.floor(Math.random() * options.length)]);
  };

  return (
    <section className="overflow-hidden rounded-[2rem] border border-[#6f2b1b]/10 bg-[linear-gradient(135deg,#fff4dc_0%,#fffaf0_55%,#f8e7d4_100%)] p-6 text-center shadow-sm md:p-8">
      <p className="text-xs font-black uppercase tracking-[0.25em] text-[#4d6d36]">{eyebrow}</p>
      <h2 className="mt-2 font-serif text-3xl font-black text-[#742115]">{title}</h2>
      <div className="mx-auto mt-6 flex min-h-[150px] max-w-2xl items-center justify-center rounded-[1.6rem] border border-[#7b3e2f]/10 bg-white/80 px-6 py-8 shadow-sm">
        <p className="font-serif text-2xl font-black leading-snug text-[#742115] md:text-3xl">{idea}</p>
      </div>
      <a
        href={recipeUrl}
        target={localRecipe ? undefined : "_blank"}
        rel="noreferrer"
        className="mt-4 inline-flex items-center justify-center font-semibold text-[#742115] underline decoration-[#742115]/30 underline-offset-4 transition hover:decoration-[#742115]"
      >
        {localRecipe ? "Recept elolvasása →" : "Külső receptkeresés ↗"}
      </a>
      <br />
      <button
        type="button"
        onClick={randomize}
        className="mt-5 inline-flex items-center justify-center rounded-2xl bg-[#742115] px-6 py-3 font-black text-[#fffaf0] transition hover:-translate-y-0.5 hover:bg-[#5f1c13]"
      >
        Sorsolj másikat
      </button>
      <p className="mt-3 text-sm leading-relaxed text-[#76564c]">Egy kattintással új ötletet kapsz az ezen az oldalon összegyűjtött fogások közül.</p>
    </section>
  );
}
