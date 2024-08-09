import "./SignUpPage.scss";
import { Link } from "react-router-dom";
import React from "react";

const SignUpPage: React.FC = () => {
  return (
    <main className="registration">
      <section className="registration__logo"></section>
      <section className="registration__container">
        <article className="registration__subcontainer">
          <div className="registration__card">
            <h1 className="registration__title">CREATE NEW ACCOUNT</h1>
            <div className="registration__subcard">
              <h3 className="registration__subtitle">Already a member? </h3>
              <Link to="" className="registration__link">
                <h3 className="registration__subtitle">Log In</h3>
              </Link>
            </div>
          </div>
        </article>
        <article className="registration__form"></article>
      </section>
    </main>
  );
};

export default SignUpPage;
