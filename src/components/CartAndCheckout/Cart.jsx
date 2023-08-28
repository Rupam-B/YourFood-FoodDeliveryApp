import React, { useState } from 'react'
import './CartStyle.css'
import { useCartContext } from '../../state/context/cart_context'

const Cart = () => {
  const {cart, total_amount, removeCartItem} = useCartContext()


  // Accesing the context items
  const cartContext = useCartContext();
  const fillDetails = cartContext.checkArr;
  // ........

  const [fillName , setFillName] = useState(fillDetails.newname)
  const [fillUserName , setFillUserName] = useState(fillDetails.newname)
  const [fillEmail , setFillEmail] = useState(fillDetails.email)

  // Razor Pay Setup----------
  const loadScript = (src)=>{
    return new Promise ((resolve) => {
      const script = document.createElement('script')
      script.src = src

      script.onload = () =>{
        resolve(true)
      }
      script.onerror = () =>{
        resolve(false)
      }

      document.body.appendChild(script)
    })
  }
 const displayRazorpay = async (amount)=>{

  const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
  if(!res){
    alert('You are offline... failed to load Razorpay SDK')
    return
  }

  const options = {
    key : 'rzp_test_raMrvMzHnIWOLu',
    currency : "INR",
    amount : amount * 100,
    name : 'YourFood',
    description : 'Thanks For Purchasing',
    image : 'https://images.unsplash.com/photo-1617194191528-9a50cf609304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGZvb2QlMjBkZWxpdmVyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    
    handler : function (response) {
      // alert(response.razorpay_payment_id)
      // alert('Payment Successfull !')
      window.location.assign('/PaymentSuccess')
    },
    prefill :{
      name : fillDetails.newname,
    }
  };

 const paymentObject = new window.Razorpay(options)
 paymentObject.open()

 }
   
  // ---------End Razorpay Setup

  return (
    <>
      <div className='page-container'>


        <div className='bgrnd-blk' >
          <div className=" text-center">
            <h1 className='check-out-heading' >Cart Details</h1>
          </div>
        </div>

        <div className="container pdng-tp">
          <main>
            <div className="row g-5">
              <div style={{padding:'1rem'}} className="col-md-5 col-lg-4 order-md-last">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-primary your-cart">Your cart</span>
                  <span className="badge bg-primary rounded-pill your-cart">{cart.length}</span>
                </h4>
                <ul className="list-group mb-3">
                  {cart.map((menu)=>(
                    <li key={menu.id} className="list-group-item d-flex justify-content-between lh-sm">

                      {/* <div className='dsp-property'> */}
                    <div className='d-flex align-items-center'>
                      <img className='cart-show-img' src={menu.src} alt="" />
                      <h6 style={{width:'8rem'}} className="my-0">{menu.FoodName}</h6>
                    </div>
                    <div className='text-set d-flex'>
                    <span className=" cost-span "> {menu.Cost}.00 ({menu.quantity})</span>
                    <span onClick={()=>removeCartItem(menu.id)} className="text-body-secondary  text-red"><i className="fa-solid txt-red fa-trash"></i></span>
                    {/* </div> */}
                      </div>
                  </li>

                  ))}
                </ul>
                <div className="total-set">
                  <h6 className="my-0">Total</h6>
                  <h6 className="my-0">{total_amount}.00</h6>

                  </div>
              
              </div>
              <div className="col-md-7 col-lg-8">
                <h4 className="mb-3">Billing address</h4>
                <form className="needs-validation">
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <label htmlFor="firstName" className="form-label">First name</label>
                      <input autoComplete='on' type="text" value={fillName} onChange={(e)=>setFillName(e.target.value)} className="form-control" id="firstName" placeholder=""  required="" />
                      <div className="invalid-feedback">
                        Valid first name is required.
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <label htmlFor="lastName" className="form-label">Last name</label>
                      <input  type="text" className="form-control" id="lastName" placeholder=""  required="" />
                      <div className="invalid-feedback">
                        Valid last name is required.
                      </div>
                    </div>

                    <div className="col-12">
                      <label htmlFor="username" className="form-label">Username</label>
                      <div className="input-group has-validation">
                        <span className="input-group-text">@</span>
                        <input autoComplete='on' type="text" value={fillUserName} onChange={(e)=>setFillUserName(e.target.value)} className="form-control" id="username" placeholder="Username" required="" />
                        <div className="invalid-feedback">
                          Your username is required.
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <label htmlFor="email" className="form-label">Email <span className="text-body-secondary">(Optional)</span></label>
                      <input autoComplete='on' type="email" value={fillEmail} onChange={(e)=>setFillEmail(e.target.value)} className="form-control" id="email" placeholder="you@example.com" />
                      <div className="invalid-feedback">
                        Please enter a valid email address for shipping updates.
                      </div>
                    </div>

                    <div className="col-12">
                      <label htmlFor="address" className="form-label">Address</label>
                      <input autoComplete='on' type="text" className="form-control" id="address" placeholder="1234 Main St" required="" />
                      <div className="invalid-feedback">
                        Please enter your shipping address.
                      </div>
                    </div>


                    <div className="col-md-5">
                      <label htmlFor="country" className="form-label">Country</label>
                      <select autoComplete='on' className="form-select" id="country" required="">
                        <option >Choose...</option>
                        <option>India</option>
                      </select>
                      <div className="invalid-feedback">
                        Please select a valid country.
                      </div>
                    </div>

                    <div className="col-md-4">
                      <label htmlFor="state" className="form-label">State</label>
                      <select className="form-select" id="state" required="">
                        <option >Choose...</option>
                        <option>Chhattisgarh</option>
                        <option>Kolkata</option>
                        <option>Pune</option>
                        <option>Andhra Pradesh</option>
                        <option>Odisa</option>
                        <option>Punjab</option>
                        <option>Madhya Pradesh</option>
                        <option>Delhi</option>
                      </select>
                      <div className="invalid-feedback">
                        Please provide a valid state.
                      </div>
                    </div>

                    <div className="col-md-3">
                      <label htmlFor="zip" className="form-label">Zip</label>
                      <input  type="text" className="form-control" id="zip" placeholder="" required="" />
                      <div className="invalid-feedback">
                        Zip code required.
                      </div>
                    </div>
                  </div>

                  <hr className="my-4" />

                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="same-address" />
                    <label className="form-check-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
                  </div>

                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="save-info" />
                    <label className="form-check-label" htmlFor="save-info">Save this information for next time</label>
                  </div>

                  <hr className="my-4" />

                  

                  <hr className="my-4" />

                  {/* <button className="w-100 btn btn-primary btn-lg" type="submit">Proceed to Pay <span className='Check-out-span'>(INR {total_amount}.00)</span></button> */}
                  <button type='button' onClick={()=>displayRazorpay(total_amount)} className="w-100 btn btn-primary btn-lg">Proceed to Pay <span className='Check-out-span'>(INR {total_amount}.00)</span></button>
                </form>
              </div>
            </div>
          </main>

          <footer className="my-5 pt-5 text-body-secondary text-center text-small">
            <p className="mb-1">© 2017–2023 YourFood</p>
            <ul className="list-inline">
              <li className="list-inline-item"><a href="/">Privacy</a></li>
              <li className="list-inline-item"><a href="/">Terms</a></li>
              <li className="list-inline-item"><a href="/">Support</a></li>
            </ul>
          </footer>
        </div>
      </div>
    </>
  )
}

export default Cart