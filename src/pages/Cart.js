import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Cart({ cart, update, remove, emptycart, signedin, updatecartloader }) {
  const list = cart.line_items;
  const [togo, setTogo] = useState("");
  console.log(cart);
  const navigate = useNavigate();

  const isEmpty = list.length;

  const checkstatus = () => {
    if (!signedin) {
      navigate("/login");
      alert("First login your account");
    } else {
      navigate("/checkout");
    }
  };

  // const [isEmpty , setIsEmpty] = useState(list.length)

  return (
    <div className={updatecartloader ? "back" : ""}>
      <div className="cart-wrapper">
        <div className="container-xxl px-0 px-sm-3">
          <div className="row py-5 px-0 px-sm-0 mx-sm-3 mx-md-0 mx-0 justify-content-around">
            <div className="col-md-8 bg-light cart-products me-0 me-lg-4">
              <div className="shopping-title-wrapper">
                <h3 className="mt-3 ms-3 mb-0">Shopping Cart</h3>
                {isEmpty === 0 ? (
                  <div></div>
                ) : (
                  <h6 className="ms-3 empty" onClick={() => emptycart()}>
                    Empty Cart
                  </h6>
                )}
              </div>
              {isEmpty === 0 ? (
                <div className="ms-3 mt-3 no-items">
                  <h6>
                    You have no items in your shopping cart,{" "}
                    <Link
                      to="/store"
                      state={{
                        inputval: "",
                        status: "",
                      }}
                    >
                      start adding some.
                    </Link>
                  </h6>
                </div>
              ) : (
                list?.map((item) => (
                  <div className="d-flex cart-detail mb-3">
                    <div className="w-25 py-3 px-0 px-sm-3">
                      <img
                        src={item.image.url}
                        alt=""
                        srcset=""
                        className="img-cart"
                      />
                    </div>
                    <div className="w-75 p-3">
                      <h5 className="mt-4 mb-2 cart-name text">{item.name}</h5>
                      <h6 className="m-0 cart-price mb-3">
                        {item.price.formatted_with_symbol}
                      </h6>
                      <div className="d-flex me-2 quantity-handler">
                        <h6 className=" me-3 quantity-cart my-auto">
                          Quantity:
                        </h6>
                        <ul className="pagination m-0">
                          <li className="page-item">
                            <a
                              className="page-link p-0 px-2"
                              onClick={() => update(item.id, item.quantity - 1)}
                            >
                              -
                            </a>
                          </li>
                          <li className="page-item px-1">
                            <span className="px-2" href="#">
                              {item.quantity}
                            </span>
                          </li>
                          <li className="page-item">
                            <a
                              className="page-link py-0 px-2"
                              onClick={() => update(item.id, item.quantity + 1)}
                            >
                              +
                            </a>
                          </li>
                        </ul>
                        <h6
                          className="ms-auto my-auto text-danger"
                          onClick={() => remove(item.id)}
                        >
                          Delete
                        </h6>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="col-md-3 cart-products mt-4 mt-md-0 ms-lg-4 ms-0 px-3 py-4 cart-products-botom">
              <h5>
                Total Items:{" "}
                <span className="text-dark">{cart.total_items}</span>
              </h5>
              <h5>
                Subtotal:{" "}
                <span className="text-dark">
                  {cart.subtotal.formatted_with_symbol}
                </span>
              </h5>
              {/* <button className="button buynow py-2 w-100 d-block mt-4 text-center"><Link to="/checkout">Proceed to Buy</Link></button> */}
              <button
                onClick={() => checkstatus()}
                className="button buynow py-2 w-100 d-block mt-4 text-center"
              >
                Proceed to Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
