import "./CustomTextField.scss";
import React from 'react';
import { TextField } from "@mui/material";

type CustomTextFieldProps = {
    label: string,
    name: string,
    className?: string,
    placeholder: string,
    changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({ label, name, className, placeholder, changeHandler }) => {

    return (
        <>
            <TextField 
            label={label}
            name={name}
            className={className}
            placeholder={placeholder}
            onChange={changeHandler}
            />
        </>
    );
};

export default CustomTextField;