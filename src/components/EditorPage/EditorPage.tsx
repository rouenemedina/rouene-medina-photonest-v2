import "./EditorPage.scss";
import React, { useState } from 'react';
import DragItem from "../../components/DragItem/DragItem";
import DropZone from "../../components/DropZone/DropZone";
import ImageUploader from "../../components/EditorImage/EditorImage";
import TextEditor from "../../components/EditorText/EditorText";

interface TemplateType {
    content: React.ReactNode;
}

const PageEditor: React.FC = () => {
    const [selectedTemplate, setSelectedTemplate] = useState<TemplateType | null>(
        null
      );
      const [images, setImages] = useState<File[]>([]);
      const [textContent, setTextContent] = useState<string>("");
    
      const handleTemplateDrop = (item: { type: string }) => {
        if (item.type === "TEMPLATE") {
          setSelectedTemplate({ content: <div>Template Content</div> });
        }
      };
    
      const handleImageUpload = (file: File) => {
        setImages([...images, file]);
      };
    
      const handleTextChange = (value: string) => {
        setTextContent(value);
      };
    
      return (
        <>
          <div>
            <DropZone onDrop={handleTemplateDrop} />
            <DragItem type="TEMPLATE">Drag Me</DragItem>
            <ImageUploader onImageUpload={handleImageUpload} />
            <TextEditor onChange={handleTextChange} />
    
            {selectedTemplate && (
              <div>
                {selectedTemplate.content}
                {/* Display uploaded images and text content here */}
                <div>
                  {images.map((image, index) => (
                    <img
                      key={index}
                      src={URL.createObjectURL(image)}
                      alt={`Uploaded ${index}`}
                    />
                  ))}
                </div>
                {/* Display text content */}
                <div>{textContent}</div>
              </div>
            )}
          </div>
        </>
      );
};

export default PageEditor;