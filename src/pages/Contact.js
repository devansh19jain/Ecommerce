import React from "react";

function Contact({loader}) {
  return (
    <div className={loader ? "back" :""}>
      <div className="contact-wrapper">
        <div className="container-xxl">
          <div className="row py-5 px-sm-5 px-2">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22854.66655837726!2d75.89942105947914!3d26.934854449450757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dba21e8a1d1c9%3A0x5ab565cce4d44c2b!2sThe%20LNM%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2sin!4v1689738363994!5m2!1sen!2sin"
                width="100%"
                height="350"
                className="border-0"
                allowFullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="row mx-sm-5 mx-0 mt-2 mb-5 bg-light py-5 contact-bottom">
            <div className="col-md-6 order-2 order-md-1 px-4">
              <h4 className="mb-4 contact-text">Contact</h4>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Comment"
                ></textarea>
              </div>
              <a className="button d-inline-block mt-3">Send</a>
            </div>
            <div className="col-md-6 order-1 order-md-2 px-4 mb-3 mb-md-0">
                <h4 className="mb-4 contact-text">Get In Touch With Us</h4>
                <div className="d-flex mb-4">
                <i className="fa-solid fa-house my-auto"></i>
                <p className="ms-2 my-auto">Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="d-flex mb-4">
                <i class="fa-solid fa-phone my-auto"></i>
                <p className="ms-2 my-auto">+91 123456789</p>
                </div>
                <div className="d-flex mb-4">
                <i class="fa-solid fa-envelope my-auto"></i>
                <p className="ms-2 my-auto">company@gmail.com</p>
                </div>
                <div className="d-flex mb-4">
                <i class="fa-solid fa-info my-auto ms-1" ></i>
                <p className="ms-2 my-auto">Monday-Friday 10 AM-8 PM</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
