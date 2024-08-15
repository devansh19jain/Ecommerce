import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Wish from "../images/wish.svg";
import ReactStars from "react-rating-stars-component";
import { useEffect} from "react";
import ReactLoading from "react-loading";
import { Link } from "react-router-dom";


function Detail({addtocart,addcartloader}) {
    const [loader,setloader]=useState(true);
    const [quantity,setQantity]=useState(1)
    setTimeout(()=>{
        setloader(false);
    },1500);
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  const Location = useLocation();
  const product = Location.state.item;

  const quantutyhandler=(event)=>{
    setQantity(event.target.value)
}

  return (    
    <div className="detail-product-wrapper p-5 px-2 px-xl-5">
        { loader ? (
            <div className="d-flex justify-content-center align-items-center loader">
              <ReactLoading
              type="spinningBubbles"
              color="#232f3e"
              height={100}
              width={50}
          />
          </div>
        ) : (
            <div className={addcartloader ? "back" :""}>
              <div className="conatiner-xxl mx-3 detail rounded-3">
            <div className="row bg-light">
              <div className="col-lg-5 p-3 rounded-3 text-center">
                <img src={product.image.url} alt="" className="img-fluid" />
              </div>
              <div className="col-lg-7 py-5 px-0 px-md-5">
                <h2 className="mb-3 fw-bold">{product.name}</h2>
                <ReactStars
                  Count={5}
                  value="3"
                  edit={false}
                  size={24}
                  activeColor="#ffd700"
                />
                <h3 className="mb-4 mt-2">{product.price.formatted_with_symbol}</h3>
    
                <div className="mb-3 row">
                  <label className="quantity  align-self-center col-sm-2 col-6" for="amount">
                    Quantity:
                  </label>
               
                 <div className="col-sm-1 col-6 d-flex align-items-center px-0 px-sm-auto">
                 <select className=" selector" name="quantity" id="cars" onClick={quantutyhandler}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                 </div>
                 
                 <div className="d-flex col-sm-8 col-12 mt-3 mt-sm-0 justify-content-sm-around">
                    <a className="button me-3 me-sm-0" onClick={()=>addtocart(product.id,quantity)}>Add to Cart</a>
                    {/* <a className="button buynow">Buy Now</a> */}
                    <Link to="/cart" onClick={()=>addtocart(product.id,quantity)} className="button buynow">Buy Now</Link>
                  </div>
                </div>
    
                {/* <div className="mb-3 d-flex">
                  <label className="quantity me-2 align-self-center" for="amount">
                    Quantity:
                  </label>
                  <select className="my-2" name="quantity" id="cars" onClick={quantutyhandler}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                 
                 <div className="d-flex ms-5 ">
                    <a className="button me-4" onClick={()=>addtocart(product.id,quantity)}>Add to Cart</a>
                    {/* <a className="button buynow">Buy Now</a> */}
                    {/* <Link to="/cart" onClick={()=>addtocart(product.id,quantity)} className="button buynow">Buy Now</Link> */}
                  {/* </div>
                </div>/} */}
                <div className="d-flex mb-4">
                  <img src={Wish} alt="" srcset="" className="wish me-2" />
                  <p className="m-0 mb-1">Add to Wishlist</p>
                </div>
    
                <div className="">
                  <h5 className="fw-semibold">About this item</h5>
                  <p dangerouslySetInnerHTML={{ __html: product.description }} />
                </div>
              </div>
            </div>
          </div>
            </div>
        ) }
     
    </div>
  );
}

export default Detail;
