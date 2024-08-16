import "./RegistrationForm.scss";
import React, { useEffect, useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import CustomTextField from "../CustomTextField/CustomTextField";
import CustomDropDownField from "../CustomDropDownField/CustomDropDownField";
import Buttons from "../Buttons/Buttons";
import { useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";

interface RegistrationFormProps {
  fields: string[];
  formType: string;
  successMessage: string;
}

interface UserFormData {
  user_first_name: string;
  user_last_name: string;
  user_email: string;
  user_password: string;
  user_type: string;
}

interface FormErrors {
  [key: string]: string;
}

interface ErrorResponse {
  message: string;
  statusCode: number;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({
  fields,
  formType,
  successMessage,
}) => {
  const displayFirstName = fields.includes("firstName");
  const displayLastName = fields.includes("lastName");
  const displayEmail = fields.includes("email");
  const displayPassword = fields.includes("password");
  const displayUserType = fields.includes("userType");

  const [formData, setFormData] = useState<UserFormData>({
    user_first_name: "",
    user_last_name: "",
    user_email: "",
    user_password: "",
    user_type: "Please select an option...",
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [error, setError] = useState<AxiosError<ErrorResponse> | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [redirect, setRedirect] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const dropDownChangeHandler = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateFormData = (data: UserFormData) => {
    const errors: Partial<UserFormData> = {};
    if (!data.user_first_name)
      errors.user_first_name = "Please enter your first name.";
    if (!data.user_last_name)
      errors.user_last_name = "Please enter your last name.";
    if (!data.user_email)
      errors.user_email = "Please enter your email address.";
    if (!data.user_password) errors.user_password = "Please enter a password.";
    if (!data.user_type) errors.user_type = "Please select your role.";
    return errors;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const errorOutput: Partial<UserFormData> = validateFormData(formData);
    if (Object.keys(errorOutput).length === 0) {
      try {
        const updatedFormData = {
          user_first_name: formData.user_first_name,
          user_last_name: formData.user_last_name,
          user_email: formData.user_email,
          user_password: formData.user_password,
          user_type: formData.user_type,
        };
        const API_URL = import.meta.env.VITE_APP_API_URL;
        await axios.post(`${API_URL}/auth/register`, updatedFormData);
        setSuccess(true);
        setError(null);
        handleReset();
      } catch (err) {
        const axiosError = err as AxiosError<ErrorResponse>;
        if (axiosError) {
          setError(axiosError);
        }
        setSuccess(false);
      }
    }
  };

  const handleReset = () => {
    setFormData({
      user_first_name: "",
      user_last_name: "",
      user_email: "",
      user_password: "",
      user_type: "Please select an option...",
    });
    setFormErrors({});
    setRedirect(true);
  };

  useEffect(() => {
    if (redirect) {
      navigate("/login");
    }
  }, [redirect, navigate]);

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <section className="form__container">
          <article className="form__form">
            {displayFirstName && (
              <CustomTextField
                label="First Name"
                name=""
                className=""
                placeholder="First Name"
                changeHandler={handleChange}
                error={formErrors.user_first_name}
              />
            )}
            {displayLastName && (
              <CustomTextField
                label="Last Name"
                name=""
                className=""
                placeholder="Last Name"
                changeHandler={handleChange}
                error={formErrors.user_last_name}
              />
            )}
            {displayEmail && (
              <CustomTextField
                label="Email"
                name=""
                className=""
                placeholder="youremail@domain.ca"
                changeHandler={handleChange}
                error={formErrors.user_email}
              />
            )}
            {displayPassword && (
              <CustomTextField
                label="Password"
                name=""
                className=""
                placeholder="password"
                changeHandler={handleChange}
                error={formErrors.user_password}
              />
            )}
            {displayUserType && (
              <CustomDropDownField
                label="Role"
                name=""
                className=""
                currentValue="Please select an option..."
                changeHandler={dropDownChangeHandler}
                values={[
                  "Please select an option...",
                  "Photographer",
                  "Client",
                ]}
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
          {success && (
            <div className="registration__message">{successMessage}</div>
          )}
          {error && (
            <div className="registration__message">
              {error.response?.data.message}
            </div>
          )}
        </section>
      </form>
    </>
  );
};

export default RegistrationForm;
