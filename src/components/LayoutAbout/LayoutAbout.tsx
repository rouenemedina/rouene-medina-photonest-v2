import "./LayoutAbout.scss";
import React from "react";

interface AboutData {
  about_name: string;
  about_description: string;
  user_id: number;
}

interface FormErrors {
  about_name?: string;
  about_description?: string;
}

const LayoutAbout: React.FC = () => {
  return (
    <main className="about">

    </main>
  );
};

export default LayoutAbout;
