import React, { useState } from 'react'
import './AuthenStyle.css'
import { useCartContext } from '../../state/context/cart_context'

const Authen = () => {

  const cartContext=useCartContext();

  const [logIn, SetLogIn] = useState(false)
  const [showpswd, SetShowpswd] = useState(false)
  const [newname, SetNewname] = useState("")
  const [email, SetEmail] = useState("")
  const [password, SetPassword] = useState("")
  



  const SignUpHere = () => {
    SetLogIn(false);
    const sendArr = { newname, email, password };
    cartContext.SignUpHere(sendArr);

    SetPassword('')
    SetNewname('')
    SetEmail('')
    alert('Signed In succesfully')

  };
  const LogInHere = () => {
    SetLogIn(true)
  
  }
  const togglePassword = () => {

    SetShowpswd(!showpswd)

  }
  return (
    <>
      <div className="containerrr">
        <div className='overlay'></div>
        <div className="form-box">
          <h2>Welcome To YourFood</h2>
          <h1 id="title-field">Sign Up</h1>
          <form className='auth-form'>
            <div className="input-group">
              {logIn ? '' : <div className="form-inputs auth-form-inputs" id="name-input-field">
                <i className="fa-solid fa-user"></i>
                <input value={newname} onChange={(e)=>SetNewname(e.target.value)} type="text" placeholder="User Name" id="enter-user" />
              </div>}
              <div className="form-inputs auth-form-inputs">
                <i className="fa-solid fa-envelope"></i>
                <input value={email} onChange={(e)=>SetEmail(e.target.value)} type="email" placeholder="Email" id="enter-email" />
              </div>
              <div className="form-inputs auth-form-inputs">
                <i className="fa-solid fa-lock"></i>
                <input
                value={password}
                onChange={(e)=>SetPassword(e.target.value)}
                  type={showpswd ? "text" : "password"}
                  placeholder="Password"
                  id="enter-password"
                />
                <i
                  className={showpswd ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"}
                  onClick={togglePassword}
                  id="span"
                ></i>
              </div>
              <p>Forgot Password ? <a href="/">Click here</a></p>
            </div>
            <div className="btn-field">
              <button type="button" onClick={SignUpHere} id="Sign-up-btn">
                Sign Up
              </button>
              <button onClick={LogInHere} type="button" className="disabled" id="Sign-in-btn">
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