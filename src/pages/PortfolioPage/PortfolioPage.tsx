import "./PortfolioPage.scss";
import React, { useState } from 'react';

interface TemplateType {
    content: React.ReactNode;
}

const PortfolioPage: React.FC = () => {
    const [selectedTemplate, setSelectedTemplate] = useState<TemplateType | null>(null);
    const [images, setImages] = useState<File[]>([]);
    const [textContent, setTextContent] = useState<string>("");
    
    return (
        <>
            
        </>
    );
};

export default PortfolioPage;