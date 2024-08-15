import React from 'react'
import Banner from "../components/Banner";
import Marque from '../components/Marquee';
import Featured from '../components/Featured';
import ReactLoading from "react-loading";


const Home = ({FeaturedProducts,loader}) => {
  console.log("home",);
  return (

      <div className={loader ? "back" :""}>
         <div >
         <Banner />
      <Featured FeaturedProducts={FeaturedProducts}/>
      <Marque/>
         </div>
      </div>
      
    
  )
}

export default Home
