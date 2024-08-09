import "./Buttons.scss";
import React, { ReactNode } from 'react';

type ButtonProps = {
    children: ReactNode,
    className?: string,
    onClick: () => void
} 

const Buttons: React.FC<ButtonProps> = ({ className, onClick, children }) => {
    return (
        <>
        <button className={className} onClick={onClick}>
            {children}
        </button>
        </>
    );
};

export default Buttons;