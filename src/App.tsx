import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import LandingPage from "./pages/LandingPage/LandingPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
import PageEditor from "./components/EditorPage/EditorPage";

const App: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/register" element={<SignUpPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/dashboard" element={<DashboardPage />}></Route>
          <Route path="/portfolio" element={<PortfolioPage />}></Route>
          <Route path="/editportfolio" element={<PageEditor />}></Route>
          <Route path="/contactus" element={<ContactPage />}></Route>
        </Routes>
      </BrowserRouter>
    </DndProvider>
  );
}

export default App;
