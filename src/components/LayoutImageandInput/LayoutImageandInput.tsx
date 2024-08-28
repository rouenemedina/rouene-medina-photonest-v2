import "./LayoutImageandInput.scss";
import React, { useCallback, useEffect, useState } from "react";
import CustomTextField from "../CustomTextField/CustomTextField";
import CustomImageField from "../CustomImageField/CustomImageField";
import { useParams } from "react-router-dom";
import axios from "axios";

interface ImageInputProps {
  //   userId: number;
  onSubmit: (submitHandler: () => void) => void;
}

interface ImageInputData {
  imageInput_description: string;
  user_id: number;
}

interface FormErrors {
  imageInput_description?: string;
  imageInput_image?: string;
}

const API_URL = import.meta.env.VITE_APP_API_URL;

const LayoutImageandInput: React.FC<ImageInputProps> = ({ onSubmit }) => {
  const { userId } = useParams<{ userId: string }>();
  const [formData, setFormData] = useState<ImageInputData>({
    imageInput_description: "",
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

  const handleTextChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });

      const errors = validateFormData({ ...formData, [name]: value });
      setFormErrors(errors);
  }, [formData]);

  const validateFormData = (data: ImageInputData) => {
    const errors: Partial<FormErrors> = {};
    if (!data.imageInput_description) {
      errors.imageInput_description = "Please fill out the required fields.";
    }
    if (!imageURL) {
      errors.imageInput_image = "Please upload an image.";
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
    updatedFormData.append(
      "imageInput_description",
      formData.imageInput_description
    );
    updatedFormData.append("user_id", formData.user_id.toString());
    if (uploadedFile) {
      updatedFormData.append("file", uploadedFile);
    }

    try {
      await axios.post(`${API_URL}/imageInput/upload`, updatedFormData);
    } catch (err) {
      console.log(err);
    }
  }, [formData, uploadedFile]);

  useEffect(() => {
    onSubmit(handleSubmit);
  }, [onSubmit, formData, uploadedFile]);

  return (
    <main className="imageInput">
      <section className="imageInput__top">
        <CustomImageField
          label="Upload Image"
          name="imageInput_image"
          onChange={handleFileChange}
          error={formErrors.imageInput_image}
          helperText={uploadedFile ? "" : "Select an image file."}
        />
        {imageURL && (
          <section className="imageInput__preview">
            <img src={imageURL} alt="Preview" className="imageInput__img"></img>
          </section>
        )}
      </section>
      <section className="imageInput__bottom">
        <CustomTextField
          label="Description"
          name="imageInput_description"
          className="imageInput__input"
          placeholder="Write your description here."
          changeHandler={handleTextChange}
          error={formErrors.imageInput_description}
        />
      </section>
    </main>
  );
};

export default LayoutImageandInput;
