"use client";

import { useState } from "react";

type RandomIdeaGridProps = {
  ideas: readonly string[];
  count?: number;
};

function pickUniqueRandom(items: readonly string[], count: number) {
  const unique = Array.from(new Set(items));

  for (let i = unique.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [unique[i], unique[j]] = [unique[j], unique[i]];
  }

  return unique.slice(0, Math.min(count, unique.length));
}

export default function RandomIdeaGrid({ ideas, count = 12 }: RandomIdeaGridProps) {
  const [visibleIdeas, setVisibleIdeas] = useState<string[]>(() => Array.from(new Set(ideas)).slice(0, count));



  if (!visibleIdeas.length) {
    return <div className="mt-5 min-h-[13rem]" aria-hidden="true" />;
  }

  return (
    <div>
      <button type="button" onClick={() => setVisibleIdeas(pickUniqueRandom(ideas, count))} className="mt-4 rounded-xl bg-[#742115] px-4 py-2 font-bold text-white">Másik 12 ötlet</button>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {visibleIdeas.map((idea) => (
        <div key={idea} className="rounded-2xl bg-[#fff5e8] p-4 font-bold text-[#69483d]">
          {idea}
        </div>
      ))}
      </div>
    </div>
  );
}
