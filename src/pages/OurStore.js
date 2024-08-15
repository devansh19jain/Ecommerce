import React, { useState } from "react";
import Product from "../components/Product";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function OurStore({ products,loader }) {
  const [option, setOption] = useState("bestselling");

  switch (option) {
    case "bestselling":
      products.sort(function (a, b) {
        let x = a.name;
        let y = b.name;
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      });
      break;
    case "hightolow":
      products.sort(function (a, b) {
        return b.price.raw - a.price.raw;
      });
      break;
    case "lowtohigh":
      products.sort(function (a, b) {
        return a.price.raw - b.price.raw;
      });
      break;
    case "new":
      products.sort(function () {
        return 0.5 - Math.random();
      });
      break;
    default:
      break;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Location = useLocation();
  const statuskeyup = Location.state.status;
  const inputvalue = Location.state.inputval;



  return (
    <div className={loader ? "back" :""}>
      <div className="products-wrapprer">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3 py-5 ps-5 store-filter">
              <div className="py-3 px-3 sortby-div rounded-2">
                <h5 className="mb-3 fw-bold text-secondary-emphasis">
                  Shop By Categories
                </h5>
                <ul className="p-0">
                  <li className="mb-1 text-secondary fw-semibold">Home</li>
                  <li className="mb-1 text-secondary fw-semibold">Our Store</li>
                  <li className="mb-1 text-secondary fw-semibold">Blogs</li>
                  <li className="text-secondary fw-semibold">Contact</li>
                </ul>
              </div>
              <div className="py-3 px-3 sortby-div rounded-2 mt-4">
                <h5 className="mb-3 fw-bold text-secondary-emphasis">
                  Filter By
                </h5>
                <h6 className="mb-3 fw-bold text-secondary-emphasis">
                  Availability
                </h6>

                <div className="d-flex mb-2">
                  <input
                    className="form-check-input mb-0 me-2 mt-1"
                    type="checkbox"
                    value=""
                    aria-label="Checkbox for following text input"
                  />
                  <h6 className="my-auto text-secondary fw-semibold w-100">
                    In stock
                  </h6>
                </div>
                <div className="d-flex">
                  <input
                    className="form-check-input mb-0 me-2 mt-1"
                    type="checkbox"
                    value=""
                    aria-label="Checkbox for following text input"
                  />
                  <h6 className="w-100 my-auto text-secondary fw-semibold">
                    Out of stock
                  </h6>
                </div>

                <h6 className="mb-3 mt-4 fw-bold text-secondary-emphasis">
                  Price
                </h6>

                <div className="d-flex">
                  <input
                    type="text"
                    className="form-control me-1"
                    placeholder="from"
                    aria-label="Text input with checkbox"
                  />
                  <input
                    type="text"
                    placeholder="to"
                    className="ms-1 form-control"
                    aria-label="Text input with checkbox"
                  />
                </div>

                <h6 className="mb-2 mt-4 fw-bold text-secondary-emphasis">
                  Size
                </h6>
                <div className="d-flex mb-1">
                  <input
                    className="form-check-input mb-0 me-2 mt-1"
                    type="checkbox"
                    value=""
                    aria-label="Checkbox for following text input"
                  />
                  <h6 className="w-100 my-auto text-secondary fw-semibold">
                    S
                  </h6>
                </div>
                <div className="d-flex mb-1">
                  <input
                    className="form-check-input mb-0 me-2 mt-1"
                    type="checkbox"
                    value=""
                    aria-label="Checkbox for following text input"
                  />
                  <h6 className="w-100 my-auto text-secondary fw-semibold">
                    M
                  </h6>
                </div>
                <div className="d-flex mb-1">
                  <input
                    className="form-check-input mb-0 me-2 mt-1"
                    type="checkbox"
                    value=""
                    aria-label="Checkbox for following text input"
                  />
                  <h6 className="w-100 my-auto text-secondary fw-semibold">
                    L
                  </h6>
                </div>
                <div className="d-flex mb-1">
                  <input
                    className="form-check-input mb-0 me-2 mt-1"
                    type="checkbox"
                    value=""
                    aria-label="Checkbox for following text input"
                  />
                  <h6 className="w-100 my-auto text-secondary fw-semibold">
                    XL
                  </h6>
                </div>
                <div className="d-flex mb-1">
                  <input
                    className="form-check-input mb-0 me-2 mt-1"
                    type="checkbox"
                    value=""
                    aria-label="Checkbox for following text input"
                  />
                  <h6 className="w-100 my-auto text-secondary fw-semibold">
                    XXL
                  </h6>
                </div>
              </div>
              <div className="py-3 px-3 mt-4 sortby-div rounded-2">
                <h6 className="mb-3 fw-bold text-secondary-emphasis w-100">
                  Product Tag
                </h6>
                <div className="d-dlex flex-wrap">
                  <span className="m-0 mb-1 d-block text-secondary fw-semibold">
                    Headphones
                  </span>

                  <span className="m-0 mb-1 d-block text-secondary fw-semibold">
                    Leptop
                  </span>

                  <span className="m-0 mb-1 d-block text-secondary fw-semibold">
                    Mobile
                  </span>

                  <span className="m-0 mb-1 d-block text-secondary fw-semibold">
                    Oppo
                  </span>

                  <span className="m-0 mb-1 d-block text-secondary fw-semibold">
                    Speaker
                  </span>

                  <span className="m-0 mb-1 d-block text-secondary fw-semibold">
                    Tablet
                  </span>

                  <span className="m-0 mb-1 d-block text-secondary fw-semibold">
                    Vivo
                  </span>

                  <span className="m-0 mb-1 d-block text-secondary fw-semibold">
                    Wire
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-9 col-12 p-5 ps-0 ps-xl-5 pe-sm-5 pe-0 ">
              <div className="d-flex sortby-div rounded-2 px-3 py-1 ms-sm-3 me-sm-5 mx-auto w-100 ">
                <h6 className="my-auto">Sort By:</h6>
                <select
                  className="form-select "
                  aria-label="Default select example"
                  onClick={(e) => setOption(e.target.value)}
                >
                  <option selected value="bestselling">
                    Best selling
                  </option>
                  <option value="lowtohigh">Low to High</option>
                  <option value="hightolow">High to Low</option>
                  <option value="new">Newest Arrivals</option>
                </select>
              </div>

              <div className="container-xxl">
                {/* <div className=""> */}
                <div className="d-flex flex-wrap justify-content-center justify-content-sm-start">
                  {products.map((product) => (
                
                    <div className="">
                      <Product
                        
                        prod={product}
                        inputvalue={inputvalue}
                        statuskeyup={statuskeyup}
                      />
                    </div>
                  ))}
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurStore;
