import { findRecipe } from "@/data/recipes";
import { Food } from "@/utils/RandomRecipe";
import Image from "next/image";
import React from "react";
import Button from "../buttons/Default";

interface CardProps {
  title: string;
  food: Food;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ title, food, onClick }) => {
  const localRecipe = findRecipe(food.name);
  return (
    <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-[1.5rem] border border-foreground/10 bg-white/70 shadow-sm sm:rounded-[2rem]">
      <div className="relative h-40 shrink-0 overflow-hidden bg-white/40 sm:h-44 lg:h-48">
        <Image
          alt={food.name}
          src={food.image_src}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 33vw, 30vw"
          className={
            food.loading
              ? "object-cover"
              : "object-cover transition-transform duration-300 hover:scale-[1.03]"
          }
        />
        <div className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1.5 text-xs font-black uppercase tracking-wider backdrop-blur sm:left-4 sm:top-4 sm:px-4 sm:py-2 sm:text-sm">
          {title}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4 text-center sm:p-5 lg:p-6">
        <div className="flex min-h-[5.75rem] items-center justify-center sm:min-h-[6.5rem] lg:min-h-[7.25rem]">
          <h2 className="w-full [overflow-wrap:anywhere] text-xl font-black leading-tight sm:text-2xl lg:text-3xl">
            {food.name}
          </h2>
        </div>

        <div className="flex min-h-12 items-start justify-center">
          {food.source !== "#" && (
            <a
              href={localRecipe ? `/receptek/${localRecipe.slug}/` : food.source}
              target={localRecipe ? undefined : "_blank"}
              rel="noreferrer"
              className="inline-flex min-h-10 items-center justify-center px-2 text-sm font-semibold underline decoration-foreground/30 underline-offset-4 transition hover:decoration-foreground sm:text-base"
            >
              {localRecipe ? "Recept elolvasása →" : "Külső receptkeresés ↗"}
            </a>
          )}
        </div>

        <div className="mt-auto pt-4">
          <Button disabled={food.loading} onClick={onClick} title="Másikat kérek" />
        </div>
      </div>
    </article>
  );
};

export default Card;
