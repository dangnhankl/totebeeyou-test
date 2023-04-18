import React from "react";
import logo from "../images/Logo-BeeYou.png";
import cartIcon from "../images/Group 35.png";

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container d-flex justify-content-start align-items-center">
                    {/* Logo */}
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Tote Bee You" />
                    </a>

                    {/* Navigation Items */}
                    <div className="d-flex">
                        <ul className="navbar-nav flex-grow-1">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Cart Icon */}
                    <div className="d-flex ms-auto align-items-center">
                        <a className="icon-cart" href="#">
                            <img src={cartIcon} alt="Cart" />
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
