import "./LoginPage.scss";
import React from "react";
import { Link } from "react-router-dom";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

const LoginPage: React.FC = () => {
  return (
    <>
      <main className="login">
        <section>
          <article>
            <h1>Welcome!</h1>
            <div>
              <h3>Not a member yet? </h3>
              <Link to="">
                <h3>Sign up here!</h3>
              </Link>
            </div>
          </article>
          <RegistrationForm fields={["email", "password"]} />
        </section>
      </main>
    </>
  );
};

export default LoginPage;
