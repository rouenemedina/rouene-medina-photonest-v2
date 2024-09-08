import "./SidebarLayouts.scss";
import React, { useCallback, useState } from "react";
import LayoutHero from "../LayoutHero/LayoutHero";
import Buttons from "../Buttons/Buttons";

interface SidebarLayoutsProps {
  onSubmit: (submitHandler: () => void) => void;
}

const SidebarLayouts: React.FC<SidebarLayoutsProps> = ({ onSubmit }) => {
  const [heroSubmitHandler, setHeroSubmitHandler] = useState<(() => void) | null>(null);
  // const [featuredSubmitHandler, setFeaturedSubmitHandler] = useState<(() => void) | null>(null);
  // const [aboutSubmitHandler, setAboutSubmitHandler] = useState<(() => void) | null>(null);
  // const [connectSubmitHandler, setConnectSubmitHandler] = useState<(() => void) | null>(null);
  // const [gallerySubmitHandler, setGallerySubmitHandler] = useState<(() => void) | null>(null);

    const handleSubmitAll = useCallback(() => {
        if (heroSubmitHandler) {
          heroSubmitHandler();
        }
    }, [onSubmit]);
    
  return (
    <main onSubmit={handleSubmitAll}>
      <LayoutHero onSubmit={setHeroSubmitHandler} />
      <Buttons type="submit">Save Changes</Buttons>
    </main>
  );
};

export default SidebarLayouts;
