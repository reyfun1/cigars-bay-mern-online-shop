import React from 'react'
import { useHistory } from 'react-router'

import styled from 'styled-components'

const LoginPage = () => {

  const history = useHistory()

  const handleGoToRegiserClick = () => {
    history.push('/signup/')
  }
  return (
    <LoginPageStyled className="container mt-5 mb-5">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-6">
          <div className="card p-5"> <span className="circle"><i className="fa fa-check" /></span>
            <h5>Login </h5> <small className="mt-2 text-muted">Join the latest and greatest online cigar store!</small>
            <div className="form-input my-3"> <i className="fa fa-envelope" /> <input type="text" className="form-control" placeholder="Email address" /> </div>
            <div className="form-input mb-3"> <i className="fa fa-lock" /> <input type="password" className="form-control" placeholder="Password" /> </div>
            <button className="btn btn-primary mt-4 signup">Login</button>
            <div className="text-center mt-3"> <span>Or login with these social profile</span> </div>
            <div className="d-flex justify-content-center mt-4"> 
            <button type="button" class="btn btn-outline-danger">
              <span className="bi bi-google"></span> Google
            </button> 
              <span className="social"><i className="fa fa-facebook" /></span>
               <span className="social"><i className="fa fa-twitter" /></span>
                <span className="social"><i className="fa fa-linkedin" /></span> 
            </div>
            <div className="text-center mt-4"> <span>Not a member?</span> <a href="#" className="text-decoration-none" onClick={handleGoToRegiserClick}>Register</a> </div>
          </div>
        </div>
      </div>
    </LoginPageStyled>
  )
}

export default LoginPage

const LoginPageStyled = styled.div`
.bi{
  vertical-align: .225em;
}
`
