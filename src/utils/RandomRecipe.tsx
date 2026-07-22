import api from "./api"

export interface Food {
  name:string;
  source:string;
  image_src:string;
}

export enum FoodNumber {
  SOUP,
  MAIN,
  DESSERT
}

const notMain = ["Starter","Miscellaneous","Side","Dessert","Breakfast"]

let wrongFoods: Food[] = []
export async function RandomFood(type:FoodNumber): Promise<Food>{
    console.log("b",wrongFoods)
    let data;
    
    switch(type){
      case FoodNumber.SOUP:
        data = await api.get("")
        while(!data.strMeal.includes("Soup")){
          const wrongFood = wrongFoods.find(food => food.strMeal.includes("Soup"))
          if(wrongFood){
            data = wrongFood
            wrongFoods = wrongFoods.filter(food => food.name !== wrongFood.name)
            break;
          }
          if(!wrongFoods.find(food => food.strMeal === data.strMeal)) wrongFoods.push(data)
          data = await api.get("")
        }
        break;
      case FoodNumber.MAIN:
        data = await api.get("")
        while(notMain.includes(data.strCategory) || data.strMeal.includes("Soup")){
          const wrongFood = wrongFoods.find(food => !notMain.includes(food.strCategory) && !food.strMeal.includes("Soup"))
          if(wrongFood){
            data = wrongFood
            wrongFoods = wrongFoods.filter(food => food.name !== wrongFood.name)
            break;
          }
          if(!wrongFoods.find(food => food.strMeal === data.strMeal)) wrongFoods.push(data)
          data = await api.get("")
        }
        break;
      case FoodNumber.DESSERT:
        data = await api.get("")
        while(data.strCategory != "Dessert"){
          const wrongFood = wrongFoods.find(food => food.strCategory === "Dessert")
          if(wrongFood){
            data = wrongFood
            wrongFoods = wrongFoods.filter(food => food.name !== wrongFood.name)
            break;
          }
          if(!wrongFoods.find(food => food.strMeal === data.strMeal)) wrongFoods.push(data)
          data = await api.get("")
        }
        break;
    }
    const food:Food = {
      name: data.strMeal,
      source:data.strSource,
      image_src:data.strMealThumb
    }
    console.log("a", wrongFoods)
    return food
}