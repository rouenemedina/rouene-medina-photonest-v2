// import "./LayoutImageandInput.scss";
// import React, { useEffect, useState } from "react";
// import CustomTextField from "../CustomTextField/CustomTextField";
// import CustomImageField from "../CustomImageField/CustomImageField";

// interface ImageInputProps {
//   onChange: () => void;
// }

// const LayoutImageandInput: React.FC<ImageInputProps> = ({ onChange }) => {
//   const [title, setTitle] = useState<string>("")
//   const [uploadedFile, setUploadedFile] = useState<File | null>(null);
//   const [imageURL, setImageURL] = useState<string | null>(null);
//   //   const [error, setError] = useState<boolean>(false);
//   //   const [success, setSuccess] = useState<boolean>(false);

//   useEffect(() => {
//     return () => {
//       // Cleanup
//       if (imageURL) {
//         URL.revokeObjectURL(imageURL);
//       }
//     };
//   }, [imageURL]);

//   const handleTextChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//       setTitle(event.target.value);

//   const handleFileChange = (file: File | null) => {
//     if (file) {
//       const url = URL.createObjectURL(file);
//       setImageURL(url);
//       setUploadedFile(file);
//     } else {
//       setImageURL(null);
//       setUploadedFile(null);
//     }
//   };

//   return (
//     <main className="imageInput">
//       <section className="imageInput__top">
//         <CustomImageField
//           label="Upload Image"
//           name="imageInput_image"
//           onChange={handleFileChange}
//           error={formErrors.imageInput_image}
//           helperText={uploadedFile ? "" : "Select an image file."}
//         />
//         {imageURL && (
//           <section className="imageInput__preview">
//             <img src={imageURL} alt="Preview" className="imageInput__img"></img>
//           </section>
//         )}
//       </section>
//       <section className="imageInput__bottom">
//         <CustomTextField
//           label="Title"
//           name="imageInput_title"
//           className="imageInput__input"
//           value={title}
//           placeholder="Write your description here."
//           changeHandler={handleTextChange}
//           error={formErrors.imageInput_description}
//         />
//       </section>
//     </main>
//   );
// };

// export default LayoutImageandInput;
