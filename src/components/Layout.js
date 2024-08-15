import React from 'react'
import Header from "./header";
import Footer from "./footer";
import { Outlet } from 'react-router-dom'

// import { useEffect } from 'react';
// import { useContext } from 'react';
// import noteContext from './Context/noteContext';

function Layout({count,user,signedin}) {
    // const context=useContext(noteContext)

    // useEffect(()=>{
    //     // fetchProducts();
    //     context.fetchCart();
    //     console.log("time");
    //     console.log("cart",context.cart);
    //     },[]);
  return (
    <div>
      <Header number={count} user={user} signedin={signedin}/>
      <Outlet />
      <Footer/>
    </div>
  )
}

export default Layout
