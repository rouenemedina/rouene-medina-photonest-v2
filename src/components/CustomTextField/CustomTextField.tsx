import "./CustomTextField.scss";
import React from "react";
import {
  TextField,
  FormHelperText,
  FormControl,
} from "@mui/material";

type CustomTextFieldProps = {
  label: string;
  name: string;
  className?: string;
  placeholder: string;
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  helperText?: string;
};

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  label,
  name,
  className,
  placeholder,
  changeHandler,
  error,
  helperText = "",
}) => {
  return (
    <>
      <FormControl error={!!error}>
        <TextField
          label={label}
          name={name}
          className={className}
          placeholder={placeholder}
          onChange={changeHandler}
        />
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
        {error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    </>
  );
};

export default CustomTextField;
