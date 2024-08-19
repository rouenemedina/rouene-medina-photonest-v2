import "./ContactPage.scss";
import React from "react";
import ContactForm from "../../components/FormContact/FormContact";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const ContactPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="contact">
        <section className="contact__section">
          <article className="contact__card">
            <h1 className="contact__title">Contact Us</h1>
          </article>
          <ContactForm
            fields={["name", "email", "message"]}
            successMessage={""}
          />
        </section>
        <section className="contact__feature">
            <img></img>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
