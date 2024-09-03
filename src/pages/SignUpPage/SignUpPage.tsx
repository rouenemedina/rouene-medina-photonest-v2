import "./SignUpPage.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import RegistrationForm from "../../components/FormRegistration/FormRegistration";


interface SignupFormData {
  user_first_name: string;
  user_last_name: string;
  user_email: string;
  user_password: string;
  user_confirm_password?: string;
  user_type: string;
}

interface FormErrors {
  [key: string]: string;
}

interface ErrorResponse {
  message: string;
  statusCode: number;
}

const SignUpPage: React.FC = () => {
  const [formData, setFormData] = useState<SignupFormData>({
    user_first_name: "",
    user_last_name: "",
    user_email: "",
    user_password: "",
    user_confirm_password: "",
    user_type: "",
  });
  // const [role, setRole] = useState<string>("");
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [error, setError] = useState<AxiosError<ErrorResponse> | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [redirect, setRedirect] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (redirect) {
      navigate("/login");
    }
  }, [redirect, navigate]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    // setRole(event.target.value);
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateFormData = (data: SignupFormData) => {
    const errors: FormErrors = {};
    if (!data.user_first_name) {
      errors.user_first_name = "Please enter your first name.";
    }
    if (!data.user_last_name) {
      errors.user_last_name = "Please enter your last name.";
    }
    if (!data.user_email) {
      errors.user_email = "Please enter your email address.";
    }
    if (!data.user_password) {
      errors.user_password = "Please enter a password.";
    }
    if (!data.user_confirm_password) {
      errors.user_confirm_password = "Please enter your password.";
    }
    if (data.user_type === "Please select an option...") {
      errors.user_type = "Please select your role.";
    }
    return errors;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(formData);
    const errorOutput: Partial<SignupFormData> = validateFormData(formData);
    setFormErrors(errorOutput);

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
      user_confirm_password: "",
      user_type: "",
    });
    setFormErrors({});
    setRedirect(true);
  };

  return (
    <>
      <main className="registration">
        <section className="registration__logo"></section>
        <section className="registration__container">
          <article className="registration__subcontainer">
            <div className="registration__card">
              <h1 className="registration__title">CREATE NEW ACCOUNT</h1>
              <div className="registration__subcard">
                <h3 className="registration__subtitle">Already a member? </h3>
                <Link to="/login" className="registration__link">
                  <h3 className="registration__subtitle">Log In</h3>
                </Link>
              </div>
            </div>
          </article>
          <article className="registration__form">
            <RegistrationForm
              fields={[
                "firstName",
                "lastName",
                "email",
                "password",
                "confirmPassword",
                "userType",
              ]}
              formType="signup"
              formData={formData}
              handleChange={handleChange}
              handleSelectChange={handleSelectChange}
              handleSubmit={handleSubmit}
              errors={formErrors}
              successMessage={"Registration successful"}
            />
          </article>
          {success && (
            <div className="registration__message">Registration successful.</div>
          )}
          {error && (
            <div className="registration__message">
              {error.response?.data.message}
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default SignUpPage;
