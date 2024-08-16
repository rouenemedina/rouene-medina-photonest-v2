import "./CustomDropDownField.scss";
import React from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";

type CustomDropDownProps = {
  label: string;
  name: string;
  className?: string;
  changeHandler: (event: SelectChangeEvent<string>) => void;
  values: string[];
  currentValue: string;
};

const CustomDropDownField: React.FC<CustomDropDownProps> = ({
  label,
  name,
  className,
  changeHandler,
  values,
  currentValue,
}) => {
  return (
    <>
      <FormControl className={className}>
        {currentValue && <InputLabel>{label}</InputLabel>}
        <Select
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
      </FormControl>
    </>
  );
};

export default CustomDropDownField;
