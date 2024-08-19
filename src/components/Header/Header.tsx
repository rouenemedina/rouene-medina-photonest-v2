import "./Header.scss";
import React, { useState } from "react";
import { MdClose, MdOutlineMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

const Header: React.FC = () => {
  const [click, setClick] = useState<boolean>(false);

  const handleMenuClick = () => {
    setClick(!click);
  };

  const closeMenu = () => {
    setClick(false);
  };

  const HamburgerMenu = (
    <MdOutlineMenu className="nav__hamburger" onClick={handleMenuClick} />
  );

  const CloseMenu = <MdClose className="nav__hamburger" onClick={closeMenu} />;

  return (
    <>
      <nav className="header">
        <section>
          <Link to="">
            <img alt="PhotoNest Logo"></img>
          </Link>
        </section>
        <section>
          {click ? CloseMenu : HamburgerMenu}
          {click && <Navigation isClicked={true} closeMenu={closeMenu} />}
          <Link to="/dashboard">
            <img alt="User Profile Photo"></img>
          </Link>
        </section>
      </nav>
    </>
  );
};

export default Header;
