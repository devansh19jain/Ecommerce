import React from "react";
import { Link, useNavigate } from "react-router-dom";
import userimg from "../images/user.jpg"

function Login({googlesigninhandler,signedin,user,signout,signinhandler}) {
  
  const navigate=useNavigate();
  if(signedin){
    navigate('/')
  }

  let image;
  // user.image===null ? image=userimg : image=user.image
  if(user && user.image !=null){
    image=user.image;
  } else {
    image=userimg
  }
 


  return (
    <div className="login-wrapper">
      <div className="container-xxl">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-sm-7 col-12 bg-light mt-5 py-3 px-4 login-box rounded-3">
            <Link
              className="login-title fs-3 text-dark text-center d-block"
              to="/"
            >
              SmartMart
            </Link>
            {signedin ? (
            <>
              
              <div className="ms-auto mt-4 d-flex justify-content-between">
              <h4 className="my-auto">My Profile</h4>
                <h6 className="text-danger logout my-auto" style={{width:"60px"}} onClick={()=>signout()}>Log Out</h6>
                </div>
              <div className="d-flex mt-3">
                <img src={image} className="rounded-circle" alt="" width="50px" height="50px"/>
                <div className="ms-2 ms-sm-3">
                  <h5 className="m-0">{user.name}</h5>
                  <h6 className="m-0">{user.email}</h6>
                </div>
               
              </div>
            </>
            ) : (
              <>
              <h4 className="mt-4">Sign In</h4>
            <form onSubmit={(e)=>signinhandler(e)}>
            <div class="mb-1">
                  <label for="exampleInputPassword1" class="form-label">
                    Display Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    class="form-control"
                    id="name"
                    required
                  />
                </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                name="email"
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-1">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                name="password"
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  required
                />
              </div>
              <div class="mb-3">
                <Link className="" to="/resetpassword">Forget Password?</Link>
              </div>
              <button  className="button buynow py-2 w-100 d-block mt-4 text-center">
                Sign In
              </button>
            </form>
            <div className="text-center mt-1">
                <span>Don't have an account?<Link to="/signup"> Sign-Up</Link></span>
            </div>
            <div className="line"></div>
            <div onClick={()=>googlesigninhandler()} className="google-signin py-2 px-3 button d-flex mt-3">
                <i class="fa-brands fa-google fa-lg"></i>
                <span className="d-block w-100 text-center">Login with Google</span>
            </div>
              </>
            ) }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
