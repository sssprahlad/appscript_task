import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

import { IoSearch } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";
import { BsCart2 } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar-main-container">
      <div className="center-containe pl">
        <div className="nav-bg-color">
          <div className="logo-container">
            <img
              src="/Images/Logo.svg"
              alt="logo"
              onClick={() => navigate("/")}
            />
            <h2>Logo</h2>
            <div className="cart-fav-container">
              <IoSearch />
              <Link to="/favourites">
                {" "}
                <GrFavorite />{" "}
              </Link>
              <Link to="/cart">
                {" "}
                <BsCart2 />
              </Link>
              <IoMdContact />
            </div>
          </div>
          <ul className="nav-ul-list">
            <li>
              <Link className="nav-link" to="/">
                Shop
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/skills">
                Skills
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/stories">
                Stories
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/contact">
                Contach Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
