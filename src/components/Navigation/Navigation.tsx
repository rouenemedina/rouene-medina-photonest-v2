import "./Navigation.scss";
import React from "react";
import { NavLink } from "react-router-dom";

interface NavigationProps {
  isClicked: boolean;
  closeMenu: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ isClicked, closeMenu }) => {
  const navigationClasses = `nav__menu ${isClicked ? "--open" : ""}`;

  return (
    <>
      <main className={navigationClasses}>
        <section>
          <NavLink
            to=""
            className={({ isActive }) =>
              isActive ? "nav__link nav__link--active" : "nav__link"
            }
            onClick={closeMenu}
          >
            <h4 className="nav__title">HOME</h4>
          </NavLink>
          <NavLink
            to=""
            className={({ isActive }) =>
              isActive ? "nav__link nav__link--active" : "nav__link"
            }
            onClick={closeMenu}
          >
            <h4 className="nav__title">PHOTOGRAPHERS</h4>
          </NavLink>
          <NavLink
            to=""
            className={({ isActive }) =>
              isActive ? "nav__link nav__link--active" : "nav__link"
            }
            onClick={closeMenu}
          >
            <h4 className="nav__title">PORTFOLIO</h4>
          </NavLink>
          <NavLink
            to=""
            className={({ isActive }) =>
              isActive ? "nav__link nav__link--active" : "nav__link"
            }
            onClick={closeMenu}
          >
            <h4 className="nav__title">CONTACT US</h4>
          </NavLink>
        </section>
      </main>
    </>
  );
};

export default Navigation;
