"use client";

import Advertisement from "@/components/advertisement/Default";
import Button from "@/components/buttons/Default";
import Card from "@/components/cards/Default";
import { Food, FoodNumber, RandomFood } from "@/utils/RandomRecipe";
import { useState } from "react";

export default function Home() {
  const [soup, setSoup] = useState<Food>();
  const [main, setMain] = useState<Food>();
  const [dessert, setDessert] = useState<Food>();

  const hasResult = soup && main && dessert;

  const handleRandom = (food?: FoodNumber) => {
    switch (food) {
      case FoodNumber.SOUP:
        setSoup(RandomFood(FoodNumber.SOUP));
        break;
      case FoodNumber.MAIN:
        setMain(RandomFood(FoodNumber.MAIN));
        break;
      case FoodNumber.DESSERT:
        setDessert(RandomFood(FoodNumber.DESSERT));
        break;
      default:
        setSoup(RandomFood(FoodNumber.SOUP));
        setMain(RandomFood(FoodNumber.MAIN));
        setDessert(RandomFood(FoodNumber.DESSERT));
        break;
    }
  };

  return (
    <main className="min-h-screen px-4 py-6 md:px-10 lg:px-24 font-sans">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        <Advertisement className="min-h-[90px]" label="Felső reklám" />

        <section className="text-center">
          <h1 className="mb-6 text-4xl md:text-6xl">Mit főzzek ma?</h1>

          {!hasResult && (
            <div className="mx-auto flex max-w-3xl flex-col gap-8">
              <p className="text-2xl leading-relaxed md:text-3xl">
                Neked is fejtörést okoz, hogy kitaláld mit kéne főzni?
                <br />
                Segítünk kitalálni.
                <br />
                Kattints a gombra, hogy kisorsold mit főzz ma!
              </p>

              <Button
                onClick={() => handleRandom()}
                title="kérem a sorsolást"
              />
            </div>
          )}
        </section>

        {hasResult && (
          <>
            <section className="grid gap-6 md:grid-cols-3">
              <Card
                onClick={() => handleRandom(FoodNumber.SOUP)}
                title="Leves"
                food={soup}
              />

              <Card
                onClick={() => handleRandom(FoodNumber.MAIN)}
                title="Főétel"
                food={main}
              />

              <Card
                onClick={() => handleRandom(FoodNumber.DESSERT)}
                title="Desszert"
                food={dessert}
              />
            </section>

            <Advertisement
              className="min-h-[120px]"
              label="Reklám a receptek alatt"
            />
          </>
        )}

        <section className="grid gap-4 md:grid-cols-2">
          <Advertisement label="Alsó reklám 1" />
          <Advertisement label="Alsó reklám 2" />
        </section>
      </div>
    </main>
  );
}
