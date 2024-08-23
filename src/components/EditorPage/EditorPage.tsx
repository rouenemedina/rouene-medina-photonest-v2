import "./EditorPage.scss";
import React, { useCallback } from "react";
import SidebarLayouts from "../SidebarLayouts/SidebarLayouts";

const PageEditor: React.FC = () => {
  const handleLayoutSubmit = useCallback((submitHandler: () => void) => {
    submitHandler();
  }, []);

  return (
    <>
      <SidebarLayouts onSubmit={handleLayoutSubmit} />
    </>
  );
};

export default PageEditor;
