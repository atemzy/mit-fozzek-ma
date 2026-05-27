import React from 'react';

interface Button {
    title:string;
    onClick: ()=>void;
}

const Button: React.FC<Button> = ({title,onClick}) => {
    return (
    <button onClick={onClick} className='uppercase cursor-pointer text-2xl mx-auto bg-(--button) text-(--white) py-3 px-6 rounded-xl'>
        <strong>{title}</strong>
    </button>
    );
};
export default Button;