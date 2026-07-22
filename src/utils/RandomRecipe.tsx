import api from "./api"

export interface Food {
  name:string;
  source:string;
  image_src:string;
  loading?:boolean;
}

export enum FoodNumber {
  SOUP,
  MAIN,
  DESSERT
}

const notMain = ["Starter","Miscellaneous","Side","Dessert","Breakfast"]

let wrongFoods: Food[] = []

export async function RandomFood(type:FoodNumber): Promise<Food>{
    let data;
    switch(type){
      case FoodNumber.SOUP:
        data = await getWrongFood((food) => !food.strMeal.includes("Soup"))
        break;
      case FoodNumber.MAIN:
        data = await getWrongFood((food) => notMain.includes(food.strCategory) || food.strMeal.includes("Soup"))
        break;
      case FoodNumber.DESSERT:
        data = await getWrongFood((food) => food.strCategory != "Dessert")
        break;
    }
    const food:Food = {
      name: data.strMeal,
      source:data.strSource,
      image_src:data.strMealThumb,
      loading:false
    }
    return food
}

async function getWrongFood(
  booleanCondition: (food: any) => boolean
): Promise<any> {
  let data = await api.get("")
  while(booleanCondition(data)){
    const wrongFood = wrongFoods.find(food => !booleanCondition(food))
    if(wrongFood){
      data = wrongFood
      wrongFoods = wrongFoods.filter(food => food.name !== wrongFood.name)
      break;
    }
    if(!wrongFoods.find(food => food.strMeal === data.strMeal)) wrongFoods.push(data)
    data = await api.get("")
  }
  return data
}