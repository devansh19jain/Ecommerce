import React from "react";

function Blog() {
  return (
    <div className="cart-wrapper">
      <div className="container-xxl px-0 px-sm-3">
        <div className="row py-5 px-0 px-sm-0 mx-sm-3 mx-md-0 mx-0 justify-content-around">
          <div className="col-md-8 bg-light cart-products me-0 me-lg-4">
            <div className="shopping-title-wrapper">
              <div className="ms-3 mt-3 no-items text-center p-5">
                <h4>Currenty there are no blogs to show</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
