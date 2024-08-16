import "./RegistrationForm.scss";
import React, { useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import CustomTextField from "../CustomTextField/CustomTextField";
import CustomDropDownField from "../CustomDropDownField/CustomDropDownField";
import Buttons from "../Buttons/Buttons";
import { useNavigate } from "react-router-dom";

interface RegistrationFormProps {
  fields: string[];
  formType: string;
}

interface FormData {
  user_first_name: string;
  user_last_name: string;
  user_email: string;
  user_password: string;
  user_type: string;
}

interface FormErrors {
  [key: string]: string;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({
  fields,
  formType,
}) => {
  const displayFirstName = fields.includes("firstName");
  const displayLastName = fields.includes("lastName");
  const displayEmail = fields.includes("email");
  const displayPassword = fields.includes("password");
  const displayUserType = fields.includes("userType");

  const [formData, setFormData] = useState<FormData>({
    user_first_name: "",
    user_last_name: "",
    user_email: "",
    user_password: "",
    user_type: "",
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [success, setSuccess] = useState<boolean>(false);
  const [redirect, setRedirect] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const dropDownChangeHandler = (
    event: SelectChangeEvent<string>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {

    } catch (err) {
      console.log(err);
    }
  };

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
              />
            )}
            {displayLastName && (
              <CustomTextField
                label="Last Name"
                name=""
                className=""
                placeholder="Last Name"
                changeHandler={handleChange}
              />
            )}
            {displayEmail && (
              <CustomTextField
                label="Email"
                name=""
                className=""
                placeholder="youremail@domain.ca"
                changeHandler={handleChange}
              />
            )}
            {displayPassword && (
              <CustomTextField
                label="Password"
                name=""
                className=""
                placeholder="password"
                changeHandler={handleChange}
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
        </section>
      </form>
    </>
  );
};

export default RegistrationForm;
