import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul className="admin-bar">
        <Link to="/">
          <li className="admin-bar__listitem">Products</li>
        </Link>
        |
        <Link to="/admin/ManageProducts">
          <li className="admin-bar__listitem">Admin</li>
        </Link>
      </ul>

      <ul className="info-bar">
        <li className="info-bar__listitem">
          Free CO2-compensated shipping on all orders above 50€
        </li>

        <li className="info-bar__listitem">
          All inquiries answered within 24 hours
        </li>

        <li className="info-bar__listitem">
          All inquiries answered within 24 hours
        </li>

      </ul>
      <div className="logo-container">
        <img src="https://i.ibb.co/SNHhdy2/Untitled-Design-21.png"></img>
      </div>
    </nav>
  );
};

export default Header;
