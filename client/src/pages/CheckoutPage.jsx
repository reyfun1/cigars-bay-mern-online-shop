import React from 'react'
import { useHistory } from 'react-router'
import BreadCrumb from '../components/BreadCrumb'

const CheckoutPage = () => {

  const history = useHistory()

  const handleReturnToCart = () => {
    history.push('/cart/')
  }
    return (
        <div className="container p-4">
        <BreadCrumb/>
        <div className="row py-2">
          <div className="col-md-4 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Your cart</span>
              <span className="badge badge-secondary badge-pill text-dark">3</span>
            </h4>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">Product name</h6>
                  <small className="text-muted">Brief description</small>
                </div>
                <span className="text-muted">$12</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">Second product</h6>
                  <small className="text-muted">Brief description</small>
                </div>
                <span className="text-muted">$8</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">Third item</h6>
                  <small className="text-muted">Brief description</small>
                </div>
                <span className="text-muted">$5</span>
              </li>
              <li className="list-group-item d-flex justify-content-between bg-light">
                <div className="text-success">
                  <h6 className="my-0">Promo code</h6>
                  <small>EXAMPLECODE</small>
                </div>
                <span className="text-success">-$5</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>$20</strong>
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
          <div className="col-md-8 order-md-1">
            <h4 className="mb-3">Contact Information</h4>
            <form className="needs-validation" noValidate>
              <div className="row">
                <div className="col">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>
              </div>
            </form>
            <hr className="my-4" />
            <h4 className="mb-3">Shipping address</h4>
            <form className="needs-validation" noValidate>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="firstName">First name</label>
                  <input type="text" className="form-control" id="firstName" placeholder required />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="lastName">Last name</label>
                  <input type="text" className="form-control" id="lastName" placeholder required />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="address">Address</label>
                <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                <div className="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="address2">Address 2 <span className="text-muted">(Optional)</span></label>
                <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
              </div>
              <div className="mb-3">
                <label htmlFor="city">City</label>
                <input type="text" className="form-control" id="city" placeholder="City" required />
                <div className="invalid-feedback">
                  Please enter your city
                </div>
              </div>
              <div className="row">
                <div className="col-md-5 mb-3">
                  <label htmlFor="country">Country</label>
                  <select className="form-select d-block w-100" id="country" required>
                    <option value>Choose...</option>
                    <option>United States</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="state">State</label>
                  <select className="form-select d-block w-100" id="state" required>
                    <option value>Choose...</option>
                    <option>California</option>
                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="zip">Zip</label>
                  <input type="text" className="form-control" id="zip" placeholder required />
                  <div className="invalid-feedback">
                    Zip code required.
                  </div>
                </div>
              </div>
              <hr className="mb-4" />
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="same-address"/>
                <label class="form-check-label" for="same-address">
                Shipping address is the same as my billing address
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="save-info"/>
                <label class="form-check-label" for="save-info">
                Save this information for next time
                </label>
              </div>
              <hr className="mb-4" />
              <h4 className="mb-3">Payment</h4>
              <div className="d-block my-3">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="credit-card"/>
                  <label class="form-check-label" for="credit-card">
                  Credit Card
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="debit-card"/>
                  <label class="form-check-label" for="debit-card">
                  Debit Card
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="paypal"/>
                  <label class="form-check-label" for="paypal">
                  Paypal
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="cc-name">Name on card</label>
                  <input type="text" className="form-control" id="cc-name" placeholder required />
                  <small className="text-muted">Full name as displayed on card</small>
                  <div className="invalid-feedback">
                    Name on card is required
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="cc-number">Credit card number</label>
                  <input type="text" className="form-control" id="cc-number" placeholder required />
                  <div className="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 mb-3">
                  <label htmlFor="cc-expiration">Expiration</label>
                  <input type="text" className="form-control" id="cc-expiration" placeholder required />
                  <div className="invalid-feedback">
                    Expiration date required
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="cc-expiration">CVV</label>
                  <input type="text" className="form-control" id="cc-cvv" placeholder required />
                  <div className="invalid-feedback">
                    Security code required
                  </div>
                </div>
              </div>
              <hr className="mb-4" />
              <div>
                <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
                <button className="btn fw-light text-primary" type="submit" onClick={handleReturnToCart}>Return to Cart</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}

export default CheckoutPage
