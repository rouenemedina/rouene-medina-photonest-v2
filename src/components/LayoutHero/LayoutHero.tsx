import "./LayoutHero.scss";
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import CustomTextField from "../CustomTextField/CustomTextField";
import CustomImageField from "../CustomImageField/CustomImageField";

interface HeroData {
    hero_description: string;
    user_id: number;
}

interface FormErrors {
    hero_description?: string;
    hero_image?: string;
}

interface LayoutHeroProps {
    onSubmit: (submitHandler: () => void) => void;
}

const API_URL = import.meta.env.VITE_APP_API_URL;

const LayoutHero: React.FC <LayoutHeroProps> = ({ onSubmit }) => {
    const { userId } = useParams<{ userId: string }>();
    const [formData, setFormData] = useState<HeroData>({
        hero_description: "",
        user_id: parseInt(userId || "0")
    });
    const [formErrors, setFormErrors] = useState<FormErrors>({});
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    const validateFormData = (data: HeroData) => {
        const errors: FormErrors = {};
        if (!data.hero_description) {
            errors.hero_description = "Please fill out the required fields.";
          }
          if (!imageUrl) {
            errors.hero_image = "Please upload an image.";
          }
          return errors;
    };

    const handleTextChange = useCallback(() => {
        (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const { name, value } = event.target;
            setFormData({ ...formData, [name]: value });

            const errors = validateFormData({ ...formData, [name]: value });
            setFormErrors(errors);
        }
    }, [formData]);

    const handleFileChange = (file: File | null) => {
        if (file) {
            const url = URL.createObjectURL(file);
            setImageUrl(url);
            setUploadedFile(file);
        } else {
            setImageUrl(null);
            setUploadedFile(null);
        }
    }

    useEffect(() => {
        return () => {
            //Cleanup
            if(imageUrl) {
                URL.revokeObjectURL(imageUrl);
            }
        }
    }, [imageUrl]);

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
          helperText={uploadedFile ? "" : "Select an image file."}
        />
        {imageUrl && (
          <section className="hero__preview">
            <img src={imageUrl} alt="Preview" className="hero__img"></img>
          </section>
        )}
      </section>
    </main>
    );
};

export default LayoutHero;