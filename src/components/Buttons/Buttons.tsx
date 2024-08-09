import "./Buttons.scss";
import React, { ReactNode } from "react";

type ButtonProps = {
  type: "submit" | "reset" | "button";
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

const Buttons: React.FC<ButtonProps> = ({
  type,
  className,
  onClick,
  children,
}) => {
  return (
    <>
      <button type={type} className={className} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Buttons;
