import "./SidebarLayouts.scss";
import React, { useCallback } from "react";
import LayoutHero from "../LayoutHero/LayoutHero";

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
      <LayoutHero onSubmit={handleLayoutSubmit} />
    </>
  );
};

export default SidebarLayouts;
