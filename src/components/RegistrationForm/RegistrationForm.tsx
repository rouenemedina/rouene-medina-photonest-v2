import "./RegistrationForm.scss";
import React from "react";
import CustomTextField from "../CustomTextField/CustomTextField";

const RegistrationForm: React.FC = () => {
  const handleInputChange = () => {};

  return (
    <>
      <form className="form">
        <section>
          <article>
            <CustomTextField
              label="First Name"
              name=""
              placeholder="First Name"
              changeHandler={handleInputChange}
            />
            <CustomTextField
              label="Last Name"
              name=""
              placeholder="Last Name"
              changeHandler={handleInputChange}
            />
             <CustomTextField
              label="Email"
              name=""
              placeholder="youremail@domain.ca"
              changeHandler={handleInputChange}
            />
             <CustomTextField
              label="Password"
              name=""
              placeholder="password"
              changeHandler={handleInputChange}
            />
          </article>
          <article></article>
        </section>
      </form>
    </>
  );
};

export default RegistrationForm;
