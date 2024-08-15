import React from "react";
import brand1 from "../images/brand-01.png";
import brand2 from "../images/brand-02.png";
import brand3 from "../images/brand-03.png";
import brand4 from "../images/brand-04.png";
import brand5 from "../images/brand-05.png";
import brand6 from "../images/brand-06.png";
import brand7 from "../images/brand-07.png";
import brand8 from "../images/brand-08.png";
import Marquee from "react-fast-marquee";
function Marque() {
  return (
    <div>
      <div className="home-wrapper-3 pt-3  pb-5">
        <div className="container-xxl bg-white " >
          <div className="row">
            <div className="col-12 p-0">
              <div className="py-2">
                <Marquee>
                  <div className="w-25 mx-5">
                    <img src={brand1} alt="" srcset="" />
                  </div>
                  <div className="w-25 mx-5">
                    <img src={brand2} alt="" srcset="" />
                  </div>
                  <div className="w-25 mx-5">
                    <img src={brand3} alt="" srcset="" />
                  </div>
                  <div className="w-25 mx-5">
                    <img src={brand4} alt="" srcset="" />
                  </div>
                  <div className="w-25 mx-5">
                    <img src={brand5} alt="" srcset="" />
                  </div>
                  <div className="w-25 mx-5">
                    <img src={brand6} alt="" srcset="" />
                  </div>
                  <div className="w-25 mx-5">
                    <img src={brand7} alt="" srcset="" />
                  </div>
                  <div className="w-25 mx-5">
                    <img src={brand8} alt="" srcset="" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marque;
