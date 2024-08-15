import React from "react";
import { Link, useNavigate } from "react-router-dom";

function ResetPassword({resetPasswordhandler,status}) {
    const navigate=useNavigate();
    if(status===true)
    navigate('/login');
  return (
    <div>
      <div className="login-wrapper">
        <div className="container-xxl">
          <div className="row justify-content-center">
            <div className="col-4 bg-light mt-5 py-3 px-4 login-box rounded-3">
              <Link
                className="login-title fs-3 text-dark text-center d-block"
                to="/"
              >
                Amazon
              </Link>
              <h4 className="mt-4">Reset Password</h4>
              <form onSubmit={(e)=>resetPasswordhandler(e)}>
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
                </div>

                <button
                  type="submit"
                  className="button buynow py-2 w-100 d-block mt-4 text-center"
                >
                  Send Link
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
