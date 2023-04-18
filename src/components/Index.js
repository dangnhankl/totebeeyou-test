import React, {useEffect, useState} from "react";
import banner from "../images/slider.jpg"
import mainImgZone2 from "../images/Group 40.png"
import mainImgZone2Dsk from "../images/Group40Dsk.png"
import mainImgZone3 from "../images/Group 42 (1).png"
import iconCanvas from "../images/chat-vai-canvas.png";
import iconColor from "../images/5-mau.png";
import iconSize from "../images/size.png";
import iconZipper from "../images/zipper.png";
import product_img1 from "../images/Túi Totes Cactus Bag nữ tính xành điệu.jpg"
import ImageReview from "../images/image 18.png"
import ImageReviewFB from "../images/image 16.jpg"
import ImageInstagram1 from "../images/instagram_1.jpg"
import ImageInstagram2 from "../images/instagram_2.jpg"
import ImageInstagram3 from "../images/instagram_3.jpg"


function formatCurrency(number) {
    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    });
    return formatter.format(number);
}



function Index() {
    const items = [
        {
            name: "Túi Totes Cactus Bag nữ tính xành điệu",
            price: 320000,
            img: product_img1,
            variant: [
                {
                    name: "pink",
                    code: "#EF9CD6"
                }, {
                    name: "blue",
                    code: "#85CEF2"
                }, {
                    name: "yellow",
                    code: "#F4EA88"
                }, {
                    name: "white",
                    code: "#FFFFFF"
                }
            ]
        },
        {
            name: "Túi Totes Cactus Bag nữ tính xành điệu",
            price: 320000,
            img: product_img1,
            variant: [
                {
                    name: "pink",
                    code: "#EF9CD6"
                }, {
                    name: "blue",
                    code: "#85CEF2"
                }, {
                    name: "yellow",
                    code: "#F4EA88"
                }, {
                    name: "white",
                    code: "#FFFFFF"
                }
            ]
        },
        {
            name: "Túi Totes Cactus Bag nữ tính xành điệu",
            price: 320000,
            img: product_img1,
            variant: [
                {
                    name: "pink",
                    code: "#EF9CD6"
                }, {
                    name: "blue",
                    code: "#85CEF2"
                }, {
                    name: "yellow",
                    code: "#F4EA88"
                }, {
                    name: "white",
                    code: "#FFFFFF"
                }
            ]
        },
        {
            name: "Túi Totes Cactus Bag nữ tính xành điệu",
            price: 320000,
            img: product_img1,
            variant: [
                {
                    name: "pink",
                    code: "#EF9CD6"
                }, {
                    name: "blue",
                    code: "#85CEF2"
                }, {
                    name: "yellow",
                    code: "#F4EA88"
                }, {
                    name: "white",
                    code: "#FFFFFF"
                }
            ]
        },
        {
            name: "Túi Totes Cactus Bag nữ tính xành điệu",
            price: 320000,
            img: product_img1,
            variant: [
                {
                    name: "pink",
                    code: "#EF9CD6"
                }, {
                    name: "blue",
                    code: "#85CEF2"
                }, {
                    name: "yellow",
                    code: "#F4EA88"
                }, {
                    name: "white",
                    code: "#FFFFFF"
                }
            ]
        },
        {
            name: "Túi Totes Cactus Bag nữ tính xành điệu",
            price: 320000,
            img: product_img1,
            variant: [
                {
                    name: "pink",
                    code: "#EF9CD6"
                }, {
                    name: "blue",
                    code: "#85CEF2"
                }, {
                    name: "yellow",
                    code: "#F4EA88"
                }, {
                    name: "white",
                    code: "#FFFFFF"
                }
            ]
        }
    ]
    return (
        <div id={"wrapper"}>
            <section id="zone-1" className={"section section-banner"}>
                <div className="container">
                    <div className="row">
                        <div className="main-banner">
                            <div className={"slide-item"}>
                                <a href={"#"}>
                                    <img className={"img-fluid"} src={banner}/>
                                </a>
                            </div>
                            <div className={"slide-item"}>
                                <a href={"#"}>
                                    <img className={"img-fluid"} src={banner}/>
                                </a>
                            </div>
                            <div className={"slide-item"}>
                                <a href={"#"}>
                                    <img className={"img-fluid"} src={banner}/>
                                </a>
                            </div>
                            <div className={"slide-item"}>
                                <a href={"#"}>
                                    <img className={"img-fluid"} src={banner}/>
                                </a>
                            </div>
                            <div className={"slide-item"}>
                                <a href={"#"}>
                                    <img className={"img-fluid"} src={banner}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="zone-2" className={"section section-commit"}>
                <div className="d-flex justify-content-lg-between flex-wrap">
                    <div className="hasBgZone2 col-12 d-block d-sm-none text-center">
                        <img className={"img-fluid"} src={mainImgZone2}/>
                    </div>
                    <div className="container customDesktop">
                        <h2>
                            Tote của BeeYou cam kết mang đến sự hài lòng tối đa cho bạn
                        </h2>
                        <div className="hasBgZoneDsk2 d-none d-sm-block text-center">
                            <img className="img-fluid" src={mainImgZone2Dsk} />
                        </div>
                        <div className={"contentRight contentRoboto"}>
                            <p>
                                Với cộng đồng nhà thiết kế, chúng tôi là ngôi nhà thời trang,nơi chắp cánh cho hàng vạn mẫu
                                thiết kế của các Designer trên khắp Vietnam.
                            </p>
                            <p>
                                Với khách hàng, BeeYou là nơi bạn dễ dàng tìm thấy những những
                                sản phẩm thời trang thể hiện CHẤT của riêng mình. Là chính mình cùng BeeYou.
                            </p>
                            <p>Với đội ngũ lâu năm kinh nghiệm, có tâm với nghề, những dòng sản phẩm của BeeYou được tuyển
                                chọn
                                những nguyên vật liệu
                                cao cấp nhất, gia công tinh xảo, công nghệ tối tân nhất hiện nay, được kiểm tra chất lượng
                                đầu
                                ra
                                khắt khe.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="zone-3" className={"section section-new-arrival"}>
                {/*<div className="container d-flex justify-content-lg-between flex-wrap">
                    <div className="col-12 d-block d-sm-none text-center">
                        <img className={"img-fluid hasImgInner"} src={mainImgZone3}/>
                    </div>
                    <div className="col-12 d-block d-sm-none">
                        <h2>
                            Siêu phẩm Tote mới ra lò
                        </h2>
                        <div className={"contentRoboto"}>
                            <p>
                                Mới "chế" ra cái Tote mới các bác ạ. Thông tin mô tả sơ bộ các bác đọc ở dưới nhé. em đi
                                đóng hàng giao cho khách phát</p>
                        </div>
                    </div>

                </div>*/}
                <div className="container d-flex">
                    <div className="row w-100 flex-column-reverse flex-row-sm justify-content-sm-between">
                        <div className="col-12 col-sm-6">
                            <div className="wrap-width-dsk">
                                <h2>
                                    Siêu phẩm Tote mới ra lò
                                </h2>
                                <div className={"contentRoboto"}>
                                    <p>
                                        Mới "chế" ra cái Tote mới các bác ạ. Thông tin mô tả sơ bộ các bác đọc ở dưới nhé. em đi
                                        đóng hàng giao cho khách phát</p>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-body">
                                    <h6 className="card-title">
                                        Thông tin mô tả sơ bộ
                                    </h6>

                                    <p className="card-text">
                                        <i className={"icon-canvas"} style={{backgroundImage: `url(${iconCanvas})`}}></i>
                                        <span>
                                Chất vải canvas mềm mịn, không xù, không nhão
                            </span>
                                    </p>
                                    <p className="card-text">
                                        <i className={"icon-color"} style={{backgroundImage: `url(${iconColor})`}}></i>
                                        <span>
                                Bee có 5 màu cho bạn lựa canh: Xanh dương, Hồng baby, Vàng chanh,...
                            </span>
                                    </p>
                                    <p className="card-text">
                                        <i className={"icon-size"} style={{backgroundImage: `url(${iconSize})`}}></i>
                                        <span>
                                Size túi: 38*34*7cm
                            </span>
                                    </p>
                                    <p className="card-text">
                                        <i className={"icon-zipper"} style={{backgroundImage: `url(${iconZipper})`}}></i>
                                        <span>
                                Túi có khoá kéo, túi con tiện lợi cho nàng sử dụng
                            </span>
                                    </p>

                                    <a href="#" className="btn w-100 btn-find-more">Tìm hiểu thêm</a>
                                </div>
                            </div>
                        </div>
                        <img className={"img-fluid hasImgInner "} src={mainImgZone3}/>
                    </div>
                </div>
            </section>
            <section id="zone-4" className={"section section-hot"}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="wrap-width-dsk">
                                <h2>Tote giá "nóng"</h2>
                                <div className={"contentRoboto"}>
                                    <p>Đống này đang giảm giá nên rất "nóng”. Bạn còn chờ gì nữa mà "phỏng tay” ngay đi</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="slider-product">
                                {items.map((item, i) => {
                                    return (
                                        <div key={i} className="product-item">
                                            <div className="product-img">
                                                <img className={"img-fluid"} src={item.img}/>
                                            </div>
                                            <div className="product-content">
                                                <h3>{item.name}</h3>
                                            </div>
                                            <div className="product-price">
                                                <div className="current-price">
                                                    {formatCurrency(item.price)}
                                                </div>
                                            </div>
                                            <div className="product-variants">
                                                {item.variant.map((variant, iv) => {
                                                    return (
                                                        <div key={iv} className=""
                                                             style={{background: `${variant.code}`}}>{variant.name}</div>
                                                    )
                                                })}
                                            </div>
                                            <div className="product-actions">
                                                <div className="btn btn-buy">
                                                    Mua ngay
                                                </div>

                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="zone-5" className={"section section-best-seller"}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center text-custom-dsk wrap-width-dsk">
                            <h2>Tote bán chạy</h2>
                            <div className={"contentRoboto"}>
                                <p>Ra bao nhiêu hàng cũng bán không kịp với mấy cô mà, mà cứ như vậy là Bee thích à nha, hehe</p>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="slider-product">
                                {items.map((item, i) => {
                                    return (
                                        <div key={i} className="product-item">
                                            <div className="product-img">
                                                <img className={"img-fluid"} src={item.img}/>
                                            </div>
                                            <div className="product-content">
                                                <h3>{item.name}</h3>
                                            </div>
                                            <div className="product-price">
                                                <div className="current-price">
                                                    {formatCurrency(item.price)}
                                                </div>
                                            </div>
                                            <div className="product-variants">
                                                {item.variant.map((variant, iv) => {
                                                    return (
                                                        <div key={iv} className=""
                                                             style={{background: `${variant.code}`}}>{variant.name}</div>
                                                    )
                                                })}
                                            </div>
                                            <div className="product-actions">
                                                <div className="btn btn-buy">
                                                    Mua ngay
                                                </div>

                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="zone-6" className={"section section-highlight"}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="wrap-width-dsk">
                                <h2>Tote nổi bật</h2>
                                <div className={"contentRoboto"}>
                                    <p>Ra bao nhiêu hàng cũng bán không kịp với mấy cô mà, mà cứ như vậy là Bee thích à nha,
                                        hehe</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="slider-product">
                                {items.map((item, i) => {
                                    return (
                                        <div key={i} className="product-item">
                                            <div className="product-img">
                                                <img className={"img-fluid"} src={item.img}/>
                                            </div>
                                            <div className="product-content">
                                                <h3>{item.name}</h3>
                                            </div>
                                            <div className="product-price">
                                                <div className="current-price">
                                                    {formatCurrency(item.price)}
                                                </div>
                                            </div>
                                            <div className="product-variants">
                                                {item.variant.map((variant, iv) => {
                                                    return (
                                                        <div key={iv} className=""
                                                             style={{background: `${variant.code}`}}>{variant.name}</div>
                                                    )
                                                })}
                                            </div>
                                            <div className="product-actions">
                                                <div className="btn btn-buy">
                                                    Mua ngay
                                                </div>

                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="zone-7" className={"section section-review"}>
                <div className="container d-flex">
                    <div className="row flex-column flex-row-sm justify-content-sm-between">
                        <div className="col-12 col-sm-5">
                            <div className="wrapImg">
                                <img className={"img-fluid"} src={ImageReview} alt=""/>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6">
                            <div className="wrapTitle">
                                <h2>Đánh giá của các nàng</h2>
                                <div className={"contentRoboto"}>
                                    <p>
                                        Mấy đánh giá này là lấy từ facebook qua nè, không có tự bịa ra đâu nha. Hông tin lên facebook mà xem.
                                    </p>
                                </div>
                            </div>
                            <div className="slider-wrapper">
                                <div className="review-slider">
                                    <div className={"slide-item"}>
                                        <a href={"#"}>
                                            <img className={"img-fluid"} src={ImageReviewFB}/>
                                        </a>
                                    </div>
                                    <div className={"slide-item"}>
                                        <a href={"#"}>
                                            <img className={"img-fluid"} src={ImageReviewFB}/>
                                        </a>
                                    </div>
                                    <div className={"slide-item"}>
                                        <a href={"#"}>
                                            <img className={"img-fluid"} src={ImageReviewFB}/>
                                        </a>
                                    </div>
                                </div>
                                <div className="arrows-wrap">
                                    <div className="prev">
                                        <i className="fa fa-chevron-left"></i>
                                    </div>
                                    <div className="next">
                                        <i className="fa fa-chevron-right"></i>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section id="zone-8" className="section section-instagram">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="wrapTitle text-center">
                                <h2>BeeYou trên Instagram</h2>
                                <div className={"contentRoboto"}>
                                    <p>
                                        Follow BeeYou trên instagram để có cơ hội tham gia các chương trình ưu đãi dành riêng cho người dùng Instagram
                                    </p>
                                    <p>
                                        <a href="#"><i className="fa fa-instagram"></i> <span>instagr.am/beeyoufashion</span></a>
                                    </p>
                                </div>
                            </div>
                            <div className="instagram-slider">
                                <div className={"slide-item"}>
                                    <a href={"#"}>
                                        <img className={"img-fluid"} src={ImageInstagram1}/>
                                    </a>
                                </div>
                                <div className={"slide-item"}>
                                    <a href={"#"}>
                                        <img className={"img-fluid"} src={ImageInstagram2}/>
                                    </a>
                                </div>
                                <div className={"slide-item"}>
                                    <a href={"#"}>
                                        <img className={"img-fluid"} src={ImageInstagram3}/>
                                    </a>
                                </div>
                                <div className={"slide-item"}>
                                    <a href={"#"}>
                                        <img className={"img-fluid"} src={ImageInstagram1}/>
                                    </a>
                                </div>
                                <div className={"slide-item"}>
                                    <a href={"#"}>
                                        <img className={"img-fluid"} src={ImageInstagram2}/>
                                    </a>
                                </div>
                                <div className={"slide-item"}>
                                    <a href={"#"}>
                                        <img className={"img-fluid"} src={ImageInstagram3}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Index;
