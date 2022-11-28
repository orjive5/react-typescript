import React from "react";

type ButtonProps = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

export const Button = (props: ButtonProps) => {
  return <button onClick={(e) => props.handleClick(e, 1)}>Click</button>;
};
