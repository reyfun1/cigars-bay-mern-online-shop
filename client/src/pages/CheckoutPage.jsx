import { formatMoney } from 'accounting-js'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import BreadCrumb from '../components/BreadCrumb'
import { useForm, Controller } from 'react-hook-form'

import styled from 'styled-components'

const CheckoutPage = () => {

  const history = useHistory()

  const cart = useSelector(state => state.cart)
  const { cartItems } = cart 

  const [showBilling,setShowBilling] = useState(true)

  const handleReturnToCart = () => {
    history.push('/cart/')
  }

  const onSubmit = e => {
    e.preventDefault()
    const form = e.target

    if(!form.checkValidity()){
      e.stopPropagation()
    }

    form.classList.add('was-validated')

    let result = {} 
    // extract element values and build data json 
    Array.from(form.elements).forEach(el => {
      result[el.name] = el.value
    })

    console.log(result)

  }

  const handleBillingSection = e => {
    setShowBilling(!showBilling)
  }

    return (
        <CheckoutPageStyled className="container p-4">
        <BreadCrumb/>
        {cartItems && <div className="row py-2">
          {/* Small Cart */}
          <div className="col-md-5 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Your cart</span>
              <span className="badge badge-secondary badge-pill text-dark">{cartItems.reduce( (acc,curr) => (curr.qty * 1 + acc), 0 )}</span>
            </h4>
            <ul className="list-group mb-3">
              {cartItems.map( item => {
                return (<li key={item.sku} className="cart-item list-group-item d-flex justify-content-between lh-condensed">

                <div clasName="">
                  <span className="text-muted">({item.qty})</span>
                </div>

                <div className="name-container px-2">
                  <h6 className="my-0">{item.name}</h6>
                  <small className="text-muted">{item.option}</small>
                </div>

                <div className="align-self-end">
                  <span className="text-muted">{formatMoney(item.qty * item.price)}</span>
                </div>
              </li>)
              })}
              {/* <li className="list-group-item d-flex justify-content-between bg-light">
                <div className="text-success">
                  <h6 className="my-0">Promo code</h6>
                  <small>EXAMPLECODE</small>
                </div>
                <span className="text-success">-$5</span>
              </li> */}
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>{formatMoney(cartItems.reduce( (acc, current) => ( (current.qty * current.price * 1) + acc), 0))}</strong>
              </li>
            </ul>
            <form className="p-0">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Promo code" />
                <div className="input-group-append">
                  <button type="submit" className="btn btn-secondary">Redeem</button>
                </div>
              </div>
            </form>
          </div>

          <div className="col-md-7 order-md-1">
            {/* Customer Info*/}
            <h4 className="mb-3">Shipping address</h4>
            <form className="needs-validation" noValidate onSubmit={onSubmit}>
              <div className="row">
                <div className="col-md-3 mb-3">
                  <label htmlFor="firstName">First name</label>
                  <input type="text" className="form-control" name="firstname" id="firstName" placeholder required />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="lastName">Last name</label>
                  <input type="text" className="form-control" name="lastname" id="lastName" placeholder required/>
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
                <div className="col mb-3">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" name="email" id="email" placeholder="you@example.com" required/>
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="address">Address</label>
                <input type="text" className="form-control" name="streetaddress" id="address" placeholder="1234 Main St" required />
                <div className="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="address2">Address 2 <span className="text-muted">(Optional)</span></label>
                <input type="text" className="form-control" name="streetaddress2" id="address2" placeholder="Apartment or suite" />
              </div>
              <div className="mb-3">
                <label htmlFor="city">City</label>
                <input type="text" className="form-control" name="city" id="city" placeholder="City" required />
                <div className="invalid-feedback">
                  Please enter your city
                </div>
              </div>
              <div className="row">
                <div className="col-md-5 mb-3">
                  <label htmlFor="country">Country</label>
                  <select className="form-select d-block w-100" name="country" id="country" required>
                    <option>United States</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="state">State</label>
                  <select className="form-select d-block w-100" name="state" id="state" required>
                    <option></option>
                    {USA_States_Options}
                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="zip">Zip</label>
                  <input type="text" className="form-control" name="zip" id="zip" placeholder required />
                  <div className="invalid-feedback">
                    Zip code required.
                  </div>
                </div>
              </div>
              <div className="form-check mt-2 text-dark">
                <input className="form-check-input" name="save-shipping" type="checkbox" value="" id="save-info"/>
                <label className="form-check-label" for="save-info">
                  Save shipping information for next time
                </label>
              </div>
              <hr className="mb-4" />
              <h4 className="mb-3">Payment</h4>
              <p className="mb-2 text-muted text-uppercase">Credit Card Info</p>
              <div className="d-none my-3">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="credit-card"/>
                  <label className="form-check-label" for="credit-card">
                  Credit Card
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="debit-card"/>
                  <label className="form-check-label" for="debit-card">
                  Debit Card
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="paypal"/>
                  <label className="form-check-label" for="paypal">
                  Paypal
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="cc-name">Name on card</label>
                  <input type="text" className="form-control" name="cc-name" id="cc-name" placeholder required />
                  <small className="text-muted">Full name as displayed on card</small>
                  <div className="invalid-feedback">
                    Name on card is required
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="cc-number">Credit card number</label>
                  <input type="text" className="form-control" name="cc-number" id="cc-number" placeholder required />
                  <div className="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 mb-3">
                  <label htmlFor="cc-expiration">Expiration</label>
                  <input type="text" className="form-control" name="cc-exp" id="cc-expiration" placeholder required />
                  <div className="invalid-feedback">
                    Expiration date required
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="cc-expiration">CVV</label>
                  <input type="text" className="form-control" name="cc-cv" id="cc-cvv" placeholder required />
                  <div className="invalid-feedback">
                    Security code required
                  </div>
                </div>
              </div>
              
              <p className="mb-2 text-muted text-uppercase">Billing Address</p>
              <div className="form-check my-3 text-dark">
                <input className="form-check-input" name="address_same" type="checkbox" onChange={handleBillingSection} value={!showBilling} id="address-same"/>
                <label className="form-check-label" for="address-same">
                  Billing address is the same as shipping address
                </label>
              </div>
              {showBilling ? (
                <>
                <div className="mb-3">
                <label htmlFor="billing-address">Address</label>
                <input type="text" className="form-control" name="billing_streetaddress" id="billing-address" placeholder="1234 Main St" required />
                <div className="invalid-feedback">
                  Please enter your billing address.
                </div>
              </div>
                <div className="mb-3">
                  <label htmlFor="billing-address2">Address 2 <span className="text-muted">(Optional)</span></label>
                  <input type="text" className="form-control" name="billing_streetaddress2" id="billing-address2" placeholder="Apartment or suite" />
                </div>
                <div className="mb-3">
                  <label htmlFor="billing-city">City</label>
                  <input type="text" className="form-control" name="billing_city" id="billing-city" placeholder="City" required />
                  <div className="invalid-feedback">
                    Please enter your city
                  </div>
                </div>
                <div className="row">
                    <div className="col-md-5 mb-3">
                      <label htmlFor="billing_country">Country</label>
                      <select className="form-select d-block w-100" name="billing_country" id="billing-country" required>
                        <option>United States</option>
                      </select>
                      <div className="invalid-feedback">
                        Please select a valid country.
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="billing-state">State</label>
                      <select className="form-select d-block w-100" name="billing_state" id="billing-state" required>
                        <option></option>
                        {USA_States_Options}
                      </select>
                      <div className="invalid-feedback">
                        Please provide a valid state.
                      </div>
                    </div>
                    <div className="col-md-3 mb-3">
                      <label htmlFor="billing-zip">Zip</label>
                      <input type="text" className="form-control" name="billing_zip" id="billing-zip" placeholder required />
                      <div className="invalid-feedback">
                        Zip code required.
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                </>
              )}

              <hr className="mb-4" />
              <div>
                <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
                <button className="btn fw-light text-primary" type="submit" onClick={handleReturnToCart}>Return to Cart</button>
              </div>
            </form>
          </div>
        </div>}
      </CheckoutPageStyled>
    )
}

export default CheckoutPage

const CheckoutPageStyled = styled.div`
.name-container{
  width: 100%;
}

.text-dark{
  label{
    color: black !important;
  }
}
`


const USA_States_Options = <>
	<option value="AL">Alabama</option>
	<option value="AK">Alaska</option>
	<option value="AZ">Arizona</option>
	<option value="AR">Arkansas</option>
	<option value="CA">California</option>
	<option value="CO">Colorado</option>
	<option value="CT">Connecticut</option>
	<option value="DE">Delaware</option>
	<option value="DC">District Of Columbia</option>
	<option value="FL">Florida</option>
	<option value="GA">Georgia</option>
	<option value="HI">Hawaii</option>
	<option value="ID">Idaho</option>
	<option value="IL">Illinois</option>
	<option value="IN">Indiana</option>
	<option value="IA">Iowa</option>
	<option value="KS">Kansas</option>
	<option value="KY">Kentucky</option>
	<option value="LA">Louisiana</option>
	<option value="ME">Maine</option>
	<option value="MD">Maryland</option>
	<option value="MA">Massachusetts</option>
	<option value="MI">Michigan</option>
	<option value="MN">Minnesota</option>
	<option value="MS">Mississippi</option>
	<option value="MO">Missouri</option>
	<option value="MT">Montana</option>
	<option value="NE">Nebraska</option>
	<option value="NV">Nevada</option>
	<option value="NH">New Hampshire</option>
	<option value="NJ">New Jersey</option>
	<option value="NM">New Mexico</option>
	<option value="NY">New York</option>
	<option value="NC">North Carolina</option>
	<option value="ND">North Dakota</option>
	<option value="OH">Ohio</option>
	<option value="OK">Oklahoma</option>
	<option value="OR">Oregon</option>
	<option value="PA">Pennsylvania</option>
	<option value="RI">Rhode Island</option>
	<option value="SC">South Carolina</option>
	<option value="SD">South Dakota</option>
	<option value="TN">Tennessee</option>
	<option value="TX">Texas</option>
	<option value="UT">Utah</option>
	<option value="VT">Vermont</option>
	<option value="VA">Virginia</option>
	<option value="WA">Washington</option>
	<option value="WV">West Virginia</option>
	<option value="WI">Wisconsin</option>
	<option value="WY">Wyoming</option>
  <option value="AS">American Samoa</option>
  <option value="GU">Guam</option>
  <option value="MP">Northern Mariana Islands</option>
  <option value="PR">Puerto Rico</option>
  <option value="UM">United States Minor Outlying Islands</option>
  <option value="VI">Virgin Islands</option>
</>