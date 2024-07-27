import React from "react";
import "./Footer.css";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <LanguageSwitcher />
        <p>
          &copy; {new Date().getFullYear()} Company Data Hub. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
