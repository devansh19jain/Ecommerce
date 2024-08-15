import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import OurStore from "./pages/OurStore";
import Contact from "./pages/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { commerce } from "./components/commerce";
import Layout from "./components/Layout";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Blog from "./pages/Blog"

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  deleteUser,
} from "firebase/auth";
import { app } from "./components/Firebase";
import ResetPassword from "./pages/ResetPassword";
import Checkout from "./pages/Checkout";

const getlocalitems = () => {
  let detaillist = JSON.parse(localStorage.getItem("detail"));
  // console.log("getfunction", detaillist);
  if (detaillist == { _id: "", email: "", image: "", name: "" }) {
    detaillist = { _id: null, email: null, image: null, name: null };
    return detaillist;
  } else {
    return detaillist;
  }
};

// const getwislist=()=>{
//   let list = JSON.parse(localStorage.getItem("wishlist"));
//   if(list===null) return []
//   return list
// }

const getlocalsiginstatus = () => {
  let status = JSON.parse(localStorage.getItem("sigin"));
  // console.log("status", status);
  if (status === null) return false;
  else return status;
};

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [totalitems, setTotalItems] = useState(0);
  const [signedin, setSignedin] = useState(getlocalsiginstatus());
  const [signuped, setSignuped] = useState(false);
  const [forgetpass, setForgetpass] = useState(false);
  const [userdetail, setUserdetail] = useState(getlocalitems());
  const [loader,setLoader]=useState(true)
  const [addcartloader,setAddcartloader]=useState(false)
  const [updatecartloader,setUpdatecartloader]=useState(false)
  const [removecartloader,setRemoveloader]=useState(false)
  const [deletecartloader,setDeletecartloader]=useState(false)
  const FeaturedProducts = products.slice(0, 4);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
    setLoader(false)
  };

  const fetchCart = async () => {
    const cartitems = await commerce.cart.retrieve();
    setCart(cartitems);
  };

  const handleaddtocart = async (productid, quantity) => {
    setAddcartloader(true)
    console.log("hello");
    const item = await commerce.cart.add(productid, quantity);
    setCart(item);
    setAddcartloader(false)
  };

  const updateitemhandler = async (productid, quantity) => {
    setUpdatecartloader(true)
    const item = await commerce.cart.update(productid, { quantity });
    setCart(item);
    setUpdatecartloader(false)
  };

  const removeitemhandler = async (productid) => {
    setUpdatecartloader(true)
    const item = await commerce.cart.remove(productid);
    setCart(item);
    setUpdatecartloader(false)
  };

  const emptycarthandler = async () => {
    setUpdatecartloader(true)
    const item = await commerce.cart.empty();
    setCart(item);
    setUpdatecartloader(false)

  };

  const googlesigninhandler = (e) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUserdetail({
          _id: user.uid,
          name: user.displayName,
          image: user.photoURL,
          email: user.email,
        });

        setSignedin(true);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signuphandler = (event) => {
    event.preventDefault();
    // console.log(event.target.email.value);
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmpassword = event.target.confirmpassword.value;
    if (password !== confirmpassword) {
      alert("Password dosn't matched");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
        sendEmailVerification(auth.currentUser)
          .then((data) => {
            console.log(data);
            alert(
              "Registered Successfully. A link has been sent to you on email, kindly first verify it and login to continue."
            );
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        alert(error.message);
      });
    setSignuped(true);
    console.log("signup", userdetail);
  };

  const signinhandler = (event) => {
    event.preventDefault();
    const displayName = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (!user.emailVerified) {
          alert("Your email is not verified yet");
          event.target.password.value = "";
          return;
        }
        setUserdetail({
          name: displayName,
          _id: user.uid,
          image: user.photoURL,
          email: user.email,
        });
        setSignedin(true);
      })
      .catch((error) => {
        alert(error.message);
        event.target.password.value = "";
        return;
      });
  };

  const signouthandler = () => {
    deleteUser(auth.currentUser)
      .then(() => {})
      .catch((error) => {});
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setSignedin(false);
        setUserdetail({
          _id: null,
          name: null,
          image: null,
          email: null,
        });
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const resetPasswordhandler = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Password reset link has been sent to you on email");
        setForgetpass(true);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  useEffect(() => {
    setTotalItems(cart.total_items);
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("detail", JSON.stringify(userdetail));
  }, [userdetail]);

  useEffect(() => {
    localStorage.setItem("sigin", JSON.stringify(signedin));
  }, [signedin]);




  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                count={totalitems}
                user={userdetail}
                signedin={signedin}
              />
            }
          >
            <Route
              index
              element={<Home FeaturedProducts={FeaturedProducts} loader={loader}/>}
            />
            <Route
              path="/store"
              element={
                <OurStore
                  // status={selected}
                  products={products}
                  loader={loader}
                />
              }
            />
            <Route path="/contact" element={<Contact loader={loader}/>} />
            <Route
              path="/store/detail/:id"
              element={<Detail addtocart={handleaddtocart} addcartloader={addcartloader}/>}
            />
            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  remove={removeitemhandler}
                  update={updateitemhandler}
                  emptycart={emptycarthandler}
                  signedin={signedin}
                  updatecartloader={updatecartloader}
                />
              }
            />
            <Route
              path="/wishlist"
              element={<Wishlist />}
            />
            <Route path="/blogs" element={<Blog/>} />
          </Route>
          <Route
            path="/login"
            element={
              <Login
                googlesigninhandler={googlesigninhandler}
                signedin={signedin}
                user={userdetail}
                signout={signouthandler}
                signinhandler={signinhandler}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <Signup signuped={signuped} signuphandler={signuphandler} />
            }
          />
          <Route
            path="/resetpassword"
            element={
              <ResetPassword
                resetPasswordhandler={resetPasswordhandler}
                status={forgetpass}
              />
            }
          />
          <Route path="/checkout" element={<Checkout cart={cart} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
