import React from "react";
import { Link } from "react-router-dom";

const payementhandler=(event)=>{
  event.preventDefault()
}

function Payement({ backhandler, cart }) {
    const list = cart.line_items;
  return (
    <div className="mt-4">
      <form action="">
        <h5 className="mb-3">Order Summary</h5>
        {list.map((item) => (
          <div className="row mb-4">
              <div className="col-8">
                <h6 className="fw-bold">{item.name}</h6>
                <h6 className="text-secondary">Quantity: {item.quantity}</h6>
              </div>
              <div className="col-4 text-end align-items-center">
                <h6 className="fw-bold">{item.price.formatted_with_symbol}</h6>
              </div>
            
          </div>
        ))}
        <div className="topline mb-4">
            <div className="d-flex mt-2 justify-content-between">
                <h5 className="fw-bold">Total</h5>
                <h5 className="fw-bold">{cart.subtotal.formatted_with_symbol}</h5>
            </div>
        </div>
        <div class="col-12 justify-content-between d-flex">
          <Link className="my-auto" onClick={() => backhandler()}>
            Back
          </Link>
          <button type="submit" class="button buynow" onClick={(e)=>payementhandler(e)}>
            Pay
          </button>
        </div>
      </form>
    </div>
  );
}

export default Payement;
