import "./CustomTextField.scss";
import React from "react";
import { TextField } from "@mui/material";

type CustomTextFieldProps = {
  label: string;
  name: string;
  className?: string;
  placeholder: string;
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  label,
  name,
  className,
  placeholder,
  changeHandler,
  error,
}) => {
  return (
    <>
      <TextField
        label={label}
        name={name}
        className={className}
        placeholder={placeholder}
        onChange={changeHandler}
      />
      {error && <p></p>}
    </>
  );
};

export default CustomTextField;
