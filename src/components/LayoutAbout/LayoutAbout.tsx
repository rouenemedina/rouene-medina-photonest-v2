import "./LayoutAbout.scss";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CustomTextField from "../CustomTextField/CustomTextField";
import axios from "axios";

interface AboutData {
  about_name: string;
  about_description: string;
  user_id: number;
}

interface FormErrors {
  about_name?: string;
  about_description?: string;
  about_image?: string;
}

interface LayoutAboutProps {
  onSubmit: (submitHandler: () => void) => void;
}

const API_URL = import.meta.env.VITE_APP_API_URL;

const LayoutAbout: React.FC<LayoutAboutProps> = ({ onSubmit }) => {
  const { userId } = useParams<{ userId: string }>();
  const [formData, setFormData] = useState<AboutData>({
    about_name: "",
    about_description: "",
    user_id: parseInt(userId || "0"),
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [uploadedFiles, setUploadedFiles] = useState<File | null>(null);
  const [imageUrls, setImageUrls] = useState<string | null>(null);

  const validateFormData = (data: AboutData) => {
    const errors: FormErrors = {};
    if (!data.about_name) {
      errors.about_name = "Please fill out the required field.";
    }
    if (!data.about_description) {
      errors.about_description = "Please fill out the required field.";
    }
    if (!imageUrls) {
      errors.about_image = "Please upload images";
    }
    return errors;
  };

  const handleTextChange = useCallback(() => {
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });

      const errors = validateFormData({ ...formData, [name]: value });
      setFormErrors(errors);
    };
  }, [formData]);

  const handleFileChange = (files: File[] | File | null) => {
    if (Array.isArray(files)) {
      if (files.length > 0) {
        //TODO: handle multiple files logic
      } else {
        setImageUrls(null);
        setUploadedFiles(null);
      }
    } else if (files) {
      const url = URL.createObjectURL(files);
      setImageUrl(url);
      setUploadedFile(files);
    } else {
      setImageUrl(null);
      setUploadedFile(null);
    }
  };

  useEffect(() => {
    return () => {
      //Cleanup
      if (imageUrls) {
        URL.revokeObjectURL(imageUrls);
      }
    };
  }, [imageUrls]);

  const handleSubmit = useCallback(async () => {
    const errors = validateFormData(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});

    const updatedFormData = new FormData();
    updatedFormData.append("about_name", formData.about_name);
    updatedFormData.append("about_description", formData.about_description);
    updatedFormData.append("user_id", formData.user_id.toString());
    if (uploadedFiles) {
      updatedFormData.append("file", uploadedFiles);
    }

    try {
      await axios.post(`${API_URL}/about/upload`, updatedFormData);
    } catch (err) {
      console.log(err);
    }
  }, [formData, uploadedFiles]);

  useEffect(() => {
    onSubmit(handleSubmit);
  }, [onSubmit, handleSubmit]);

  return (
    <main className="about">
      <section>
        <CustomTextField
          label="Name"
          name="about_name"
          className="about__input"
          placeholder="Your name here"
          changeHandler={handleTextChange}
          error={formErrors.about_name}
          multiline={false}
        />
      </section>
      <section>
        <CustomTextField
          label="Description"
          name="about_description"
          className="about__input"
          placeholder="Write your description here."
          changeHandler={handleTextChange}
          error={formErrors.about_description}
          multiline={true}
          rows={5}
        />
      </section>
    </main>
  );
};

export default LayoutAbout;
