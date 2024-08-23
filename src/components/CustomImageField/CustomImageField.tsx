import { FormControl, FormHelperText } from "@mui/material";
import "./CustomImageField.scss";
import React from "react";

interface CustomImageFieldProps {
  label: string;
  name: string;
  className?: string;
  onChange: (file: File | null) => void;
  error?: string;
  helperText?: string;
}

const CustomImageField: React.FC<CustomImageFieldProps> = ({
  label,
  name,
  className,
  onChange,
  error,
  helperText = "",
}) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    onChange(file);
  };

  return (
    <>
      <FormControl error={!!error}>
        <input
          name={name}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
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
