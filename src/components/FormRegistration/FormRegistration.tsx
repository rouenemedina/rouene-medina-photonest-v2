import "./FormRegistration.scss";
import React from "react";
import { SelectChangeEvent } from "@mui/material";
import CustomTextField from "../CustomTextField/CustomTextField";
import CustomDropDownField from "../CustomDropDownField/CustomDropDownField";
import Buttons from "../Buttons/Buttons";
import CustomPasswordField from "../CustomPasswordField/CustomPasswordField";

interface SignupFormData {
  user_first_name: string;
  user_last_name: string;
  user_email: string;
  user_password: string;
  user_confirm_password: string;
  user_type: string;
}

interface LoginFormData {
  user_email: string;
  user_password: string;
}

interface FormErrors {
  [key: string]: string;
}

interface RegistrationFormProps {
  fields: string[];
  formType: string;
  formData: SignupFormData | LoginFormData;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSelectChange?: (event: SelectChangeEvent<string>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  errors: FormErrors;
  successMessage: string;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({
  fields,
  formType,
  formData,
  handleChange,
  handleSelectChange,
  handleSubmit,
  errors,
}) => {
  const displayFirstName = fields.includes("firstName");
  const displayLastName = fields.includes("lastName");
  const displayEmail = fields.includes("email");
  const displayPassword = fields.includes("password");
  const displayConfirmPassword = fields.includes("confirmPassword");
  const displayUserType = formType === "signup" && fields.includes("userType");

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <section className="form__container">
          <article className="form__form">
            {displayFirstName && (
              <CustomTextField
                label="First Name"
                name="user_first_name"
                placeholder="First Name"
                changeHandler={handleChange}
                error={errors.user_first_name}
              />
            )}
            {displayLastName && (
              <CustomTextField
                label="Last Name"
                name="user_last_name"
                placeholder="Last Name"
                changeHandler={handleChange}
                error={errors.user_last_name}
              />
            )}
            {displayEmail && (
              <CustomTextField
                label="Email"
                name="user_email"
                placeholder="youremail@domain.ca"
                changeHandler={handleChange}
                error={errors.user_email}
              />
            )}
            {displayPassword && (
              <CustomPasswordField
                label="Password"
                name="user_password"
                placeholder="password"
                type="password"
                changeHandler={handleChange}
                helperText="Please enter a strong password."
                error={errors.user_password}
              />
            )}
            {displayConfirmPassword && (
              <CustomPasswordField
                label="Confirm Password"
                name="user_confirm_password"
                placeholder="password"
                type="retypePassword"
                changeHandler={handleChange}
                helperText="Please confirm your password."
                error={errors.user_confirm_password}
              />
            )}
            {displayUserType && (
              <CustomDropDownField
                label="Role"
                name="user_type"
                currentValue={(formData as SignupFormData).user_type || ""}
                changeHandler={handleSelectChange!}
                values={["Photographer", "Client"]}
                error={errors.user_type}
              />
            )}
          </article>
          <article className="form__btn">
            {formType === "signup" ? (
              <Buttons type="submit">Register</Buttons>
            ) : formType === "login" ? (
              <Buttons type="submit">Log In</Buttons>
            ) : null}
          </article>
        </section>
      </form>
    </>
  );
};

export default RegistrationForm;
