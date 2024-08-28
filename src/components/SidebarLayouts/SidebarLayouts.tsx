import "./SidebarLayouts.scss";
import React, { useCallback } from "react";
import LayoutImageandText from "../LayoutImageandText/LayoutImageandText";
import LayoutFeatureWork from "../LayoutFeatureWork/LayoutFeatureWork";

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
      <LayoutImageandText onSubmit={handleLayoutSubmit} />
      <LayoutFeatureWork onSubmit={handleLayoutSubmit}/>
    </>
  );
};

export default SidebarLayouts;
