import cart from "../images/cart.svg";
import search from "../images/search.svg";
import userimg from "../images/user.jpg";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

const Header = ({ number, user, signedin }) => {
  let image;
  // user.image === null ? (image = userimg) : (image = user.image);

  if (user && user.image != null) {
    image = user.image;
  } else {
    image = userimg;
  }

  const [toggleclass, setToggleclass] = useState(false);
  const [keyup, SetKeyup] = useState(false);
  const [stylename, setStylename] = useState(true);
  const navigate = useNavigate();
  let val;
  // const [val,setVal]=useState("")
  const searchhandler = (event) => {
    console.log("null", event.target.value);
    SetKeyup(!keyup);
    if (event.target === null) {
      val = "";
      // setVal("")
    } else {
      val = event.target.value;
      // setVal(event.target.value)
    }

    navigate("/store", {
      state: {
        inputval: val,
        status: keyup,
      },
    });
  };

  const hamburgerhandler = () => {
    setToggleclass(!toggleclass);
  };

  const menu = useRef();

  const changedisplay = () => {
    if (window.innerWidth <= 992) {
      window.scrollY > 20 ? setStylename(true) : setStylename(false);
    } else {
      setStylename(true);
    }
  };

  window.addEventListener("scroll", changedisplay);
  window.addEventListener("resize", changedisplay);

  return (
    <>
      <nav className="navbar1 px-2 px-sm-5">
        <div className="container-fluid  px-4 pt-4 pb-3">
          <div className="row justify-content-lg-between">
            <div className="col-2 col-sm-3 col-lg-2 my-auto">
              <Link className="text-light fs-3 text" to="/">
                SmartMart
              </Link>
            </div>
            <div className="nav-item col-12 col-sm-6 mt-2 col-lg-5 col-xl-6 search my-sm-auto">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="button-addon2"
                  onKeyUp={(e) => searchhandler(e)}
                  // ref={inputvalue}
                />
                <button
                  className="btn btn-outline-light search-btn"
                  type="button"
                  id="button-addon2"
                >
                  <img
                    src={search}
                    alt=""
                    srcset=""
                    width="18px"
                    height="18px"
                  />
                </button>
              </div>
            </div>

            <div
              className={`rightnav col-5 col-xl-4 ${
                toggleclass ? "change" : ""
              } justify-content-start justify-content-lg-normal align-items-start`}
            >
              <div
                className={`hamburger-menu`}
                ref={menu}
                onClick={hamburgerhandler}
                style={stylename ? { display: "none" } : { display: "flex" }}
              >
                <i className="linex line1"></i>
                <i className="linex line2"></i>
                <i className="linex line3"></i>
              </div>
              <div className="d-flex flex-column menu-box flex-lg-row mb-2 justify-content-xl-start justify-content-end px-0 mb-0 ms-3 ms-lg-0">
                <div className="nav-item d-flex order-3 order-lg-1 px-2 ms-2 my-auto">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/wishlist"
                    // onClick={hamburgerhandler}
                    onClick={() => setToggleclass(false)}
                  >
                    <i className="fa-regular fa-heart fa-xl"></i>
                    <span className="ms-2">Wishlist</span>
                  </Link>
                </div>
                <div className="nav-item order-2 px-2 my-lg-auto mb-3">
                  <Link
                    className="nav-link active cartimg d-flex"
                    aria-current="page"
                    to="/cart"
                    // onClick={hamburgerhandler}
                    onClick={() => setToggleclass(false)}
                  >
                    <div>
                      <img
                        src={cart}
                        alt=""
                        srcset=""
                        width="30px"
                        height="30px"
                      />
                      <span className="cart-number">{number}</span>
                    </div>
                    {toggleclass ? (
                      <span className="ms-2 my-auto">Cart</span>
                    ) : null}
                  </Link>
                </div>
                <div className="nav-item order-1 order-lg-3 px-2 my-lg-auto mb-3">
                  <Link
                    onClick={hamburgerhandler}
                    className="nav-link active cartimg d-flex py-auto"
                    aria-current="page"
                    to="/login"
                  >
                    {signedin ? (
                      <>
                        <img
                          className=" rounded-circle me-2"
                          src={image}
                          alt=""
                          srcset=""
                          width="35px"
                          height="35px"
                        />
                        <div className={`user-name ${"text-start"}`}>
                          <h6 className="m-0">Hello</h6>
                          <h6 className="m-0 ">{user.name}</h6>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="pt-1">
                          <i className="fa-solid fa-user fa-xl me-2"></i>
                        </div>
                        <div className="text-start user-name">
                          <h6 className="m-0 account">Log In</h6>
                          <h6 className="m-0 account">My Account</h6>
                        </div>
                      </>
                    )}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="navigation-bar">
        <nav className="nav px-0 px-sm-5">
          <div className="container-fluid px-3">
            <div className="navbar-nav flex-row justify-content-center justify-content-sm-start py-1">
              <Link
                className="nav-link me-3 navigation-btn"
                aria-current="page"
                to="/"
                onClick={() => setToggleclass(false)}
              >
                Home
              </Link>
              <Link
                onClick={() => setToggleclass(false)}
                className="nav-link me-3 navigation-btn"
                to="/store"
                state={{
                  inputval: "",
                  status: keyup,
                }}
              >
                Our Store
              </Link>
              <Link
                onClick={() => setToggleclass(false)}
                className="nav-link me-3 navigation-btn"
                to="/blogs"
              >
                Blogs
              </Link>
              <Link
                onClick={() => setToggleclass(false)}
                className="nav-link me-3 navigation-btn"
                to="/contact"
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
