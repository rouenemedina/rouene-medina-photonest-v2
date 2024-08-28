import React, { useCallback, useEffect, useState } from "react";
import CustomTextField from "../CustomTextField/CustomTextField";
import CustomImageField from "../CustomImageField/CustomImageField";
import axios from "axios";
import { useParams } from "react-router-dom";

interface HeroLayoutProps {
  //   userId: number;
  onSubmit: (submitHandler: () => void) => void;
}

interface HeroLayoutData {
  hero_description: string;
  user_id: number;
}

interface FormErrors {
  hero_description?: string;
  hero_image?: string;
}

const API_URL = import.meta.env.VITE_APP_API_URL;

const LayoutHero: React.FC<HeroLayoutProps> = ({ onSubmit }) => {
  const { userId } = useParams<{ userId: string }>();
  const [formData, setFormData] = useState<HeroLayoutData>({
    hero_description: "",
    user_id: parseInt(userId || "0"),
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [imageURL, setImageURL] = useState<string | null>(null);
  //   const [error, setError] = useState<boolean>(false);
  //   const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    return () => {
      // Cleanup
      if (imageURL) {
        URL.revokeObjectURL(imageURL);
      }
    };
  }, [imageURL]);

  const handleTextChange = useCallback(() => {
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });

      const errors = validateFormData({ ...formData, [name]: value });
      setFormErrors(errors);
    };
  }, [formData]);

  const validateFormData = (data: HeroLayoutData) => {
    const errors: Partial<FormErrors> = {};
    if (!data.hero_description) {
      errors.hero_description = "Please fill out the required fields.";
    }
    if (!imageURL) {
      errors.hero_image = "Please upload an image.";
    }
    return errors;
  };

  const handleFileChange = (file: File | null) => {
    if (file) {
      const url = URL.createObjectURL(file);
      setImageURL(url);
      setUploadedFile(file);
    } else {
      setImageURL(null);
      setUploadedFile(null);
    }
  };

  const handleSubmit = useCallback(async () => {
    const errors = validateFormData(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setFormErrors({});
    }

    const updatedFormData = new FormData();
    updatedFormData.append("hero_description", formData.hero_description);
    updatedFormData.append("user_id", formData.user_id.toString());
    if (uploadedFile) {
      updatedFormData.append("file", uploadedFile);
    }

    try {
      await axios.post(`${API_URL}/hero/upload`, updatedFormData);
    } catch (err) {
      console.log(err);
    }
  }, [formData, uploadedFile]);

  useEffect(() => {
    onSubmit(handleSubmit);
  }, [onSubmit, formData, uploadedFile]);

  return (
    <main className="hero">
      <section className="hero__left">
        <CustomTextField
          label="Description"
          name="hero_description"
          className="hero__input"
          placeholder="Write your description here."
          changeHandler={handleTextChange}
          error={formErrors.hero_description}
          multiline={true}
          rows={5}
        />
      </section>
      <section className="hero__right">
        <CustomImageField
          label="Upload Image"
          name="hero_image"
          onChange={handleFileChange}
          error={formErrors.hero_image}
          helperText="Select an image file."
        />
        {imageURL && (
          <section className="hero__preview">
            <img src={imageURL} alt="Preview" className="hero__img"></img>
          </section>
        )}
      </section>
    </main>
  );
};

export default LayoutHero;
