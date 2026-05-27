import axios from "axios";

const example = "https://api-cdn.figma.com/resize?downloadUrl=https%3A%2F%2Fs3-alpha-sig.figma.com%2Fimg%2F8f0f%2Fd201%2F215fb2ff37c803c5558035027a695bf8%3FExpires%3D1780876800%26Key-Pair-Id%3DAPKAQ4GOSFWCW27IBOMQ%26Signature%3Drimn3xbhGDMajaAq00ObSBxi-jIYSuRC8Fn3a8M9vdg4YilHCQT-x1yLJM8eIMqxv-Rti7O2np7urOAgMmUukgww4yKoMVhK3FLqv%7Ei1Zc4IqPZ-6643K4xTmK3%7EyTMs3-TFtQ9PtrrniF4JEtmNBAISBw6o6H-ZaEyfsB%7EWey2t3RCPbMXuzXMTJic4yYXz5ZC5pRqky7kOMfW%7ELFcUcwvtIAMEEueyZ3mf3Rlj1R15U6TsY9WimQmhettJJHA-FRa2tCGKoK2FEGNDwo3lUEoEfjWAYBW9lJUL7w-qjK%7EAIrrJi3-LfS6fkD8Pqp75WvsvdigKK03H%7E-v7wbVPng__&expiration=1780876800&signature=880fb4905dc49ac98f5bdd8032806fe4252f4bc3d0c8d990e0438d479a70139b&maxsize=2048"

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

export function RandomFood(type:FoodNumber): Food{
    
    return {name:"MINTA",source:"https://minta.hu",image_src:example}
}