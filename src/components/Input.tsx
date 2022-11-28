import React from "react";

type InputProps = {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ value, handleChange }: InputProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };
  return <input type="text" value={value} onChange={handleChange} />;
};
