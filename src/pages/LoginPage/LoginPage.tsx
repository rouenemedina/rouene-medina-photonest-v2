import "./LoginPage.scss";
import React from "react";
import { Link } from "react-router-dom";
import RegistrationForm from "../../components/FormRegistration/FormRegistration";

//TODO: Success Message
const LoginPage: React.FC = () => {
  return (
    <>
      <main className="login">
        <section className="login__container">
          <article className="login__card">
            <h1 className="login__title">Welcome!</h1>
            <div className="login__subcard">
              <h3 className="login__subtitle">Not a member yet? </h3>
              <Link to="/signup" className="login__link">
                <h3 className="login__subtitle"> Sign up here!</h3>
              </Link>
            </div>
          </article>
          <RegistrationForm
            fields={["email", "password"]}
            formType={"login"}
            successMessage={"Welcome Home"}
          />
        </section>
      </main>
    </>
  );
};

export default LoginPage;
