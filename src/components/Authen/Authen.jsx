import React, { useState } from 'react'
import './AuthenStyle.css'
import { useCartContext } from '../../state/context/cart_context'

const Authen = () => {

  const cartContext=useCartContext();
  
  // const {cartContext,checkArr}=useCartContext();
  // console.log(cartContext.checkArr);

  const [logIn, SetLogIn] = useState(false)
  const [showpswd, SetShowpswd] = useState(false)
  const [newname, SetNewname] = useState("")
  const [email, SetEmail] = useState("")
  const [password, SetPassword] = useState("")
  


  // console.log(nameRequired);

  const SignUpHere = () => {
    SetLogIn(false);
    const sendArr = { newname, email, password };
    cartContext.SignUpHere(sendArr);
    
    if(sendArr.newname&&sendArr.email&&sendArr.password !==''){
  
    SetPassword('')
    SetNewname('')
    SetEmail('')
  
  
  }
    

  };
  
  const LogInHere = () => {
    SetLogIn(true)
    const checkArr = {newname,email, password};
    cartContext.LogInHere(checkArr);
    
      SetEmail('')
      SetPassword('')

  }
  

  const togglePassword = () => {

    SetShowpswd(!showpswd)

  }
  return (
    <>
      <div className="containerrr">
        <div className='overlay'></div>
        <div className="form-box Auth-form-box">
          <h2>Welcome To YourFood</h2>
          <h1 id="title-field">Sign Up</h1>
          <form className='auth-form'>
            <div className="Auth-input-group">
              {logIn ? '' : <div className="form-inputs auth-form-inputs" id="name-input-field">
                <i className="fa-solid fa-user"></i>
                <input className='Auth-input' value={newname} onChange={(e)=>SetNewname(e.target.value)} type="text" placeholder="User Name" id="enter-user" />
              </div>}
              <div className="form-inputs auth-form-inputs">
                <i className="fa-solid fa-envelope"></i>
                <input className='Auth-input' value={email} onChange={(e)=>SetEmail(e.target.value)} type="email" placeholder="Email" id="enter-email" />
              </div>
              <div className="form-inputs auth-form-inputs">
                <i className="fa-solid fa-lock"></i>
                <input
                className='Auth-input'
                value={password}
                onChange={(e)=>SetPassword(e.target.value)}
                  type={showpswd ? "text" : "password"}
                  placeholder="Password"
                  id="enter-password"
                />
                <i
                  className={showpswd ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"}
                  onClick={togglePassword}
                  id="Auth-span"
                ></i>
              </div>
              <p>Forgot Password ? <a href="/">Click here</a></p>
            </div>
            <div className="btn-field">
              <button className={logIn?'Auth-button-disabled':'Auth-button-enabled'} type="button" onClick={SignUpHere} id="Sign-up-btn">
                Sign Up
              </button>
              
              <button className={logIn?'Auth-button-enabled':'Auth-button-disabled'} onClick={LogInHere} type="button" id="Sign-in-btn">
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