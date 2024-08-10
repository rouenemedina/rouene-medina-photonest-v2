import "./RegistrationForm.scss";
import React from "react";
import CustomTextField from "../CustomTextField/CustomTextField";
import CustomDropDownField from "../CustomDropDownField/CustomDropDownField";
import Buttons from "../Buttons/Buttons";

interface RegistrationFormProps {
  fields: string[];
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ fields }) => {
  const displayFirstName = fields.includes("firstName");
  const displayLastName = fields.includes("lastName");
  const displayEmail = fields.includes("email");
  const displayPassword = fields.includes("password");
  const displayUserType = fields.includes("userType");

  const inputChangeHandler = () => {};

  const dropDownChangeHandler = () => {};

  return (
    <>
      <form className="form">
        <section className="form__container">
          <article className="form__form">
            {displayFirstName && (
              <CustomTextField
                label="First Name"
                name=""
                className=""
                placeholder="First Name"
                changeHandler={inputChangeHandler}
              />
            )}
            {displayLastName && (
              <CustomTextField
                label="Last Name"
                name=""
                className=""
                placeholder="Last Name"
                changeHandler={inputChangeHandler}
              />
            )}
            {displayEmail && (
              <CustomTextField
                label="Email"
                name=""
                className=""
                placeholder="youremail@domain.ca"
                changeHandler={inputChangeHandler}
              />
            )}
            {displayPassword && (
              <CustomTextField
                label="Password"
                name=""
                className=""
                placeholder="password"
                changeHandler={inputChangeHandler}
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
            <Buttons type="submit">Register</Buttons>
          </article>
        </section>
      </form>
    </>
  );
};

export default RegistrationForm;
