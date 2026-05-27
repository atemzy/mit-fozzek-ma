import { Food } from '@/utils/RandomRecipe';
import React from 'react';
import Image from "next/image";
import Button from '../buttons/Default';

interface Card {
    title:string;
    food:Food;
    onClick:()=>void;
}

const Card: React.FC<Card> = ({title,food,onClick}) => {
    return (
    <div className='flex flex-col gap-4 text-center'>
        <h3 className='text-4xl'>{title}</h3>
        <div className='relative h-42'>
            <Image alt={food.name} src={food.image_src} fill className='object-cover'/>
        </div>
        <div className='mb-2'>
            <h2 className='text-3xl'>{food.name}</h2>
            <a href={food.source} className='text-xl'><i>Receptet keresek</i></a>
        </div>
        <Button onClick={onClick} title='újra sorsolom' />
    </div>
    );
};
export default Card;