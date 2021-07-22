import React, {useState} from 'react'
import { useHistory } from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
import styled from 'styled-components'

// import actions
import { registerUser } from '../actions/userActions'

const SignUpPage = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  // States for fields 
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass1, setPass1] = useState('')
  const [pass2, setPass2] = useState('')

  // Grab the user register info 
  const userRegister = useSelector(state => state.userRegister)
  const { loading , error, userInfo } = userRegister 

  const handleRegisterClick = () => {
    // to do , handle validation, passwords match, email etc..

    const validData = true

    if(validData){
      dispatch(registerUser(name,email,pass1))
    }
  }

  const handleGoToLoginClick = () => {
    history.push('/login/')
  }

  return (
    <SignUpPageStyled className="container mt-5 mb-5">
      
      {loading && <div className="row">
        <div className="col">
          Loading...
        </div>
      </div>}

      {error && 
      <>
        <h3>ERROR</h3>
        <p>{error}</p>
      </>}

      <div className="row d-flex align-items-center justify-content-center">
        <div className="col">
          <div className="card p-5"> <span className="circle"><i className="fa fa-check" /></span>
            <h5>Sign up </h5> <small className="mt-2 text-muted">Join the latest and greatest online cigar store!</small>
            <div className="form-input my-3"> <i className="fa fa-envelope" /> 
              <input type="text" className="form-control" placeholder="Name" value={name} onChange={e => setName(e.target.value)} /> </div>
            <div className="form-input mb-3"> <i className="fa fa-envelope" /> 
              <input type="email" className="form-control" placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)} /> </div>
            <div className="form-input mb-3"> <i className="fa fa-lock" />
              <input type="password" className="form-control" placeholder="Password" value={pass1} onChange={e => setPass1(e.target.value)} /> </div>
            <div className="form-input"> <i className="fa fa-lock" /> 
              <input type="password" className="form-control" placeholder="Password (Repeat)"  value={pass2} onChange={e => setPass2(e.target.value)} /> </div>
            <button className="btn btn-primary mt-4 signup" onClick={handleRegisterClick}>Create Account</button>
            <div className="text-center mt-3"> <span>Or continue with these social profile</span> </div>
            <div className="d-flex justify-content-center mt-4"> 
            <button type="button" className="btn btn-outline-danger">
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
