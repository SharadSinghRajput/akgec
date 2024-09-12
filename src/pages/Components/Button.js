"use client";

import React from "react";

const Button = ({ text, onClick,className,type }) => {
  return (
    <>
      <button onClick={onClick} className={className} type={type}>
        {text}
      </button>
    </>
  );
};

export default Button;