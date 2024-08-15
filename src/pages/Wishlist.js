import React from "react";
import ReactStars from "react-rating-stars-component";

function Wishlist({ wishlistitems }) {
  console.log(wishlistitems);
  return (
    <div className="wishlist-wrapper">
      <div className="row py-5 px-5">
      {/* <h3 className="mt-3 ms-3 mb-0">Shopping Cart</h3> */}
        <div className="col-12 d-flex flex-wrap justify-content-start px-5">
            {wishlistitems?.map((prod) => (
              <div>
                <div className="m-3">
                  <div className="card rounded-3 position-relative">
                    <img
                      src={prod.image.url}
                      className="card-img-top img-fluid p-4"
                      alt="..."
                      width="100%"
                      height="100%"
                      //   onClick={detailhandler}
                    />
                    <div className="card-body">
                      <h5 className="card-title m-0">{prod.name}</h5>
                      <ReactStars
                        Count={5}
                        value="3"
                        edit={false}
                        size={24}
                        activeColor="#ffd700"
                      />
                      <h6 className="mt-2">
                        {prod.price.formatted_with_symbol}
                      </h6>
                    </div>
                    <div className="position-absolute wish p-3 top-0 end-0"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}

export default Wishlist;
