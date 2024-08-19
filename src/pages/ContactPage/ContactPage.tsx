import "./ContactPage.scss";
import React from 'react';
import ContactForm from "../../components/FormContact/FormContact";

const ContactPage: React.FC = () => {
    return (
        <>
          <ContactForm fields={["name", "email", "message"]} successMessage={""}/>  
        </>
    );
};

export default ContactPage;