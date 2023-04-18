import React, {useEffect, useState} from "react";
import logo from "../images/Logo-BeeYou.png";
import cartIcon from "../images/Group 35.png";


function Header() {
    const [menus, setMenus] = useState([])
    useEffect(() => {
        setMenus([
            {
                name: "Trang chủ",
                link: "/"
            },
            {
                name: "Tote Collection",
                link: "/tote-collection"
            },
            {
                name: "Về chúng tôi",
                link: "/about-us"
            },
            {
                name: "Liên hệ",
                link: "/contact-us"
            }
        ]);
    }, []);

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div
                    className="container d-flex justify-content-lg-start justify-content-between align-items-center navbar-container">
                    {/* Logo */}
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Tote Bee You"/>
                    </a>

                    <div className="d-flex">
                        {/* Cart Icon */}
                        <div className="d-block d-sm-none">
                            <div className="d-flex ms-auto align-items-center">
                                <a className="icon-cart" href="#">
                                    <img src={cartIcon} alt="Cart"/>
                                </a>
                            </div>
                        </div>

                        {/* Navbar Toggle Button */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                            {/*<span className="navbar-toggler-icon"></span>*/}
                            <i className="fa fa-bars" aria-hidden="true"></i>
                        </button>
                    </div>

                    {/* Navigation Items */}
                    <div className="collapse navbar-collapse flex-grow-1" id="navbarNav">
                        <ul className="navbar-nav">
                            {menus.map((item, index) => {
                                return (
                                    <li key={index} className="nav-item">
                                        <a className="nav-link" href={item.link}>
                                            {item.name}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    <div className="d-none d-sm-block">
                        <div className="d-flex ms-auto align-items-center">
                            <a className="icon-cart" href="#">
                                <img src={cartIcon} alt="Cart"/>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
);
}

export default Header;
