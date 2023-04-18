import React from "react";
import IconFacebook from "../images/icon-facebook.png"
import IconInstagram from "../images/icon-instagram.png"
import IconYoutube from "../images/icon-youtube.png"

function Footer() {
    return (
        <footer>
            <div className="menu-list">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-8 menu-list">
                            <div className="container">
                                <div className="row">
                                    <div className="col-6 col-sm-3">
                                        <a href="#">Sản phẩm hot</a>
                                    </div>
                                    <div className="col-6 col-sm-3">
                                        <a href="#">Hot deal tháng 12</a>
                                    </div>
                                    <div className="col-6 col-sm-3">
                                        <a href="#">Sản phẩm bán chạy</a>
                                    </div>
                                    <div className="col-6 col-sm-3">
                                        <a href="#">Another links</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4 bottom">
                            <div className="container">
                                <div className="row flex-end">
                                    <div className="col col-sm">
                                        <p className={"copy-right text-end"}>© 2020 beebag.com.vn</p>
                                    </div>
                                    <div className="col col-sm">
                                        <ul className={"social"}>
                                            <li>
                                                <img src={IconFacebook} alt=""/>
                                            </li>
                                            <li>
                                                <img src={IconInstagram} alt=""/>
                                            </li>
                                            <li>
                                                <img src={IconYoutube} alt=""/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
