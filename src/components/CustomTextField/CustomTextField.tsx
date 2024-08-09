import "./CustomTextField.scss";
import React from 'react';
import { TextField } from "@mui/material";

type CustomTextFieldProps = {
    label: string,
    name: string,
    placeholder: string,
    changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const CustomTextField = (props: CustomTextFieldProps) => {
    return (
        <>
            <TextField 
            label={props.label}
            name={props.name}
            placeholder={props.placeholder}
            onChange={props.changeHandler}
            />
        </>
    );
};

export default CustomTextField;