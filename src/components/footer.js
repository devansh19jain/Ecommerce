import React from "react";
import newletter from "../images/newsletter.png";

function footer() {
  return (
    <div>
      <footer className="footer-section-1">
        <div className="container-xxl px-5 pt-4 pb-2">
          <div className="row mx-xl-5">
            <div className="col-sm-5 d-flex mt-2 mb-2 mb-sm-0">
              <img
                src={newletter}
                alt=""
                srcset=""
                width="25px"
                height="25px"
              />
              <h4 className="text-white newsletter-text">
                Sign Up For Newsletter
              </h4>
            </div>
            <div className="col-sm-7">
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  class="btn btn-outline-light button-1"
                  type="button"
                  id="button-addon2"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer-section-2">
        <div className="container-xxl px-0 px-sm-5">
          <div className="row mx-xl-5 mx-md-0 mx-2 pt-3">
            <div className="col-6 col-md-3 mb-4 mt-3 my-md-0 text-white  text-md-start">
              <h4 className="mb-2 mb-md-4">Contact Us</h4>
              <p className="mb-2 mb-md-3">
                Jaipur
              </p>
              <p className="mb-2 mb-md-3">+91 123456789</p>
              <p className="textoverflow mb-2 mb-md-3">abc@gmail.com</p>
              <div className="d-flex mt-4 align-items-center  justify-content-md-start">
                <i className="fa-brands fa-linkedin fa-xl me-4"></i>
                <i className="fa-brands fa-twitter fa-xl me-4"></i>
                <i className="fa-brands fa-instagram fa-xl"></i>
              </div>
            </div>

            <div className="col-6 col-md-3 mb-4 mt-3 my-md-0 text-white  text-md-start">
              <h4 className="mb-2 mb-md-4">Information</h4>
              <p className="mb-2 mb-md-3">Privacy Policy</p>
              <p className="mb-2 mb-md-3">Refund Policy</p>
              <p className="mb-2 mb-md-3">Shipping Policy</p>
              <p className="mb-2 mb-md-3">Terms & Conditions</p>
              <p className="mb-2 mb-md-3">Blogs</p>
            </div>

            <div className="col-6 col-md-3 mb-3 mt-3 my-md-0 text-white text-md-start">
              <h4 className="mb-2 mb-md-4">Account</h4>
              <p className="mb-2 mb-md-3">About</p>
              <p className="mb-2 mb-md-3">FAQ</p>
              <p className="mb-2 mb-md-3">Contact</p>
            </div>

            <div className="col-6 col-md-3 mb-3 mt-3 my-md-0 text-white  text-md-start">
              <h4 className="mb-2 mb-md-4">Quick Links</h4>
              <p className="mb-2 mb-md-3">Laptops</p>
              <p className="mb-2 mb-md-3">Headphones</p>
              <p className="mb-2 mb-md-3">Tablets</p>
              <p className="mb-2 mb-md-3">Watch</p>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer-section-3">
        <div className="container-xxl pt-2">
          <div className="row text-white text-center">
            <p>Powered By abc Corner</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default footer;
