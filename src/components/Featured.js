import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";

function Featured({ FeaturedProducts }) {
  const [featdisplay,setfeatdisplay]=useState(false)
  FeaturedProducts.sort(function () {
    return 0.5 - Math.random();
  });

  useEffect(()=>{
    setfeatdisplay(!featdisplay);
  },[])
  return (
    <div className="home-wrapper-4 pb-5 pt-1">
      <div className="comtainer-xxl">
        <div className="row mx-2">
          <div className="col-12 featured-title d-flex justify-content-between px-0">
            <h5 className="mb-0">Featured Collection</h5>
            <Link to="/store"  state= {{
        inputval: "",
        status: ""}
      }>Show More</Link>
          </div>
        </div>
   <div className="container-xxl">
   <div className="row">
          {/* <div className="col-12 d-flex px-0 justify-content-between"> */}
            {FeaturedProducts.map((product) => (
              <div className="col-xl-3 col-6 featured-product  justify-content-center d-flex">
                <Product featured={featdisplay} prod={product} />
              </div>
            ))}
          {/* </div> */}
        </div>
   </div>
      </div>
    </div>
  );
}

export default Featured;
