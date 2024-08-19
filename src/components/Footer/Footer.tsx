import "./Footer.scss";
import React from "react";
import logo from "../../assets/logo/Logo-2.png";
import facebook from "../../assets/icons/facebook.png";
import instagram from "../../assets/icons/instagram.png";
import twitter from "../../assets/icons/twitter.png";

const Footer: React.FC = () => {
  return (
    <main className="footer">
      <img src={logo} alt="PhotoNest Logo" className="footer__logo"></img>
      <section className="footer__container">
        <article className="footer__company">
          <div className="company__employee">
            <h5 className="company__poc">Rouene Medina</h5>
            <h5 className="company__title">The PhotoNest Management</h5>
          </div>
          <div className="company__address">
            <p>501 District Penthouse,</p>
            <p>Toronto, ON, CA, M4Y2P7</p>
          </div>
          <p className="company__contact">info@photonest.ca</p>
        </article>
        <article className="footer__socials">
          <div className="socials__icons">
            <a className="socials__link" href="https://instagram.com/">
              <img src={instagram} alt="Instagram" className="socials__img" />
            </a>
            <a className="socials__link" href="https://facebook.com/">
              <img src={facebook} alt="Facebook" className="socials__img" />
            </a>
            <a className="socials__link" href="https://twitter.com/">
              <img src={twitter} alt="Twitter" className="socials__img" />
            </a>
          </div>
        </article>
      </section>
      <section className="footer__copyright">
        <h5 className="footer__description">
          &copy; 2024. PhotoNest. All Rights Reserved.
        </h5>
      </section>
    </main>
  );
};

export default Footer;
