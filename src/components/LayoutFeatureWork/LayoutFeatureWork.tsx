// import "./LayoutFeatureWork.scss";
// import React, { useCallback, useState } from 'react';
// import { useParams } from "react-router-dom";

// import axios from "axios";

// interface FeaturedWorkData {
//     featured_title: string;
//     user_id: number;
// }

// interface FormErrors {
//     featured_title?: string;
//     featured_url?: string;
// }

// interface FeaturedWorkProps {
//     onSubmit: (submitHandler: () => void) => void;
// }

// const API_URL = import.meta.env.VITE_APP_API_URL;

// const LayoutFeatureWork: React.FC<FeaturedWorkProps>= ({ onSubmit }) => {
//     const { userId } = useParams<{ userId: string }>();
//     const [formData, setFormData] = useState<FeaturedWorkData>({
//       featured_title: "",
//       user_id: parseInt(userId || "0"),
//     });
//     const [formErrors, setFormErrors] = useState<FormErrors>({});

//     // const handleLayoutSubmit = useCallback(() => {
//     //     const submitHandler = () => {
//     //         console.log("Layout");
//     //     }
//     //     onSubmit(submitHandler);
//     // }, [onSubmit]);

//     const errors = validateFormData({ ...formData, [name]: value });
//       setFormErrors(errors);
//     }, [formData]);

//   const validateFormData = (data: FeaturedWorkData) => {
//     const errors: FormErrors = {};
//     if (!data.featured_title) {
//       errors.featured_title = "Please fill out the required fields.";
//     }
//     if () {
//       errors.featured_url = "Please upload an image.";
//     }
//     return errors;
//   };

// const handleSubmit = useCallback(async () => {
//     const errors = validateFormData(formData);
//     if (Object.keys(errors).length > 0) {
//       setFormErrors(errors);
//     } else {
//       setFormErrors({});
//     }

//     const updatedFormData = new FormData();
//     updatedFormData.append(
//       "imageInput_description",
//       formData.imageInput_description
//     );
//     updatedFormData.append("user_id", formData.user_id.toString());
//     if (uploadedFile) {
//       updatedFormData.append("file", uploadedFile);
//     }

//     try {
//       await axios.post(`${API_URL}/imageInput/upload`, updatedFormData);
//     } catch (err) {
//       console.log(err);
//     }
//   }, [formData, uploadedFile]);

//   useEffect(() => {
//     onSubmit(handleSubmit);
//   }, [onSubmit, formData, uploadedFile]);

//     return (
//         <main className="feature">
            
//         </main>
//     );
// };

// export default LayoutFeatureWork;