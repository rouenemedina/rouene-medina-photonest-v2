import "./CustomDropDownField.scss";
import React from "react";
import {
  Select,
  MenuItem,
  FormControl,
  // InputLabel,
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
  // label,
  name,
  className,
  changeHandler,
  values,
  currentValue,
}) => {
  return (
    <>
      <FormControl className={className}>
        {/* <InputLabel htmlFor={name}>{label}</InputLabel> */}
        <Select
          name={name}
          className={className}
          value={currentValue}
          onChange={changeHandler}
        >
          {values.map((value, index) => (
            <MenuItem
              key={index}
              value={value}
              disabled={
                index === 0 
              }
            >
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default CustomDropDownField;
