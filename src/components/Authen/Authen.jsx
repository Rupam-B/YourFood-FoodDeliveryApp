import React from 'react'
import './AuthenStyle.css'

const Authen = () => {
  return (
    <>
     <div className="containerrr">
     {/* <div className='overlay'></div> */}
      <div className="form-box">
        <h2>Welcome To YourFood</h2>
        <h1 id="title-field">Sign Up</h1>
        <form className='auth-form'>
          <div className="input-group">
            <div className="form-inputs auth-form-inputs" id="name-input-field">
              <i className="fa-solid fa-user"></i>
              <input type="text" placeholder="User Name" id="enter-user" />
            </div>
            <div className="form-inputs auth-form-inputs">
              <i className="fa-solid fa-envelope"></i>
              <input type="email" placeholder="Email" id="enter-email" />
            </div>
            <div className="form-inputs auth-form-inputs">
              <i className="fa-solid fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                id="enter-password"
              />
              <i
                className="fa-solid fa-eye"
                onclick="togglePassword()"
                id="span"
              ></i>
            </div>
            <p>Forgot Password ? <a href="/">Click here</a></p>
          </div>
          <div className="btn-field">
            <button type="button" onclick="signuphere()" id="Sign-up-btn">
              Sign Up
            </button>
            <button type="button" className="disabled" id="Sign-in-btn">
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Authen