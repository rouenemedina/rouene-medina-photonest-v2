import "./LoginPage.scss";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RegistrationForm from "../../components/FormRegistration/FormRegistration";
import { AxiosError } from "axios";

//TODO: Success Message
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

const API_URL = import.meta.env.VITE_APP_API_URL;

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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
        </section>
      </main>
    </>
  );
};

export default LoginPage;
