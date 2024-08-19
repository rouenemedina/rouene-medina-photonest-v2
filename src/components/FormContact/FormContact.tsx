import "./FormContact.scss";
import React, { useEffect, useState } from "react";
import CustomTextField from "../CustomTextField/CustomTextField";
import Buttons from "../Buttons/Buttons";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

interface ContactFormProps {
  fields: string[];
  successMessage: string;
}

interface ContactFormData {
  contact_name: string;
  contact_email: string;
  contact_message: string;
}

interface FormErrors {
  [key: string]: string;
}

interface ErrorResponse {
  message: string;
  statusCode: number;
}

const ContactForm: React.FC<ContactFormProps> = ({
  fields,
  successMessage,
}) => {
  const displayName = fields.includes("name");
  const displayEmail = fields.includes("email");
  const displayMessage = fields.includes("message");

  const [formData, setFormData] = useState<ContactFormData>({
    contact_name: "",
    contact_email: "",
    contact_message: "",
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [error, setError] = useState<AxiosError<ErrorResponse> | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [redirect, setRedirect] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (redirect) {
      const timer = setTimeout(() => {
        navigate("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [redirect, navigate]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateFormData = (data: ContactFormData) => {
    const errors: Partial<ContactFormData> = {};
    if (!data.contact_name) {
      errors.contact_name = "Please enter your full name.";
    }
    if (!data.contact_email) {
      errors.contact_email = "Please enter your email address.";
    }
    if (!data.contact_message) {
      errors.contact_message = "Write us a message, we love to hear from you.";
    }
    return errors;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const errorOutput: Partial<ContactFormData> = validateFormData(formData);
    setFormErrors(errorOutput);

    if (Object.keys(errorOutput).length === 0) {
      try {
        const updatedFormData = {
          contact_name: formData.contact_name,
          contact_email: formData.contact_email,
          contact_message: formData.contact_message,
        };
        const API_URL = import.meta.env.VITE_APP_API_URL;
        await axios.post(`${API_URL}/contact`, updatedFormData);
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
      contact_name: "",
      contact_email: "",
      contact_message: "",
    });
    setFormErrors({});
    setRedirect(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <article>
          {displayName && (
            <CustomTextField
              label="First and Last Name"
              name="contact_name"
              className=""
              placeholder="Your Full Name"
              changeHandler={handleChange}
              error={formErrors.contact_name}
            />
          )}
          {displayEmail && (
            <CustomTextField
              label="Email Address"
              name="contact_email"
              className=""
              placeholder="email@domain.ca"
              changeHandler={handleChange}
              error={formErrors.contact_email}
            />
          )}
          {displayMessage && (
            <CustomTextField 
            label="Message"
            name="contact_message"
            className=""
            placeholder="Write your message here."
            changeHandler={handleChange}
            error={formErrors.contact_message}
            multiline={true}
            rows={5}
            />
          )}
        </article>
        <article>
          <Buttons type="submit">Submit</Buttons>
        </article>
        {success && <div className="">{successMessage}</div>}
        {error && <div className="">{error.response?.data.message}</div>}
      </form>
    </>
  );
};

export default ContactForm;
