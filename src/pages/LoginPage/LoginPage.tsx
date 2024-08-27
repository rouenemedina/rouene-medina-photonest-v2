import "./LoginPage.scss";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import RegistrationForm from "../../components/FormRegistration/FormRegistration";

interface LoginFormData {
  user_email: string;
  user_password: string;
}

interface FormErrors {
  [key: string]: string;
}

interface ErrorResponse {
  message: string;
  statusCode: number;
}

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    user_email: "",
    user_password: "",
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [error, setError] = useState<AxiosError<ErrorResponse> | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [redirect, setRedirect] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (redirect) {
      navigate("/register");
    }
  }, [redirect, navigate]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateFormData = (data: LoginFormData): FormErrors => {
    const errors: FormErrors = {};
    if (!data.user_email) {
      errors.user_email = "Email address is required.";
    }
    if (!data.user_password) {
      errors.user_password = "Password is required.";
    }
    return errors;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const errorOutput: Partial<LoginFormData> = validateFormData(formData);
    setFormErrors(errorOutput);

    if (Object.keys(errorOutput).length === 0) {
      try {
        const API_URL = import.meta.env.VITE_APP_API_URL;
        const response = await axios.post(`${API_URL}/auth/login`, {
          user_email: formData.user_email,
          user_password: formData.user_password,
        });
        sessionStorage.setItem("token", response.data.token);
        sessionStorage.setItem("photonest_user_id", response.data.user_id);
        sessionStorage.setItem("photonest_user_type", response.data.user_type);
        setSuccess(true);
        setError(null);
        navigate("/dashboard");
      } catch (err) {
        const axiosError = err as AxiosError<ErrorResponse>;
        if (axiosError) {
          setError(axiosError);
        }
        setSuccess(false);
        setRedirect(true);
      }
    }
  };

  return (
    <>
      <main className="login">
        <section className="login__container">
          <article className="login__card">
            <h1 className="login__title">Welcome!</h1>
            <div className="login__subcard">
              <h3 className="login__subtitle">Not a member yet? </h3>
              <Link to="/register" className="login__link">
                <h3 className="login__subtitle"> Sign up here!</h3>
              </Link>
            </div>
          </article>
          <RegistrationForm
            fields={["email", "password"]}
            formType={"login"}
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            errors={formErrors}
            successMessage={"Welcome!"}
          />
          {success && (
            <div className="registration__message">Login successful.</div>
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

export default LoginPage;
