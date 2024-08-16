import "./CustomPassworField.scss";
import React, { useState } from "react";
import {
  FormControl,
  FormHelperText,
  IconButton,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

type CustomPasswordFieldProps = {
  label: string;
  name: string;
  className?: string;
  placeholder: string;
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  helperText?: string;
  type?: "password" | "retypePassword";
};

const CustomPasswordField: React.FC<CustomPasswordFieldProps> = ({
  label,
  name,
  className,
  placeholder,
  changeHandler,
  error,
  helperText = "",
  type = "password",
}) => {
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [retypePassword, setRetypePassword] = useState<string>("");
  const [passwordMatchError, setPasswordMatchError] = useState<string | null>(
    null
  );

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    changeHandler(event);

    if (type === "password") {
      setPassword(value);
    } else if (type === "retypePassword") {
      setRetypePassword(value);

      if (value !== password) {
        setPasswordMatchError("Passwords do not match.");
      } else {
        setPasswordMatchError(null);
      }
    }
  };

  return (
    <>
      <FormControl error={!!error || !!passwordMatchError}>
        <TextField
          label={label}
          name={name}
          className={className}
          placeholder={placeholder}
          onChange={handlePasswordChange}
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <IconButton onClick={handleClickShowPassword} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            ),
          }}
        />
        {(helperText || passwordMatchError || error) && (
          <FormHelperText>
            {helperText || passwordMatchError || error}
          </FormHelperText>
        )}
      </FormControl>
    </>
  );
};

export default CustomPasswordField;
