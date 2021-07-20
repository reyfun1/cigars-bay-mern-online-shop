import React from 'react'
import { useHistory } from 'react-router'

import styled from 'styled-components'

const SignUpPage = () => {

  const history = useHistory()

  const handleGoToLoginClick = () => {
    history.push('/login/')
  }
  return (
    <SignUpPageStyled className="container mt-5 mb-5">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-6">
          <div className="card p-5"> <span className="circle"><i className="fa fa-check" /></span>
            <h5 >Sign up </h5> <small className="mt-2 text-muted">Join the latest and greatest online cigar store!</small>
            <div className="form-input my-3"> <i className="fa fa-envelope" /> <input type="text" className="form-control" placeholder="Email address" /> </div>
            <div className="form-input mb-3"> <i className="fa fa-lock" /> <input type="password" className="form-control" placeholder="Password" /> </div>
            <div className="form-input"> <i className="fa fa-lock" /> <input type="password" className="form-control" placeholder="Password (Repeat)" /> </div>
            <button className="btn btn-primary mt-4 signup">Create Account</button>
            <div className="text-center mt-3"> <span>Or continue with these social profile</span> </div>
            <div className="d-flex justify-content-center mt-4"> 
            <button type="button" class="btn btn-outline-danger">
              <span className="bi bi-google"></span> Google
            </button> 
              <span className="social"><i className="fa fa-facebook" /></span>
               <span className="social"><i className="fa fa-twitter" /></span>
                <span className="social"><i className="fa fa-linkedin" /></span> 
            </div>
            <div className="text-center mt-4"> <span>Already a member?</span> <a href="#" className="text-decoration-none" onClick={handleGoToLoginClick}>Login</a> </div>
          </div>
        </div>
      </div>
    </SignUpPageStyled>
  )
}

export default SignUpPage

const SignUpPageStyled = styled.div`
.bi{
  vertical-align: .225em;
}
`
