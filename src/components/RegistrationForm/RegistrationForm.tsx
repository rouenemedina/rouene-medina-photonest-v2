import "./RegistrationForm.scss";
import React from "react";
import CustomTextField from "../CustomTextField/CustomTextField";
import CustomDropDownField from "../CustomDropDownField/CustomDropDownField";
import Buttons from "../Buttons/Buttons";

const RegistrationForm: React.FC = () => {
  const inputChangeHandler = () => {};

  const dropDownChangeHandler = () => {};

  return (
    <>
      <form className="form">
        <section className="form__container">
          <article className="form__form">
            <CustomTextField
              label="First Name"
              name=""
              className=""
              placeholder="First Name"
              changeHandler={inputChangeHandler}
            />
            <CustomTextField
              label="Last Name"
              name=""
              className=""
              placeholder="Last Name"
              changeHandler={inputChangeHandler}
            />
            <CustomTextField
              label="Email"
              name=""
              className=""
              placeholder="youremail@domain.ca"
              changeHandler={inputChangeHandler}
            />
            <CustomTextField
              label="Password"
              name=""
              className=""
              placeholder="password"
              changeHandler={inputChangeHandler}
            />
            <CustomDropDownField
              label="Role"
              name=""
              currentValue="Please select an option..."
              changeHandler={dropDownChangeHandler}
              values={["Please select an option...", "Photographer", "Client"]}
            />
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
