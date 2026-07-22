import React from 'react';

interface Button {
    title:string;
    disabled?:boolean;
    onClick: ()=>void;
}

const Button: React.FC<Button> = ({title,onClick,disabled}) => {
    return (
    <button disabled={disabled} onClick={onClick} className={`${!disabled ? 'cursor-pointer' : 'cursor-progress'} uppercase text-2xl mx-auto bg-(--button) text-(--white) py-3 px-6 rounded-xl`}>
        <strong>{title}</strong>
    </button>
    );
};
export default Button;