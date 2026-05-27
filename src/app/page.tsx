"use client"
import Advertisement from "@/components/advertisement/Default";
import Button from "@/components/buttons/Default";
import Card from "@/components/cards/Default";
import { Food, FoodNumber, RandomFood } from "@/utils/RandomRecipe";
import { useState } from "react";

export default function Home() {
  const [soup, setSoup] = useState<Food>()
  const [main, setMain] = useState<Food>()
  const [dessert, setDessert] = useState<Food>()

  const handleRandom = (food?:FoodNumber) => {
    switch(food){
      case FoodNumber.SOUP:
        setSoup(RandomFood(FoodNumber.SOUP))
        break;
      case FoodNumber.MAIN:
        setMain(RandomFood(FoodNumber.MAIN))
        break;
      case FoodNumber.DESSERT:
        setDessert(RandomFood(FoodNumber.DESSERT))
        break;
      default:
        setSoup(RandomFood(FoodNumber.SOUP))
        setMain(RandomFood(FoodNumber.MAIN))
        setDessert(RandomFood(FoodNumber.DESSERT))
        break;
    }
  }

  return (
    <main className="py-8 px-4 md:px-40 sm:items-start font-sans min-h-screen flex flex-col justify-between">
      <Advertisement />
      <h1 className="text-4xl w-full md:text-6xl text-center mt-12 mb-8">Mit főzzek ma?</h1>
      
      {soup && main && dessert ? 
      <div className="flex w-full justify-between px-32">
        <Card onClick={()=>handleRandom(FoodNumber.SOUP)} title="Leves" food={soup} />
        <Card onClick={()=>handleRandom(FoodNumber.MAIN)} title="Főétel" food={main} />
        <Card onClick={()=>handleRandom(FoodNumber.DESSERT)} title="Desszert" food={dessert} />
      </div>
      :
      <div className="flex flex-col gap-8 l md:gap-24 mx-auto text-center">
        <p className="text-3xl leading-19.5">Neked is fejtörést okoz, hogy kitaláld mit kéne főzni? <br />
        Segítünk kitalálni.<br />
        Kattints a gombra, hogy kisorsold mit főzz ma!
        </p>
        <Button onClick={()=>handleRandom()} title="kérem a sorsolást" />
      </div>}
      
      <div className="flex w-full mt-8 max-md:flex-col gap-2 md:gap-20">
        <Advertisement />
        <Advertisement />
      </div>
    </main>
  );
}
