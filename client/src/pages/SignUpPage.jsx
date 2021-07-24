import React, {useState, useEffect} from 'react'
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

  const [successRegister, setSuccessRegister] = useState(false)

  // Grab the user register info 
  const userRegister = useSelector(state => state.userRegister)
  const { loading , error, userInfo, success } = userRegister 

  // After successfull registartion go to account page
  useEffect(() => {
    if(success){
      setTimeout(() => {
        history.push('/myaccount')
      }, 5000)
    }
  }, [success])

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
      {error && 
        <div className="alert alert-danger" role="alert">
          Error: {error}
      </div>
      }

      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-5">
            <div className="card p-5"> <span className="circle"><i className="fa fa-check" /></span>
                    <h5>Sign up </h5> <small className="mt-2 text-muted">Join the latest and greatest online cigar store!</small>
                  <div className="form-input my-3"> <i className="fa fa-envelope" /> 
                    <input disabled={loading || success ? true : false} type="text" className="form-control" placeholder="Name" value={name} onChange={e => setName(e.target.value)} /> </div>
                  <div className="form-input mb-3"> <i className="fa fa-envelope" /> 
                    <input disabled={loading || success ? true : false} type="email" className="form-control" placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)} /> </div>
                  <div className="form-input mb-3"> <i className="fa fa-lock" />
                    <input disabled={loading || success ? true : false} type="password" className="form-control" placeholder="Password" value={pass1} onChange={e => setPass1(e.target.value)} /> </div>
                  <div className="form-input"> <i className="fa fa-lock" /> 
                    <input disabled={loading || success ? true : false} type="password" className="form-control" placeholder="Password (Repeat)"  value={pass2} onChange={e => setPass2(e.target.value)} /> </div>
                    {loading ? (
                      <div className="my-4 text-center fs-1">
                        <div className="spinner-border" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    ) : (
                      <>
                      {success ? (
                        <div className="alert alert-success my-3" role="alert">
                        Your Account was successfuly created! <i className="bi bi-check-circle"></i>
                      </div>
                      ) : (
                        <>
                        <div className="text-center">
                        <button className="btn btn-primary mt-4 signup" onClick={handleRegisterClick}>Create Account</button>
                      </div>
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

                        </>
                      )}
                      </>
                    )}  
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
