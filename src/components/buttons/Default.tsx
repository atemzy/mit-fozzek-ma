import React from "react";

interface ButtonProps {
  title: string;
  disabled?: boolean;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onClick, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`mx-auto w-full rounded-2xl sm:w-auto bg-(--button) px-6 py-3 text-base font-black uppercase tracking-wide text-(--white) shadow-sm transition md:text-lg ${
        disabled
          ? "cursor-progress opacity-60"
          : "cursor-pointer hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
      }`}
    >
      {title}
    </button>
  );
};

export default Button;
