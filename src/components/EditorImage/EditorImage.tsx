import React from "react";

interface ImageUploaderProps {
  onImageUpload: (file: File) => void;
}

//TODO: check if I still need this 
const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload }) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onImageUpload(file);
    }
  };

  return (
    <>
      <input type="file" accept="image/*" onChange={handleFileChange} />
    </>
  );
};

export default ImageUploader;
