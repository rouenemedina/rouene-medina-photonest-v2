import "./LandingPage.scss";
import { Link } from "react-router-dom";
import React from "react";

//if the user clicked on the photographer link, the userType === 'photographer' 
//and will redirect to the sign-up/login page
//if the user chooses to be a client, will be redirected to the homepage

const LandingPage: React.FC = () => {
  return (
    <>
      <main className="landing">
        <h1 className="landing__title">Discover your next journey</h1>
        <section className="landing__container">
          <article className="landing__subcontainer">
            <Link to="/register" className="landing__link">
              <h2 className="landing__description">Photographer</h2>
            </Link>
          </article>
          <article className="landing__subcontainer">
            <Link to="/home" className="landing__link">
              <h2 className="landing__description">Client</h2>
            </Link>
          </article>
        </section>
      </main>
    </>
  );
};

export default LandingPage;
