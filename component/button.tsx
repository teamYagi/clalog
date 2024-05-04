// components/Button.tsx
"use client";

import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={() => {
        onClick && onClick();
      }}
      className="px-3 py-2 bg-blue-400 rounded-lg text-white"
    >
      {text}
    </button>
  );
};

export default Button;
