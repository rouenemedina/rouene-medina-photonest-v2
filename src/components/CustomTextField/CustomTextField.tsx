import "./CustomTextField.scss";
import React from "react";
import { TextField, FormHelperText, FormControl } from "@mui/material";

type CustomTextFieldProps = {
  label: string;
  name: string;
  className?: string;
  placeholder: string;
  changeHandler: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error?: string;
  helperText?: string;
  multiline?: boolean;
  rows?: number;
};

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  label,
  name,
  className,
  placeholder,
  changeHandler,
  error,
  helperText = "",
  multiline = false,
  rows = 4,
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
          helperText={helperText || error}
          multiline={multiline}
          rows={multiline ? rows : undefined}
        />
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
        {error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    </>
  );
};

export default CustomTextField;
