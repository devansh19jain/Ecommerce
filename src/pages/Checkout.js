import React, { useState } from "react";
import { Link } from "react-router-dom";
import Address from "../components/Address";
import Payement from "../components/Payement";

function Checkout({cart}) {
  let color1 = "changecolor";
  let textcolor1 = "changetextcolor";
  let color2 = "";
  let textcolor2 = "";
  const [nextpg, setNextpg] = useState(false);

  if (nextpg === true) {
    color1 = "";
    textcolor1 = "";
    color2 = "changecolor";
    textcolor2 = "changetextcolor";
  }

  const addresshandler = (event) => {
    event.preventDefault();
    setNextpg(true);
  };

  const backhandler = () => {
    setNextpg(false);
  };
  return (
    <div>
      <div className="login-wrapper">
        <div className="container-xxl">
          <div className="row justify-content-center">
            <div className="col-6 bg-light mt-5 py-3 px-4 login-box rounded-3">
              <Link
                className="login-title fs-3 text-dark text-center d-block"
                to="/"
              >
                {" "}
                SmartMart
              </Link>
              <h5 className="mt-4 text-center">Checkout</h5>
              <div className="d-flex justify-content-space">
                <div className="d-flex justify-content-center">
                  <h6
                    className={` ${color1}  intialclass my-auto text-light rounded-circle px-2 py-1`}
                  >
                    1
                  </h6>
                  <h6 className={`my-auto ms-1 fw-bold intialtextclass ${textcolor1}`}>
                    Shipping address
                  </h6>
                </div>
                <div className="linecheckout my-auto mx-auto"></div>
                <div className="d-flex justify-content-center">
                  <h6
                    className={` ${color2} my-auto text-light intialclass  rounded-circle px-2 py-1`}
                  >
                    2
                  </h6>
                  <h6 className={`ms-1 my-auto fw-bold intialtextclass ${textcolor2}`}>
                    Payement details
                  </h6>
                </div>
              </div>
              {nextpg ? (
                <Payement backhandler={backhandler} cart={cart}/>
              ) : (
                <Address addresshandler={addresshandler} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
