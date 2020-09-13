import React from 'react'
import './login.scss'

const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <h1>Login to your NASIMS Account</h1>
        <div className="row justify-content-between align-items-center">
          <div className="col-12 col-md-6 login__hero">
            <span className="my-2 d-block">
              If you don't have an acount, you can <br/>
              <a href="#register">Register here!</a>
            </span>
            <div className="login__wrapper">
              <div className="login__img"></div>
            </div>
          </div>
          <div className="col-12 col-md-6 login__form">
            <form>
              <div className="form-group my-4">
                <input type="email" className="form-control form-control-lg" id="email" placeholder="Enter Email Address" />
              </div>
              {/* <div className="form-group my-4">
                <select id="inputState" className="form-control form-control-lg">
                  <option value="" selected disabled>Select User Role</option>
                  <option>Beneficiary</option>
                  <option>Admin</option>
                  <option>User</option>
                </select>
              </div> */}
              <div className="form-group my-4">
                <input type="password" className="form-control form-control-lg" id="password" placeholder="Enter Password" />
              </div>
              <div className="row justify-content-between mx-0">
                <div className="form-group">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="remember" />
                    <label className="form-check-label" for="remember">
                      Keep me logged in
                    </label>
                  </div>
                </div>
                <a href="#recover">Recover Password</a>
              </div>
              <button type="submit" class="btn btn--primary w-100">Proceed</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login