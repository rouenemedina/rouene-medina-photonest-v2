import "./CustomDropDownField.scss";
import React from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
  FormHelperText,
} from "@mui/material";

type CustomDropDownProps = {
  label: string;
  name: string;
  className?: string;
  changeHandler: (event: SelectChangeEvent<string>) => void;
  values: string[];
  currentValue: string;
  helperText?: string;
  error?: string;
};

const CustomDropDownField: React.FC<CustomDropDownProps> = ({
  label,
  name,
  className,
  changeHandler,
  values,
  currentValue,
  helperText,
  error,
}) => {
  return (
    <>
      <FormControl error={!!error} className={className}>
        <InputLabel>{label}</InputLabel>
        <Select
          label={label}
          name={name}
          className={className}
          value={currentValue}
          onChange={changeHandler}
        >
          <MenuItem value="" disabled>
            <em>Please select an option...</em>
          </MenuItem>
          {values.map((value, index) => (
            <MenuItem key={index} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
        {error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    </>
  );
};

export default CustomDropDownField;
