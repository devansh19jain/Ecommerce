import React from "react";
import banner1 from "../images/main-banner-1.jpg";
import banner2 from "../images/main-banner.jpg";
import banner3 from "../images/banner3.jpeg";
import banner4 from "../images/banner5.jpg";
import catbanner1 from "../images/catbanner-01.jpg";
import catbanner2 from "../images/catbanner-02.jpg";
import catbanner3 from "../images/catbanner-03.jpg";
import catbanner4 from "../images/catbanner-04.jpg";
import service1 from "../images/service.png"
import service2 from "../images/service-03.png"
import service3 from "../images/service-04.png"
import service4 from "../images/service-05.png"

const Banner = () => {
  return (
    <>
      <div className="home-wrapper-1 p-5 px-0 px-md-5 pt-0 pt-md-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 col-md-6 px-0">
              <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active main-banner position-relative p-lg-3 p-md-0 p-3">
                    <img
                      src={banner1}
                      className="d-block w-100 img-fluid rounded-3"
                      alt="..."
                    />
                    <div className="position-absolute main-banner-content">
                      <h4>SUPERCHARGED FOR PROS.</h4>
                      <h5>iPad $13+ Pro.</h5>
                      <p>From $999 or $41?mo</p>
                      <a className="button">BUY NOW</a>
                    </div>
                  </div>
                  <div className="carousel-item main-banner position-relative p-3">
                    <img
                      src={banner2}
                      className="d-block w-100 img-fluid rounded-3"
                      alt="..."
                    />
                    <div className="position-absolute main-banner-content">
                      <h4>SUPERCHARGED FOR PROS.</h4>
                      <h5>iPad $13+ Pro.</h5>
                      <p>From $999 or $41?mo</p>
                      <a className="button">BUY NOW</a>
                    </div>
                  </div>
                  <div className="carousel-item main-banner position-relative p-3">
                    <img
                      src={banner4}
                      className="d-block w-100 img-fluid rounded-3"
                      alt="..."
                    />
                    <div className="position-absolute main-banner-content">
                      <h4>SUPERCHARGED FOR PROS.</h4>
                      <h5>iPad $13+ Pro.</h5>
                      <p>From $999 or $41?mo</p>
                      <a className="button">BUY NOW</a>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-centre">
                <div className="small-banner position-relative p-1 p-lg-3">
                  <img
                    src={catbanner1}
                    alt=""
                    srcset=""
                    className="img-fluid rounded-3"
                  />
                  <div className="position-absolute small-banner-content">
                    <h4 >BEST SALE</h4>
                    <h5>Laptop Max</h5>
                    <p>
                      From $1699 <br /> or $64/mo
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative p-1 p-lg-3">
                  <img
                    src={catbanner2}
                    alt=""
                    srcset=""
                    className="img-fluid rounded-3"
                  />
                  <div className="position-absolute small-banner-content">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Buy iPad Air</h5>
                    <p>
                      From $599 <br /> or $12/mo
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative p-1 p-lg-3">
                  <img
                    src={catbanner3}
                    alt=""
                    srcset=""
                    className="img-fluid rounded-3"
                  />
                  <div className="position-absolute small-banner-content">
                    <h4>15% OFF</h4>
                    <h5>Smartwatch 7</h5>
                    <p>
                      Shop the latest brand
                      <br />
                      styles and color
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative p-1 p-lg-3">
                  <img
                    src={catbanner4}
                    alt=""
                    srcset=""
                    className="img-fluid rounded-3"
                  />
                  <div className="position-absolute small-banner-content">
                    <h4>FREE ENGRAVING</h4>
                    <h5>AirPods Max</h5>
                    <p>60mm drivers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-wrapper-2 px-md-5" >
        <div className="container-xxl">
            <div className="row px-md-4">
                <div className="col-6 col-lg-3 d-flex mb-4 mb-lg-0  px-2">
                    <img src={service1} className="my-1" alt="" srcset="" width="40px" height="40px"/>
                    <div className="ps-3">
                        <h5 className="m-0 fw-bold">Free Shipping</h5>
                        <p>For all orders above $100</p>
                    </div>
                </div>
                <div className="col-6 col-lg-3 d-flex mb-4 mb-lg-0  px-2">
                    <img src={service2} alt="" className="my-1" srcset="" width="40px" height="40px"/>
                    <div className="ps-3">
                        <h5 className="m-0 fw-bold">Support 24/7</h5>
                        <p>Shop with an expert</p>
                    </div>
                </div>
                <div className="col-6 col-lg-3 d-flex px-2">
                    <img src={service3} alt="" className="my-1" srcset="" width="40px" height="40px"/>
                    <div className="ps-3">
                        <h5 className="m-0 fw-bold">Affordable Price</h5>
                        <p>Get Factory direct price</p>
                    </div>
                </div>
                <div className="col-6 col-lg-3 d-flex  px-2 ">
                    <img src={service4} alt="" className="my-1" srcset="" width="40px" height="40px"/>
                    <div className="ps-3">
                        <h5 className="m-0 fw-bold">Secure Payments</h5>
                        <p>100% Protected Payments</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
