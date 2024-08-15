import React, { useEffect, useRef, useState } from "react";
// import Watch from "../images/watch.jpg";
import ReactStars from "react-rating-stars-component";
import Wish from "../images/wish.svg";
import { useNavigate } from "react-router-dom";


const Product = ({ prod,inputvalue,statuskeyup,featured}) => {
  const navigate = useNavigate();
  const id = prod.id;
  const detailhandler = () => {
    navigate(`/store/detail/${id}`, {
      state: {
        item: prod,
      },
    });
  };

  const [check,setCheck]=useState(true)
  const changecolor=()=>{
  console.log(prod);
}


const card=useRef()
const cardtitle=useRef();

useEffect(()=>{
   for (let i = 0; i < 15; i++) {
    const cardlayout=card.current
const cardtitlevalue=cardtitle.current.innerHTML
    if (cardtitlevalue) {
      if(inputvalue===null)
      {
        cardlayout.style.display=""

      } else {
        if(cardtitlevalue?.toUpperCase().indexOf(inputvalue?.toUpperCase()) > -1)
        {
          // console.log("exact");
          cardlayout.style.display=""
          // console.log(cardlayout);
        } else {
          cardlayout.style.display="none"
          // console.log("failed");
        }
      }
     
    }
   }},
[statuskeyup])

useEffect(()=>{
  const cardlayout=card.current
  cardlayout.style.display=""
},[featured])

return (
    <div className="m-3 mx-0 mx-sm-3" ref={card}>
      <div className="card rounded-3 position-relative" style={{display: ""}}>
        <img
          src={prod.image.url}
          className="card-img-top img-fluid p-4"
          alt="..."
          width="100%"
          height="100%"
          onClick={detailhandler}
        />
        <div className="card-body" onClick={detailhandler}>
          <h5 className="card-title m-0" ref={cardtitle}>{prod.name}</h5>
          <ReactStars
            Count={5}
            value="3"
            edit={false}
            size={24}
            activeColor="#ffd700"
          />
          <h6 className="mt-2">{prod.price.formatted_with_symbol}</h6>
        </div>
        <div className="position-absolute wish p-3 top-0 end-0">
          <i className={`wish 
        fa-regular
           fa-heart`}
            ></i>
        </div>
      </div>
    </div>
  );
};

export default Product;

