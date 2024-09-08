import { FormControl, FormHelperText } from "@mui/material";
import "./CustomImageField.scss";
import React from "react";

interface CustomImageFieldProps {
  label: string;
  name: string;
  className?: string;
  onChange: (files: File[] | File | null) => void;
  error?: string;
  helperText?: string;
  multiple?: boolean;
}

const CustomImageField: React.FC<CustomImageFieldProps> = ({
  label,
  name,
  className,
  onChange,
  error,
  helperText = "",
  multiple = false,
}) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      if (multiple) {
        const filesArray = Array.from(event.target.files);
        onChange(filesArray);
      } else {
        const file = event.target.files[0] || null;
        onChange(file ? file : null);
      }
    } else {
      onChange(null);
    }
  };

  return (
    <>
      <FormControl error={!!error}>
        <input
          name={name}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          multiple={multiple}
        />
        <label htmlFor={name} className={className}>
          {label}
        </label>
        {(helperText || error) && (
          <FormHelperText>{error || helperText}</FormHelperText>
        )}
      </FormControl>
    </>
  );
};

export default CustomImageField;
