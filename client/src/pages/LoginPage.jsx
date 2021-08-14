import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'

import { loginUser } from '../actions/userActions'

import styled from 'styled-components'
import LoadingSpinner from '../components/LoadingSpinner'

const LoginPage = () => {

  const history = useHistory()
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  // Grab the user login info 
  const userLogin = useSelector(state => state.userLogin)
  const { loading , error, userInfo, success } = userLogin 


  const handleLoginClick = () => {
    // to do , handle validation, passwords match, email etc..
    const validData = true

    if(validData){
      dispatch(loginUser(email,password))
    }
  }

  // After successfull login go to account page
  useEffect(() => {
    if(success){
      setTimeout(() => {
        // TODO: NEED TO PUSH TO /ADMIN WHEN ADMIN IS LOGGED IN 
        history.push('/myaccount')
      }, 1500)
    }
  }, [success])


  const handleGoToRegiserClick = () => {
    history.push('/signup/')
  }

  
  return (
    <LoginPageStyled className="container mt-5 mb-5">

      {error && 
        <div className="alert alert-danger" role="alert">
          Error: {error}
      </div>
      }

      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-6">
          <div className="card p-5"> <span className="circle"><i className="fa fa-check" /></span>
            <h5>Login </h5> <small className="mt-2 text-muted">Join the latest and greatest online cigar store!</small>
            <div className="form-input my-3"> <i className="fa fa-envelope" /> 
              <input type="email" className="form-control" placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className="form-input mb-3"> <i className="fa fa-lock" /> 
              <input type="password" className="form-control" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/> 
            </div>
            
            {loading ? <LoadingSpinner/> : (
              <>
              {success ? (
                <div className="alert alert-success my-3" role="alert">
                  Logged in! <i className="bi bi-check-circle"></i>
                </div>
              ) : (
                <>
                <button className="btn btn-primary mt-4 signup" onClick={handleLoginClick}>Login</button>
                <div className="text-center mt-3"> <span>Or login with these social profile</span> </div>
                <div className="d-flex justify-content-center mt-4"> 
                <button type="button" className="btn btn-outline-danger">
                  <span className="bi bi-google"></span> Google
                </button> 
                  <span className="social"><i className="fa fa-facebook" /></span>
                  <span className="social"><i className="fa fa-twitter" /></span>
                    <span className="social"><i className="fa fa-linkedin" /></span> 
                </div>
                <div className="text-center mt-4"> <span>Not a member?</span> <a href="#" className="text-decoration-none" onClick={handleGoToRegiserClick}>Register</a> 
                </div>
                </>
              )}
              </>
            )}
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
