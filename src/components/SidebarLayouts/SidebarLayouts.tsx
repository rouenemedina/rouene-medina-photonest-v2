import "./SidebarLayouts.scss";
import React, { useCallback } from "react";
import LayoutPhotoandText from "../LayoutPhotoandText/LayoutPhotoandText";

interface SidebarLayoutsProps {
  onSubmit: (submitHandler: () => void) => void;
}

const SidebarLayouts: React.FC<SidebarLayoutsProps> = ({ onSubmit }) => {
    const handleLayoutSubmit = useCallback(() => {
        const submitHandler = () => {
            console.log("Layout");
        }
        onSubmit(submitHandler);
    }, [onSubmit]);
    
  return (
    <>
      <LayoutPhotoandText onSubmit={handleLayoutSubmit} />
    </>
  );
};

export default SidebarLayouts;
